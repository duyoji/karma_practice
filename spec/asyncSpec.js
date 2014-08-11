/**
 * Created by Tsuyoshi on 2014/08/12.
 */

// sample url : http://lostechies.com/derickbailey/2012/08/18/jasmine-async-making-asynchronous-testing-with-jasmine-suck-less/

define(['plugin/jasmine.async'], function () {
    describe("an async spec", function(){

        var foo = false,
            async = new AsyncSpec(this);

        async.beforeEach(function(done){

            // simulate async stuff and wait 10ms
            setTimeout(function(){
                foo = true;
                done();
            }, 10);

        });

        it("did stuff >>>>>>>>>>>>>>>>>>>>", function(){
            expect(foo).toBe(true);
        });

    });
});

/* use 'runs' and 'waitsFor'
describe("an async spec", function(){
    var done = false;

    beforeEach(function(){
        function doStuff(){
            // simulate async stuff and wait 10ms
            setTimeout(function(){
                done = true;
            }, 10);
        }

        runs(doStuff);

        waitsFor(function(){
            return done;
        });
    });

    it("did stuff", function(){
        expect(done).toBe(true);
    });

});
*/