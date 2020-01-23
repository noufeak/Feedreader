# Project Overview

This project is about practicing a standard of development known as "test-driven development." I have given a web-based application that reads RSS feeds in order to test it to ensure that it works well!. I have used [Jasmine](http://jasmine.github.io/) as a tool for testing.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development." This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

## Steps to run the project

1. Run the project locally by opening index.html in a browser.
2. Roll down to see the tests that have passed successfully.
3. If you want to add further tests or change some, go to feedreader.js file.

## Development Strategy

1. Familiarized myself with the starter code.
2. Inside the RSS Feed suite, I wrote a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL is not empty. Also, another test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. Wrote a new test suite named `"The menu"` that contains a test that ensures the menu element is hidden by default, and a test that ensures the menu changes visibility when the menu icon is clicked. 
4. Wrote a test suite named `"Initial Entries"` that contains a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
5. Wrote a test suite named `"New Feed Selection"` that contains a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
