package Steps;


import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.apache.http.util.Asserts;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import static java.lang.Thread.sleep;

public class Login {
    ChromeDriver driver;
    @Given("I go to {string}")
    public void I_go_to(String url) throws Throwable {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.navigate().to(url);
    }

    @When("I enter username {string}")
    public void I_enter_username(String username) throws Throwable {
        driver.findElement(By.id("exampleInputEmail1")).sendKeys(username);
    }

    @When("I enter password {string}")
    public void I_enter_password(String password) throws Throwable {
        driver.findElement(By.id("exampleInputPassword1")).sendKeys(password);
    }

    @When("I click on login")
    public void i_click_on_login() throws InterruptedException {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.cssSelector("button[class='btn btn-lg botonLogin']")).click();
        sleep(2000L);
    }

    @Then("I am able to login to homepage")
    public void I_am_able_to_login_to_homepage() throws Throwable {
        WebElement element = driver.findElement(By.className("homeBtn"));
        Asserts.check(element != null,"check homepage");
    }

    @Then("I am not able to login to homepage")
    public void I_am_not_able_to_login_to_homepage() throws Throwable {
        WebElement element = driver.findElement(By.className("homeBtn"));
        //Asserts.check(element = null,"check homepage");
    }
}



