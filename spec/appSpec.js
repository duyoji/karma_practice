/**
 * Created by Tsuyoshi on 2014/08/12.
 */
describe('App', function () {

    it('initialize', function () {
        expect(typeof App !== 'undefined').toBeTruthy();
    });

    it('is singleton', function(){
        var app1 = new App();
        var app2 = new App();
        expect( app1 === app2 ).toBeTruthy();
    });
});