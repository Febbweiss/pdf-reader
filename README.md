PDF-Reader is a small web application listing PDF documents and allowing to visualize them.


Building :
---

This project is built using [Bower](http://bower.io).
Just install it and run :

```
bower install
```

How it works :
---

Written in AngularJS, PDF-Reader calls a resource (_/data/documents.json_) providing a list of documents such as :

```
[{"title": "My report", "link": "report.pdf"]
```

The list is rendering such as a paginated table with a quick filter input. Clicking on the _View_ button load the document in the right side pane.

Documents are stored in a _documents_ folder.


Built with :
---

* UI : [Bulma](https://bulma.io)
* MVC : [AngularJS](https://angularjs.org/)
* PDF Reader : [angular-pdf](http://github.com/sayanee/angularjs-pdf)
* Pagination : [angularUtils](https://github.com/michaelbromley/angularUtils.git)
* Icons : [Font Awesome](http://fontawesome.io)

Licence :
----------

Source code is under [MIT Licence](http://opensource.org/licenses/mit-license.php)