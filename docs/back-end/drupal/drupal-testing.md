# Testing in drupal

See [Testing](general/testing/overview.md) for more general testing information. At idfive we prefer Automated Testing with the following frameworks, for the following test types for drupal 8 and beyond:

- Behavioral: Non Core, [behat](http://behat.org/en/latest/)
- Functional: Core, PHPUnit-Functional
- Unit: Core, PHPUnit-Unit

## Core testing frameworks

Drupal has 4 different types of core testing frameworks that will stick around through D9. There is some overlap in functionality between the different frameworks. They may be refered to by different names depending on how you run them and in what context you're talking about them, but in general:

- PHPUnit-Unit
- PHPUnit-Kernel
- PHPUnit-Functional
- PHPUnit-FunctionalJavascript

### Choosing which framework to use

At idfive we choose to focus on Unit, and Functional tests for the types of sites/modules we build, so we will focus on those.

- What are you trying to test?
- What is the framework that will consume the least amount of system resources, and finsh my tests the fastest?
- Can you test the behavior in a unit test without a lot of core functions? If yes, you want to write a unit test.
- If you need core behavior and you need to perform HTTP requests, then write a functional test.

### Basic codebase example setup

```
MY_MODULE
  src
    MyClass.php
  tests
    src
      Unit
        MyTestCase.php
      Functional
        MyOtherTestCase.php
  MY_MODULE.module
  MY_MODULE.info.yml
  ```

#### Keep in mind

- In order for PHPUnit to run a test class there must be a method that starts with the word "test". So "testTheSiteStillWorks()" works, but "doesTheSiteStillWork()" does not.

### Unit

Unit tests are for testing some very fine-grained behavior with few or no dependencies.

Assume we are testing the following custom class:

```php
<?php
namespace Drupal\MY_MODULE;
/**
 * Defines a MyClass class.
 */
class MyClass {
  private $length = 0;

  /**
   * @return int
   *   The length of the item.
   */
  public function getLength() {
    return $this->length;
  }
}
```

Our unit test to check the getLength() function could look like:

```php
<?php
namespace Drupal\Tests\MY_MODULE\MyClass;
use Drupal\Tests\UnitTestCase;
use Drupal\MY_MODULE\MyClass;

/**
 * Tests basic custom PHP functions.
 *
 * @group MY_MODULE
 */
class MyTestCase extends UnitTestCase {
  protected $myclass;
  /**
   * Before a test method is run, setUp() is invoked.
   * Create new myclass object.
   */
  public function setUp() {
    $this->myclass = new MyClass();
  }
  /**
   * @covers Drupal\MY_MODULE\MyClass::getLength
   */
  public function testGetLength() {
    $this->myclass->setLength(9);
    // Asserts it does not equal 10, provides successful result if passes.
    $this->assertNotEquals(10, $this->myclass->getLength());
  }
  /**
   * Once test method has finished running, whether it succeeded or failed, tearDown() will be invoked.
   * Unset the $myclass object.
   */
  public function tearDown() {
    unset($this->myclass);
  }
}
```

### Functional

Functional Tests can enact core classes/functionality. It is important to remmeber that functional tests essentially spin up a blank site (not even a basic install profile), so all config will need to be done within the test.

#### Example functional test

it simply loads the front page and makes sure it isn't completely WSOD'ed, ie, returns a 200 response.

```php
<?php
namespace Drupal\Tests\MY_MODULE\Functional;
use Drupal\Tests\BrowserTestBase;

/**
 * Test basic functionality of My Module.
 *
 * @group MY_MODULE
 */
class MyOtherTestCase extends BrowserTestBase {

  /**
   * {@inheritdoc}
   */
  public static $modules = [
    // Module(s) required for core functionality, and this custom module.
    'node',
    'views',
    'MY_MODULE',
  ];

  /**
   * {@inheritdoc}
   */
  protected function setUp() {
    // Make sure to complete the normal setup steps in BrowserTestBase first.
    parent::setUp();
    // Set the front page to "node".
    \Drupal::configFactory()
      ->getEditable('system.site')
      ->set('page.front', '/node')
      ->save(TRUE);
  }

  /**
   * Make sure the site still works. For now just check the front page.
   */
  public function testTheSiteStillWorks() {
    // Load the front page.
    $this->drupalGet('<front>');
    // Confirm that the site didn't throw a server error or something else.
    $this->assertSession()->statusCodeEquals(200);
    // Confirm that the front page contains the standard text.
    $this->assertText('Welcome to Drupal');
  }
}
```

### Running tests

Be sure PHPUnit is installed via composer, it is in the core composer.json as a requirement. Test via `vendor/bin/phpunit --version`, adjust path as needed. See [Running PHPUnit Tests](https://www.drupal.org/docs/8/phpunit/running-phpunit-tests) for complete setup instructions.

- To run all tests (Unit, Kernel, Functional) from a particular module: `vendor/bin/phpunit -c core/phpunit.xml.dist modules/custom/MY_MODULE`
- To run only all unit tests from a specific module: `vendor/bin/phpunit -c core/phpunit.xml.dist modules/custom/MY_MODULE/tests/src/Unit`
- To run a specific unit test: `vendor/bin/phpunit -c core/phpunit.xml.dist modules/custom/MY_MODULE/tests/src/Unit/UnitTest.php`
- To run a specific group test: `vendor/bin/phpunit -c core/phpunit.xml.dist modules/custom --group MY_MODULE`

#### Set up a custom PHPUnit.xml

You can also set up custom test suites, as well as gain the ability to run from the module rood by adding a php-unit.xml to the module root, by copying the php-unit.xml you set up above, and adding the following:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<phpunit bootstrap="core/tests/bootstrap.php" colors="true">
  <testsuites>
    <testsuite name="MY_MODULE">
      <directory>modules/custom/MY_MODULE/tests</directory>
    </testsuite>
  </testsuites>
</phpunit>
```

Now simply run `vendor/bin/phpunit` or if multiple suites are added `vendor/bin/phpunit --testsuite MY_MODULE` from the module root.

## Non core testing frameworks

### Behat

TBD
