
it('should get number of calls', function() {
  var callback = sinon.spy();

  callback.should.have.callCount(0);
  callback.should.not.be.called();
  callback.should.not.be.calledOnce();
  callback.should.not.be.calledTwice();
  callback.should.not.be.calledThrice();

  callback();

  callback.should.have.callCount(1);
  callback.should.be.called();
  callback.should.be.calledOnce();
  callback.should.not.be.calledTwice();
  callback.should.not.be.calledThrice();

  callback();

  callback.should.have.callCount(2);
  callback.should.be.called();
  callback.should.not.be.calledOnce();
  callback.should.be.calledTwice();
  callback.should.not.be.calledThrice();

  callback();

  callback.should.have.callCount(3);
  callback.should.be.called();
  callback.should.not.be.calledOnce();
  callback.should.not.be.calledTwice();
  callback.should.be.calledThrice();

  callback();

  callback.should.have.callCount(4);
  callback.should.be.called();
  callback.should.not.be.calledOnce();
  callback.should.not.be.calledTwice();
  callback.should.not.be.calledThrice();
});

it('should check if stub was called with specific this', function () {
  var callback = sinon.spy();

  var obj = {};

  callback.call(obj);

  callback.should.be.calledOn(obj);

  var obj2 = {};

  callback.call(obj);

  callback.should.be.alwaysCalledOn(obj);

  callback.call(obj2);

  callback.should.not.be.alwaysCalledOn(obj);
  callback.should.not.be.alwaysCalledOn(obj2);

  callback.should.be.calledOn(obj2);
});
