"use strict";(self.webpackChunkidfive_docs=self.webpackChunkidfive_docs||[]).push([[9883],{8286:(e,l,s)=>{s.r(l),s.d(l,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>a,metadata:()=>n,toc:()=>t});const n=JSON.parse('{"id":"back-end/drupal/drupal-helpfull-commands","title":"Helpful Drupal Commands","description":"Templating","source":"@site/docs/back-end/drupal/drupal-helpfull-commands.md","sourceDirName":"back-end/drupal","slug":"/back-end/drupal/drupal-helpfull-commands","permalink":"/docs/back-end/drupal/drupal-helpfull-commands","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/back-end/drupal/drupal-helpfull-commands.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Drupal Field Snippets","permalink":"/docs/back-end/drupal/drupal-field-snippets"},"next":{"title":"Hybrid Content Types","permalink":"/docs/back-end/drupal/drupal-hybrid-content-types"}}');var i=s(4848),d=s(8453);const a={},r="Helpful Drupal Commands",c={},t=[{value:"Templating",id:"templating",level:2},{value:"Reveal all variables in a twig template",id:"reveal-all-variables-in-a-twig-template",level:3},{value:"Dump",id:"dump",level:4},{value:"Devel",id:"devel",level:4},{value:"In twig template",id:"in-twig-template",level:5},{value:"In a hook_preprocess",id:"in-a-hook_preprocess",level:5},{value:"Xdebug",id:"xdebug",level:4},{value:"Patching",id:"patching",level:2},{value:"Apply a patch",id:"apply-a-patch",level:3},{value:"Create a patch",id:"create-a-patch",level:3},{value:"Drush",id:"drush",level:2},{value:"Show available aliases",id:"show-available-aliases",level:3},{value:"@sites",id:"sites",level:3},{value:"Upload a DB",id:"upload-a-db",level:3},{value:"Create a user and assign as admin",id:"create-a-user-and-assign-as-admin",level:3},{value:"Drush 8",id:"drush-8",level:4},{value:"Drush 9",id:"drush-9",level:4},{value:"Partial configuration installs",id:"partial-configuration-installs",level:3},{value:"Composer",id:"composer",level:2},{value:"Helpful composer commands",id:"helpful-composer-commands",level:3},{value:"Update drupal core",id:"update-drupal-core",level:3}];function h(e){const l={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.header,{children:(0,i.jsx)(l.h1,{id:"helpful-drupal-commands",children:"Helpful Drupal Commands"})}),"\n",(0,i.jsx)(l.h2,{id:"templating",children:"Templating"}),"\n",(0,i.jsx)(l.h3,{id:"reveal-all-variables-in-a-twig-template",children:"Reveal all variables in a twig template"}),"\n",(0,i.jsx)(l.h4,{id:"dump",children:"Dump"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"Be sure local development settings are set up, so twig will use dump"}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"{{ dump(_context|keys) }}"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"{{ dump(variable_key_name) }}"})}),"\n"]}),"\n",(0,i.jsx)(l.h4,{id:"devel",children:"Devel"}),"\n",(0,i.jsx)(l.h5,{id:"in-twig-template",children:"In twig template"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:["Be sure ",(0,i.jsx)(l.a,{href:"https://www.drupal.org/project/devel",children:"devel module"})," is installed and enabled."]}),"\n",(0,i.jsx)(l.li,{children:"Be sure kint submodule enabled."}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"{{ kint(_context|keys) }}"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"{{ kint(variable_key_name) }}"})}),"\n"]}),"\n",(0,i.jsx)(l.h5,{id:"in-a-hook_preprocess",children:"In a hook_preprocess"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:["Be sure ",(0,i.jsx)(l.a,{href:"https://www.drupal.org/project/devel",children:"devel module"})," is installed and enabled."]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"dsm(MY_VAR);"})," from within the function."]}),"\n"]}),"\n",(0,i.jsx)(l.h4,{id:"xdebug",children:"Xdebug"}),"\n",(0,i.jsx)(l.p,{children:"If running xdebug, you can use a preprocess function to set a breakpoint:"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-php",children:"function MY_THEME_preprocess(&$variables, $hook) {\n  if ($hook == 'node') {\n    xdebug_break();\n  }\n}\n"})}),"\n",(0,i.jsx)(l.h2,{id:"patching",children:"Patching"}),"\n",(0,i.jsx)(l.h3,{id:"apply-a-patch",children:"Apply a patch"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"cd THE_MODULE_TO_PATCH"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"curl -O https://drupal.org/files/THE_PATCH.patch"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"git apply -v THE_PATCH.patch"})}),"\n",(0,i.jsxs)(l.li,{children:["if the git apply doesn't work, use ",(0,i.jsx)(l.code,{children:"patch -p1 < THE_PATCH.patch"})]}),"\n"]}),"\n",(0,i.jsx)(l.h3,{id:"create-a-patch",children:"Create a patch"}),"\n",(0,i.jsxs)(l.p,{children:["See more detailed information on ",(0,i.jsx)(l.a,{href:"https://www.drupal.org/node/707484",children:"Making a Drupal patch with Git"}),"."]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"git diff > DRUPAL.ORG_ISSUE_NUMBER-descriptive-text-here.patch"})}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"drush",children:"Drush"}),"\n",(0,i.jsx)(l.h3,{id:"show-available-aliases",children:"Show available aliases"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"drush sa"})}),"\n",(0,i.jsxs)(l.li,{children:["Update acquia aliases: ",(0,i.jsx)(l.code,{children:"drush acquia-update"})]}),"\n"]}),"\n",(0,i.jsx)(l.h3,{id:"sites",children:"@sites"}),"\n",(0,i.jsxs)(l.p,{children:["The ",(0,i.jsx)(l.code,{children:"@sites"}),' command is especially useful on acquia multi-sites, as it targets "All Sites" on the install. This command needs to be run directly on the desired server however, as it does not play nice with drush aliases.']}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"drush @DESIRED_DRUSH_ALIAS ssh"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"drush @sites cr"})}),"\n"]}),"\n",(0,i.jsx)(l.h3,{id:"upload-a-db",children:"Upload a DB"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"drush @DESIRED_DRUSH_ALIAS sql-drop"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"drush @DESIRED_DRUSH_ALIAS < sppnew8t_dev_2019-01-31.sql"})}),"\n"]}),"\n",(0,i.jsx)(l.h3,{id:"create-a-user-and-assign-as-admin",children:"Create a user and assign as admin"}),"\n",(0,i.jsxs)(l.p,{children:["This is extremely helpful if admin account credentials are lost or unavailable, but server/codebase access is present. To note, special chars are not available when setting passwords for tis, due to a ",(0,i.jsx)(l.a,{href:"https://github.com/drush-ops/drush/issues/125",children:"known drush issue"}),"."]}),"\n",(0,i.jsx)(l.h4,{id:"drush-8",children:"Drush 8"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"drush @DESIRED_DRUSH_ALIAS user-create USERNAME"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"drush @DESIRED_DRUSH_ALIAS user-password USERNAME --password=PASSWORD"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:'drush @DESIRED_DRUSH_ALIAS user-add-role "administrator" --name=USERNAME'})}),"\n"]}),"\n",(0,i.jsx)(l.h4,{id:"drush-9",children:"Drush 9"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:'drush user:create USERNAME --mail="EMAIL" --password="PASSWORD"'})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:'drush user:role:add "administrator" USERNAME'})}),"\n"]}),"\n",(0,i.jsx)(l.h3,{id:"partial-configuration-installs",children:"Partial configuration installs"}),"\n",(0,i.jsx)(l.p,{children:"This is helpful in certain instances to update a single config across all sites in say a multi-site. In acquia/others, needs to be run directly on server, not via drush aliases, as the @sites does not play nice with aliases."}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"drush @DESIRED_DRUSH_ALIAS ssh"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"drush @sites cim --partial --source=modules/contrib/PATH/TO/YOUR/CONFIG_FILE.yml"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"drush @sites updb"})}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"composer",children:"Composer"}),"\n",(0,i.jsx)(l.h3,{id:"helpful-composer-commands",children:"Helpful composer commands"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"composer clearcache"})," clears local composer caches if you just pushed an update to composer repo and need to pull it."]}),"\n",(0,i.jsxs)(l.li,{children:["If you want to know all packages that will be updated by the update command, use the ",(0,i.jsx)(l.code,{children:"--dry-run"})," option first."]}),"\n"]}),"\n",(0,i.jsx)(l.h3,{id:"update-drupal-core",children:"Update drupal core"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"composer update drupal/core --with-dependencies"})}),"\n",(0,i.jsxs)(l.li,{children:["See ",(0,i.jsx)(l.a,{href:"https://www.drupal.org/docs/8/update/update-core-via-composer",children:"Update core via composer"}),"."]}),"\n"]})]})}function o(e={}){const{wrapper:l}={...(0,d.R)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,l,s)=>{s.d(l,{R:()=>a,x:()=>r});var n=s(6540);const i={},d=n.createContext(i);function a(e){const l=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(d.Provider,{value:l},e.children)}}}]);