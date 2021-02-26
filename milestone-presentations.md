# Milestone presentations

## Milestone 3
- Have you decided whose code will be carried forward?
- Create 2 branches on Interactive projects
    - milestone_3_group_a_develop (team members share this for development)
        - protected
        - create a branch for yourself for every feature you create
            - milestone_3_group_a_sidgorad_add_meetings
                - Alternatively, branches can be named like...
                - Story/PJXIB-123—saketa-yasavi
                - defect/PJXIB-345—fixed-alignment-card
    - milestone_3_group_a_master (permissions will be revoked)
        - protected
- Commit messages convention
    - Commit BUDP-898 Fixed merge cart scenarios
- Each person works on a page (suggestion)
- Implement all feedback
- Start with the SCSS
    - How will you split CSS into partials
        - _vars.scss
        - utils.scss
        - nav.scss
        - btn.scss
        - card.scss
- Go through the v2 version of workshops-app
- Go through handlebars documentation (how to use loops, how to use if statements)
- Creating models, views, controllers

## Checklist - Things to care of in Milestone 1 (and later)
- RWD
    - Fluid layout
    - Fluid images
    - Mobile-first approach
- SEO
    - meta description
    - Site map
- SEO and Accessibility
    - semantic tags
    - img should have proper alt attribute (do not say "Image of mountains with rising sun" -> instead "mountains with rising sun")
        - presentational images should be provided with alt=""
    - Use proper labels (you can use sr-only etc. to hide form sighted people)
    - Properly use forms
```html
<form action="" method="post">
    <div class="form-group">
        <label for="username">Name</label>
        <input type="text" id="username" name="uname" value="john" />
    </div>

    <div class="form-group">
        <label for="password">Password</label>
        <input type="text" id="password" name="password" />
    </div>

    <div class="form-group">
        <button type="submit">Submit</button>
        <input type="reset" value="Reset" />
        <button type="reset">Reset</button>
    </div>
</form>
```
- Run your page through NVDA and Lighthouse, and 2 browsers - Chrome, Firefox, Edge (2 browsers at least)
- Run your pages through W3C HTML and CSS validator
- Optional: Minify the CSS using a CSS minifier, and include it in place of the source CSS. KEEP THE ORIGINAL. DO NOT DISCARD IT!!!
- Name CSS classes well
- And a lot more (we will discuss with examples in some session)

## Pointers for Milestone 1 presentation
- 2 days on html + 5 - 6 days on css (SEO, some parts accessibility - except ARIA)
- Project introduction
    - 4 lines summary
    - screenshots
- Tools and Approach
    - VSCode
        - HTML and CSS validator
        - minify CSS files
    - Lighthouse for ...
    - NVDA for ...
        - Landmarks menu (shows regions - to check for udnerstanding of semantic tags)
        - Landmarks menu screenshot
        - Keyboard navigation - take some form (say add meetings)
    - Branching
        - Main branch per person
            - A milestone branch
            - A PR was raised to merge milestone branch to main branch
- Hosted the project on Apache Web server
- Open the screen and VSCode
- Explain project structure
        - css/
        - dist/
        - js
        - html
    - Explain different HTML pages - 1 line
    - How the CSS has been structured
        - Explain about the responsive approach
        - 640px is breakpoint
    - Brief note on JS
- SEO checklist
    - description (145-165 characters)
    - semantic
    - img have alt attribute
    - title tag for links with more description (5 - 6 words at max)
- Accessibility
    - semantic
    - labels
    - hidden labels (sr-only)
    - "Read more" links etc. should come with .sr-only text
- Why doctype -> we are using the html5
- lang attribute in html
    - meta tags
        - viewport
        - description
        - order in which you included CSS
            - how does the order help? if you want to override any general styles in pages-pecific stylesheet for example
            - top-down appraoch to explain HTML
                - why lists?
            - explain forms
                - action
                - method
                - label and association with input
                - make sure form has submit button
        - in calendar page explain how you used relative and absolute positioning to position the calendar entry within the calendar
