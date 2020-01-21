# Drupal 8 Services

One of the concepts introduced in Drupal 8 is *services*. "As a developer, services are used to perform operations like accessing the database or sending an e-mail." [*Drupal Documentation*](https://www.drupal.org/docs/8/api/services-and-dependency-injection/services-and-dependency-injection-in-drupal-8) Drupal core provides [numerous services](https://api.drupal.org/api/drupal/core%21core.services.yml/8.2.x) for use by developers. For example, Drupal core includes an [http client](https://api.drupal.org/api/drupal/core%21core.services.yml/service/http_client/8.2.x) that can be used in modules and injected into services, plugins, or controllers.

There are two files necessary for creating a service: a services.yml file and a php file that includes the code providing the service.

## services.yml files

The services.yml file names and defines the service. The file should be named module-name.services.yml and reside in the module's main directory. The file requires at a minimum service name and a reference to the class that includes the service code.

For example:

```services:
  star_wars_api_test.client:
    class: Drupal\star_wars_api_test\StarWarsClientService
    arguments: ['@http_client']
```

creates a service names 'star_wars_api_test.client.' The arguments here injects the core Drupal http_client service into this new custom service. Just like any array, multiple arguments can be passed to the service. See the [Drupal documentation](https://www.drupal.org/docs/8/api/services-and-dependency-injection/structure-of-a-service-file) for the full list of service properties. The '@' sign here tells Drupal that the argument is a service.

## The PHP file

The PHP file containing the code for the service resides in the src directory in the main module directory. In the __construct method of the service, the injected service becomes a property of the class:

```class StarWarsClientService
{
protected $client;

public function __construct(Client $client)
{
    $this->client = $client;
}
```

Then methods can be written to retrieve json data from a REST API:

```public function getMovies($num)
{
    $random_movies = [];
    $url = 'https://swapi.co/api/films/';
    $movies = json_decode($this->client->get($url)->getBody()->__toString(), true);
    $results = $movies['results'];
    $random_keys = array_rand($results, $num);
    foreach ($random_keys as $key) {
        array_push($random_movies, $results[$key]);
    }
    return $random_movies;
}
```

## Using the service.

Once the service is defined and the code in place, instantiating the registered service passing the static core Drupal service method and calling the included methods:

```$client = \Drupal::service('star_wars_api_test.client');
$movies = $client->getMovies(3);
```
