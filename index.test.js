const submitOrder = require("./index.js");

submitOrder(12345);
  setTimeout(function() {
      describe("Shopping Cart Retrieval", function() {
          it("Should retrieve the correct cart", function() {
              Test.expect(PromiseChecks.getShoppingCartAsyncSucceeded(), "Shopping cart was not successfully retrieved");
          });
      });
      describe("Profile Retrieval", function() {
          it("Should retrieve the correct profile", function() {
              Test.expect(PromiseChecks.getProfileAsyncSucceeded(), "Profile was not successfully retrieved");
          });
      });
      describe("Shipping Calculation", function() {
          it("Should send in the correct cart", function() {
              Test.expect(PromiseChecks.calculateShippingCorrectCart(), "An invalid shopping cart was provided");
          });
          it("Should send in the correct ZIP code", function() {
              Test.expect(PromiseChecks.calculateShippingCorrectZip(), "An invalid ZIP code was provided");
          });
      });
      describe("Order Submission", function() {
          it("Should successfully submit the order", function() {
              Test.expect(PromiseChecks.placeOrderAsyncSucceeded(), "Order was not successfully submitted");
          });
      });
  }, 2000);