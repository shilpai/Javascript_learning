function abc(){  
            var x=10;  //local variable  
            alert(x);
        }  

        abc();


        var marks=80;  //global variable  
        function a(){  
            document.write("The marks in function 'a' is :- " + marks + "<br/>");  
        }  
        function b(){  
            document.write("The marks in function 'b' is :- " + marks);  
        } 

        a();
        b();
