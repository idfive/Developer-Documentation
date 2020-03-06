# git

For all projects, unless specifically stated, we adopt the [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) workflow

## Special Considerations for Pantheon

 * Pantheon will accept git branch names of any length or format, **but** will only create multidev environments if they follow specific rules: 
    * Maximum of eleven (11) characters, _including_ the branch prefix
    *  No uppercase letters in the name 
    * No folder structures
 * Examples:
     * `f-bfy-21211`: _feature-details on bugify-ticket number_
     * `h-BB-1`: _hotfix-details on Bitbucket-issue number_

## Known Issue When Starting Git Flow on Sourcetree

After you initialize Git Flow on Sourcetree, you will have to edit the git config file the repository to reflect the prefixes you set in the GUI. (If you use a different prefix and/or folder structure than the default, such as with Pantheon.) 