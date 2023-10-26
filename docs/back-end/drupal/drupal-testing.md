# Testing in drupal

The following should provide a general overview of Drupal testing frameworks we use at idfive, as well as some starter/example code.

See [Testing](general/testing/overview.md) for more general testing information. At idfive we prefer Automated Testing with the following frameworks, for the following test types for drupal 8 and beyond:

- Behavioral: Non Core, [behat](http://behat.org/en/latest/)
- Functional: Core, PHPUnit-Functional
- Unit: Core, PHPUnit-Unit

It is important to remember that some tests (behavioral mainly) require fully functioning environments in order to test, making them less suitable to include as a test in say, a repo for a standalone module.

## Testing levels for idfive drupal projects

- **Level 1**: Unit Testing for custom PHP functions. Write unit tests for any custom PHP functions created in themes/modules. This will require that all custom functionality be implemented in classes.
- **Level 2**: Level 1, plus: Behavioral tests written for major site interactions, including logging in/out, and loading homepage along with one of each custom content type and check to see that no major pages fail to load.
- **Level 3**: Level 1 and 2, plus: Checking any needed major API endpoints/etc, to ensure applications that rely on this CMS's API do not fail.

Any and all of these can be integrated into a CI for the client, or run ad-hoc as needed. Testing level TBD by project scope.

## Core testing frameworks

Drupal has 4 different types of core testing frameworks that will stick around through D9. There is some overlap in functionality between the different frameworks. They may be referred to by different names depending on how you run them and in what context you're talking about them, but in general:

- PHPUnit-Unit
- PHPUnit-Kernel
- PHPUnit-Functional
- PHPUnit-FunctionalJavascript

### Choosing which framework to use

At idfive we choose to focus on Unit, and Functional tests for the types of sites/modules we build, so we will focus on those.

- What are you trying to test?
- What is the framework that will consume the least amount of system resources, and finish my tests the fastest?
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
        MyClassTest.php
      Functional
        MyClassTest.php
  MY_MODULE.module
  MY_MODULE.info.yml
  ```

#### Keep in mind

- In order for PHPUnit to run a test class there must be a method that starts with the word "test". So "testTheSiteStillWorks()" works, but "doesTheSiteStillWork()" does not.
- All functionality should be class based.
- Naming conventions matter, a lot. The file to test "MyClass.php" should be "MyClassTest.php", and comments/etc inside need to match.

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
class MyClassTest extends UnitTestCase {
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

Functional Tests can enact core classes/functionality. It is important to remember that functional tests essentially spin up a blank site (not even a basic install profile), so all config will need to be done within the test.

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

You can also set up custom test suites, as well as gain the ability to run from the module rood by adding a phpunit.xml to the module root, by copying the phpunit.xml you set up above, and adding the following:

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

Behat is an automated testing system. Its strength is in behavioral testing, so it fits perfectly in our use case. Behat tests are written in plain English phrases which are then combined into human readable scenarios. This was inspired by Ruby’s [Gherkin](https://github.com/cucumber/cucumber/tree/master/gherkin) syntax. This is probably the most appealing aspect of Behat. Most tests are understandable by anyone.

- Utilize the [Behat drupal extension](https://www.drupal.org/project/drupalextension). This adds a library of common interactions with drupal to the behat framework.
- See [system requirements](https://behat-drupal-extension.readthedocs.io/en/v4.0.1/requirements.html), and be sure they are installed.
- This can also be added into a CI process in order to ensure no critical functionality is compromised prior to code deployments.

#### Syntax

##### Feature

```gherkin
Feature: Log in and out of the site.
  In order to maintain an account
    As a site visitor
    I need to log in and out of the site.
```

These are essentially comments that tell us what this feature is all about.

- Feature: The name of the feature we are testing.
- Benefit: What benefit the feature gives.
- Role: Who this functionality applies to.
- Action: What actions actually happen to make this happen.

##### Scenario

```gherkin
Scenario: Logs in to the site
  Given I am on "/"
  When I follow "Log In"
    And I fill in "Username" with "USER_NAME"
    And I fill in "Password" with "USER_PASS"
    And I press "Log in"
  Then I should see "Log out"
    And I should see "My account"
```

These define actual actions behat is to perform using the drupal framework or others.

- Description: A description of the actual action this scenario performs.
- Context: The first line executed. Usually provides a page to start on.
- Events: The events to follow, in order, once things kick off.
- Steps: The individual steps of the event.
- Outcome: Defines any desired/non-desired outcomes.

To note, the indentation does not matter, it is simply for easier understanding.

#### Setup and example

Assuming a fully functional drupal 8 environment, with composer installed. Also see [stand-alone installation](https://behat-drupal-extension.readthedocs.io/en/v4.0.1/localinstall.html). Starting from the projects root folder:

- `mkdir behavioral_tests`
- `cd behavioral_tests`
- Create composer.json:

```json
{
  "name": "idfive/MY_PROJECT_behavioral_testing",
  "description": "Testing MY_PROJECT.",
  "require": {
      "drupal/drupal-extension": "*"
  },
  "config": {
    "bin-dir": "bin/"
  }
}
```

- Run `composer install --with-dependencies`
- Configure your testing environment by creating a file called behat.yml with the following. Be sure that you point the base_url at the web site you want to test. Do not include a trailing slash. If using on local lando, be sure to add port, ie: "http://umd-general-theme.lndo.site:8080".

```yml
default:
  suites:
    default:
      contexts:
        - FeatureContext
        - Drupal\DrupalExtension\Context\DrupalContext
        - Drupal\DrupalExtension\Context\MinkContext
        - Drupal\DrupalExtension\Context\MessageContext
        - Drupal\DrupalExtension\Context\DrushContext
  extensions:
    Drupal\MinkExtension:
      goutte: ~
      selenium2: ~
      base_url: http://MY_LOCAL_SITE.lndo.test
    Drupal\DrupalExtension:
      blackbox: ~
```

- Run `bin/behat --init`
- This will generate a features/bootstrap/FeatureContext.php
- Run `bin/behat -dl`, you should see a long list that starts with "default | Given I am an anonymous user", if everything is installed correctly.
- Add features/loginout.feature (replacing USER_NAME and USER_PASS):

```gherkin
Feature: Log in and out of the site.
  In order to maintain an account
    As a site visitor
    I need to log in and out of the site.

Scenario: Logs in to the site
  Given I am on "/"
  When I follow "Log In"
    And I fill in "Username" with "USER_NAME"
    And I fill in "Password" with "USER_PASS"
    And I press "Log in"
  Then I should see "Log out"
    And I should see "My account"

Scenario: Logs out of the site
  Given I am on "/"
  When I follow "Log In"
    And I fill in "Username" with "USER_NAME"
    And I fill in "Password" with "USER_PASS"
    And I press "Log in"
    And I follow "Log out"
  Then I should see "Log in"
    And I should not see "My account"

Scenario: Attempts login with wrong credentials.
  Given I am on "/"
  When I follow "Log In"
    And I fill in "Username" with "badusername"
    And I fill in "Password" with "boguspass"
    And I press "Log in"
  Then I should see "Sorry, unrecognized username or password."
    And I should not see "My account"
```

- Now run `bin/behat`.
- You should see the feature test run this basic test in the console. Note any that pass or fail.
- You may now add additional tests to start checking specific functionality.
