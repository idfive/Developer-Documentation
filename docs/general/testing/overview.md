# Testing Overview

Testing is a part of the development process that should have the goal of making your project more maintainable. Your choice of testing strategies and test types should depend on your goals for maintainability, and the budget of the project.

## Testing strategies

Since writing tests is sometimes just more code in the codebase to maintain, its best to start with a strategy.

- Test-driven development
- Automated testing
- Continuous Integration

### Test-driven development

This normally means that tests are written before functionality. Ie, write tests, then create functionality to fulfill them. This normally means a very large amount of tests are being written.

### Automated testing

Having repeatable automated testing instead of manual testing should be a goal whenever possible. Automated testing simply means that tests can be run via a script or test runner, that alerts on fail/etc. This also means that the tests should be repeatable, and can help with regression testing as well.

### Continuous Integration

CI takes the idea of automated testing a bit further. It usually meansthat a on push to a repo, tests are run there, and emails/notifications/etc can happen to say if code should/could be deployed or not. CI integrations depend on quality tests being written, lest substandard code be deployed.

- Continuous Delivery: Code change is always considered good if the tests don't fail. In this strategy, a passing CI build is considered ready to deploy or release.
- Continuous Deployment: If the continuous delivery strategy tells you that the project could be deployed, then the continuous deployment strategy automates the deployment and release based on the passing test build. "If it passes, tag and deploy".

## Types of tests

- Behavioral
- Functional
- Unit

### Behavioral overview

- Behavioral tests verify a high-level abstract behavior.
- If you can describe the test by saying something like: "If I look at the web site I should see the welcome message," then your test is likely a behavioral test.
- Behavioral tests seldom address which specific technologies or configurations are present, and focus on what is happening, or what the user does.

Frameworks like [behat](http://behat.org/en/latest/) are used for this type of testing.

### Functional overview

- Functional tests verify interactions between systems or sub-systems.
- For instance, if you want to know how your module's code interacts with a specific type of database, then you would write a functional test. In this case, the functional test would not be testing whether the code works or whether the database works, but how the code and database interact.

Functional tests tend to be specific to technology and configuration, but can also be more generalized. They might seem similar to behavioral tests. For instance, if you write a Drupal module that specifies a new permission, you'd also write a test to verify that a user logged in without that permission can not perform a given task. However, we're not actually testing what the user does, we're testing what the systems do, and whether they limit the abilities of users without that permission.

### Unit overview

- Strictly speaking, a unit test is a test of the smallest unit of executable code. In PHP that's a method or function. In a less strict sense, unit tests have as few dependencies as possible in order to test expectations about a very limited part of the code.
- So if you make a class, you'd write a unit test for each of the methods of that class which you want to be sure has a specific behavior.

Generally, unit tests are there to prove that an atomic-level behavior is correct. In a trivial example, if you have a function named add() that adds numbers, you'd write a unit test to test only the behavior of this method and nothing else. Interactions with other systems or configuration would be minimized in order to make sure you're only testing the behavior of the add() method.
