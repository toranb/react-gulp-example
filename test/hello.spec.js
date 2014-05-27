describe("hello", function() {
    beforeEach(function() {
        $(document.body).append("<div id='app'>");
    });

    it("world", function() {
        var x = document.getElementById('content');
        console.log(x);
        expect(true).to.be.false;
    });
});
