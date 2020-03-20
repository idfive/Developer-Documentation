# Drupal 8 Services

One of the concepts introduced in Drupal 8 is *services*. "As a developer, services are used to perform operations like accessing the database or sending an e-mail." [*Drupal Documentation*](https://www.drupal.org/docs/8/api/services-and-dependency-injection/services-and-dependency-injection-in-drupal-8) Drupal core provides [numerous services](https://api.drupal.org/api/drupal/core%21core.services.yml/8.2.x) for use by developers. For example, Drupal core includes an [http client](https://api.drupal.org/api/drupal/core%21core.services.yml/service/http_client/8.2.x) that can be used in modules and injected into services, plugins, or controllers.

In general, we at idfive prefer to use services for external API calls/etc whenever possible.

There are two files necessary for creating a service: a services.yml file and a php file that includes the code providing the service.

## services.yml files

The services.yml file names and defines the service. The file should be named module_name.services.yml and reside in the module's main directory. The file requires at a minimum service name and a reference to the class that includes the service code.

### HTTP services.yml example

MY_MODULE/MY_MODULE.services.yml:

```yml
services:
  MY_CUSTOM_CLIENT.client:
    class: Drupal\MY_MODULE\MyCustomClientService
    arguments: ['@http_client']
```

creates a service names 'MY_CUSTOM_CLIENT.client.' The arguments here injects the core Drupal http_client service into this new custom service. Just like any array, multiple arguments can be passed to the service. See the [Drupal documentation](https://www.drupal.org/docs/8/api/services-and-dependency-injection/structure-of-a-service-file) for the full list of service properties. The '@' sign here tells Drupal that the argument is a service.

## The PHP class file

The PHP file containing the code for the service resides in the src/Services directory in the main module directory. In the __construct method of the service, the injected service becomes a property of the class:

### HTTP PHP example

MY_MODULE/src/Services/MyCustomClientService.php:

```php
class MyCustomClientService
{
protected $client;

public function __construct(Client $client)
{
    $this->client = $client;
}
```

Then methods can be written to retrieve json data from a REST API, or whatever is needed:

```php
public function getStuff($num)
{
    $url = 'https://MY_API_ENDPOINT.com?limit=' . $num;
    $stuff = json_decode($this->client->get($url)->getBody()->__toString(), true);
    return $stuff;
}
```

Altogether, that looks like the following:

```php
<?php

namespace Drupal\MY_MODULE;

use GuzzleHttp\Client;

/**
 * Class MyCustomClientService.
 */
class MyCustomClientService
{
    /**
     * @var GuzzleHttp\Client
     */
    protected $client;

    /**
     * Constructs a new StarWarsClientService object.
     */
    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    /**
     * Public method to return random set of movies
     */
    public function getStuff($num)
    {
        $url = 'https://MY_API_ENDPOINT.com?limit=' . $num;
        $stuff = json_decode($this->client->get($url)->getBody()->__toString(), true);
        return $stuff;
    }
}
```

## Using your new service

Once the service is defined and the code in place, instantiating the registered service by passing the static core Drupal service method and calling the included methods:

```php
$client = \Drupal::service('MY_CUSTOM_CLIENT.client');
$stuff = $client->getStuff(3);
```
