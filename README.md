## How do I project looks like

My resume will look like this
![](http://i.imgur.com/huZomVz.jpg)

## repository includes the following files:

* **index.html**: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
* **js/helper.js**: Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. More on helper.js further down.
* **js/resumeBuilder.js**: This file is empty. You should write your code here.
* **js/jQuery.js**: The jQuery library.
* **css/style.css**: Contains all of the CSS needed to style the page.
* **README.md**: 
The GitHub readme file.
* and some images in the images directory.

### Instruction:
The resume has four distinct sections: work, education, projects and a header with biographical information. 

1. The JSON objects, each one representing a different resume section. The objects that I create follow the schema below exactly. Property names are case-sensitive. My JSON objects are formatted correctly using <a href="http://jsonlint.com/" target="_blank">JSONlint.com</a>.

* `bio` contains:
        
            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string 
                  github: string
                  twitter: string 
                  location: string
            welcomeMessage: string 
            skills: array of strings
            biopic: url
            display: function taking no parameters

* `education` contains:
      
            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: integer (graduation date)
                 url: string
            onlineCourses: array with
                 title: string
                 school: string
                 date: integer (date finished)
                 url: string
            display: function taking no parameters

* `work` contains
          
            jobs: array of objects with
                 employer: string 
                 title: string 
                 location: string 
                 dates: string (works with a hyphen between them)
                 description: string 
            display: function taking no parameters

* `projects` contains:

            projects: array of objects with
                  title: string 
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters

2. Iterate through each JSON object and append its information to index.html in the correct section.
 * First off, I used jQuery’s `selector.append()` and `selector.prepend()` functions to modify index.html. `selector.append()` makes an element appear at the end of a selected section. `selector.prepend()` makes an element appear at the beginning of a selected section.
* I also using the JavaScript method `string.replace(old, new)` to swap out all the placeholder text (e.g. `%data%`) for data from your resume JSON objects.

3. The resume includes an interactive map. Do the following to add it. 
 *  `<div id=”mapDiv”>`.
 * `<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places"></script>`

4. All adding elements to the resume is within functions. And all of the functions are encapsulated within the same objects containing resume data. 

5. the resume also `console.log()` information about click locations.  `logClicks(x,y)` 

## Additional Style
1. It’s possible to review additional information when you click on the pins in the map.
2. It's possible to interact when you click on the icons or buttons.



