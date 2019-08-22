package testNG;

import org.testng.annotations.*;

public class testNG1HomeLoan {
    @Test
    public void TestMethod1()
    {
        System.out.println("First test");
    }

    @Test
    public void TestMethod2()
    {
        System.out.println("Second test");
    }

    @Test
    public void Mobile1()
    {
        System.out.println("Mobile 1 testing regex");
    }

    @Test
    public void Mobile2()
    {
        System.out.println("Mobile 2 testing regex");
    }
    @BeforeTest //se ejecuta antes que lo que viene en el tag <test> del xml. es para prerequisitos tipo cargar data, empezar el appium server, etc
    public void Prerequisites()
    {
        System.out.println("open chrome");
    }
    @AfterTest
    //se ejecuta al final
    public void EndTest()
    {
        System.out.println("close chrome");
    }
    @BeforeSuite
    //se ejecuta antes que suite
    public void BeforeSuite()
    {
        System.out.println("chrome, set up system property");
    }
    @AfterSuite
    //se ejecuta al final de la suite
    public void AfterSuite()
    {
        System.out.println("clean up all cookies");
    }

    @BeforeMethod
    //se ejecuta antes de cada metodo, ej para borrar cookies
    public void beforeMeth()
    {
        System.out.println("before sign in");
    }

    @BeforeClass
    //se ejecuta antes de cada clase. Igual que el beforemethod, class y method son de java. Suite y test son del xml de testng
    public void beforeCla()
    {
        System.out.println("open test application");
    }

    @AfterClass
    //se ejecuta al final
    public void afterClass()
    {
        System.out.println("close test application");
    }
}
/* beforesuite - chrome set up system properties
beforetest - open chrome
beforeclass - open test application
beforemethod - sign in
test - search for customer
test - search for product
aftersuite - clean up all cookies
aftertest - close chrome
afterclass - close test application
aftermethod - signout
 */