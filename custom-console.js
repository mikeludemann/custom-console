(function() {
   if (!console) {
      console = {};
   }
   var old = console.log;
   var logger = document.getElementById('log');

   function arrObj(data) {

      var result = data.some(value => {

         return typeof value == 'object'

      });

      return result;

   }

   function isFunction(callback) {

      if (typeof callback === 'function') {

         return true;

      } else {

         return false;

      }

   }

   var isDateFormat = function(input) {

      if (Object.prototype.toString.call(input) === '[object Date]') {

         return true;

      } else {

         return false;

      }

   };

   function getVarName(what) {

      for (var name in window) {

         if (window[name] == what) {

            return name;

         }

      }

      return ('');

   }

   function isRegExp(value) {

      return toString.call(value) === '[object RegExp]';

   }

   console.log = function(message) {
     
      if (Array.isArray(message)) {

         if (arrObj(message)) {

            logger.innerHTML += 'Array with Object element: ' + getVarName(message) + ' => ' + JSON.stringify(message) + '<br /> ->' + ' (' + message.constructor + ')' + '<br /><br />';

         } else {

            logger.innerHTML += 'Array element: ' + getVarName(message) + ' => ' + JSON.stringify(message) + '<br /> ->' + ' (' + message.constructor + ')' + '<br /><br />';

         }

      } else if (message === null && typeof message === 'object') {

         logger.innerHTML += 'Null element: ' + getVarName(message) + ' => ' + message + '<br /> ->' + ' (' + message.constructor + ')' + '<br /><br />';

      } else if (typeof message === 'object') {

         if (isDateFormat(message)) {

            logger.innerHTML += 'Date / Time element: ' + getVarName(message) + ' => ' + message + '<br /> ->' + ' (' + message.constructor + ')' + '<br /><br />';

         } else if (isRegExp(message)) {

            logger.innerHTML += 'Regular Expression element: ' + getVarName(message) + ' => ' + message + '<br /> ->' + ' (' + message.constructor + ')' + '<br /><br />';

         } else {

            logger.innerHTML += 'Object element: ' + getVarName(message) + ' => ' + (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br /> ->' + ' (' + message.constructor + ')' + '<br /><br />';

         }

      } else if (typeof message === 'symbol') {

         logger.innerHTML += 'Symbol element: ' + getVarName(message) + ' => ' + message + '<br /> ->' + ' (' + message.constructor + ')' + '<br /><br />';

      } else if (typeof message === 'undefined') {

         logger.innerHTML += 'Undefined element: ' + getVarName(message) + ' => ' + message + '<br /><br />';

      } else if (typeof message === 'boolean') {

         logger.innerHTML += 'Boolean element: ' + getVarName(message) + ' => ' + message + '<br /> ->' + ' (' + message.constructor + ')' + '<br /><br />';

      } else if (message === '') {

         logger.innerHTML += 'Empty element: ' + getVarName(message) + ' => ' + message + '<br /><br />';

      } else if (typeof message === 'number') {

         logger.innerHTML += 'Number element: ' + getVarName(message) + ' => ' + message + '<br /> ->' + ' (' + message.constructor + ')' + '<br /><br />';

      } else if (typeof message === 'string') {

         logger.innerHTML += 'String element: ' + getVarName(message) + ' => ' + message + '<br /> ->' + ' (' + message.constructor + ')' + '<br /><br />';

      } else if (isFunction(message)) {

         logger.innerHTML += 'Function element: ' + getVarName(message) + ' => ' + message + '<br /> ->' + ' (' + message.constructor + ')' + '<br /><br />';

      } else {

         logger.innerHTML += message + '<br /><br />';

      }

   }

})();