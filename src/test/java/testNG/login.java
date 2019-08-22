package testNG;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

public class login {
        public static void main(String[] args) {
            // TODO Auto-generated method stub

            // selenium code
            // create driver object for fire
            // we will strictly implement methods of webdriver
            // class name es Chromedriver. WebDriver es la interface
            System.setProperty("webdriver.chrome.driver", "C:\\Automation\\chromedriver.exe");
            // creo object "driver". New es un memory allocation operator. Crea memoria para
            // la class chromedriver en esta clase
            WebDriver driver = new ChromeDriver();
            // methodosbject.methodname para llamarlo - .get y .getTitle son métodos que ya
            // existen, prehechos de SELENIUM
            driver.get("http://localhost:3001/login");
            System.out.println(driver.getTitle());
            System.out.println(driver.getCurrentUrl());
            System.out.println(driver.getPageSource()); // print pagesource
            driver.findElement(By.id("exampleInputEmail1")).sendKeys("rrhh@endava.com");
            driver.findElement(By.id("exampleInputPassword1")).sendKeys("123456");
            driver.findElement(By.xpath("//button[@class='btn btn-lg botonLogin']")).click();

            Assert.assertEquals(B);

}
