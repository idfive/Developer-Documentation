# Drupal Users and Roles

## Checking a users role

```php
use Drupal\user\Entity\User;

$user = User::load(\Drupal::currentUser()->id());
$roles = $user->getRoles();

if($user->hasRole('administrator')) {
    // If they are an admin
}

if(!$user->hasRole('administrator')) {
    // If they arent an admin
}

```