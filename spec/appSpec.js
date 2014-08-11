/**
 * Created by Tsuyoshi on 2014/08/12.
 */

define(['lib/app'], function (App){
    describe('App', function () {

        it('initialize', function () {
            expect(typeof App !== 'undefined').toBeTruthy();
        });

        it('is singleton', function(){
            var app1 = App.getInstance();
            var app2 = App.getInstance();
            expect( app1 === app2 ).toBeTruthy();
        });
    });
});