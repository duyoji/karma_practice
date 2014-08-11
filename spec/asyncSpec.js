/**
 * Created by Tsuyoshi on 2014/08/12.
 */
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