# Interactive Resume Project

Author: Darin Davis


## OVERVIEW

This is my solution to the second project in the Udacity Front End Web
Developer Nanodegree.


## DESIGN

This page is consists of a minimal framework of HTML (index.html) containing
no data.  The data displayed is populated via Javascript (js/resumeBuilder.js)
and formatted via CSS (css/style.css).  Two additional Javascript files
(js/jQuery.js and js/helper.js) provide library functions utilized in
resumeBuilder.js.

I created resumeBuilder.js progressively by completing exercises in the
Udacity Javascript course.  The remaining files were provided as part of
the course materials.

### ADDITIONAL FEATURES BEYOND THE BASE SPECIFICATIONS

* URL added to work.jobs array entries, and linked to employer name
* URL added to projects.projects array entries, and linked to project title
* Locations for projects are pinned to the Google map. Note: There appears to bea bug in services.textSearch() because the last project location isn't pinned).


## INTERACTIVE FEATURES

### Internationalize button

At the bottom left of the page, you may click the word "Internationalize"
to convert my name (in the top header) from "Darin Davis" to "Darin DAVIS".

### Google Map

A Google map resides at the bottom of the page.  On this map are pins
indicating locations where I have lived and worked.
