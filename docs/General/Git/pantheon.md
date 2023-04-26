# Special Considerations for Pantheon

 * Pantheon will accept git branch names of any length or format, **but** will only create multidev environments if they follow specific rules:
    * Maximum of eleven (11) characters, _including_ the branch prefix
    *  No uppercase letters in the name
    * No folder structures
 * Examples:
     * `f-bfy-21211`: _feature-details on bugify-ticket number_
     * `h-BB-1`: _hotfix-details on Bitbucket-issue number_
