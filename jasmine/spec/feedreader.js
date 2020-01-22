/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    describe('RSS Feeds', () => {
        /* A test to make sure that the
         * allFeeds variable has been defined and that it is not empty.
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('Feed URL defined', () => {
           for(const feed of allFeeds){
             url = feed.url;
             expect(url).toBeDefined();
             expect(url.length).not.toBe(0);
           }
         });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Feed name defined', () => {
           for(const feed of allFeeds){
             name = feed.name;
             expect(name).toBeDefined();
             expect(name.length).not.toBe(0);
           }
         });
    });

    /* A new test suite named "The menu" */
  describe('The menu', () => {

    /* A test that ensures the menu element is
    * hidden by default.
    */
    it('Menu is hidden', () => {
      expect(document.body).toHaveClass('menu-hidden');
    });

    /* A test that ensures the menu changes
    * visibility when the menu icon is clicked.
    */
    it('The menu changes visibility whenever clicked', () => {
      $('.menu-icon-link').trigger('click');
      $('.menu-icon-link').trigger('click');
      expect($('.menu-hidden')).toBeTruthy();
    });
  });


    /* A new test suite named "Initial Entries" */
  describe('Initial Entries', () => {

    beforeEach(done => {
      loadFeed(0, () => done());
    });
    /* A test that ensures when the loadFeed
    * function is called and completes its work, there is at least
    * a single .entry element within the .feed container.
    */
    it('loads at least one entry', done => {
      expect($('.feed').length).toBeGreaterThan(0);
      done();
    });
  });


    /* A new test suite named "New Feed Selection" */
  describe('New Feed Selection', () => {
    let firstLoadedFeed;

    beforeEach(done => {
      loadFeed(0, () => {
        firstLoadedFeed = $('.feed').html();
        loadFeed(1, done);
      });
    });

    /* A test that ensures when a new feed is loaded
    * by the loadFeed function that the content actually changes.
    */
    it('Feed content changed', done => {
      expect($('.feed').html() === firstLoadedFeed).toBe(false);
      done();
    });
  });

}());
