package testNG;

import org.testng.annotations.Test;

public class testNGCarLoan {
    @Test(groups={"smoke"})
    public void TryingAgain()
    {
        System.out.println("First test in Car Loan");
    }

    @Test
    public void hello()
    {
        System.out.println("hello");
    }

    @Test(enabled = false)
    public void disabled()
    {
        System.out.println("wont execute");
    }

    @Test(dependsOnMethods={"TryingAgain", "hello"})
    public void Second()
    {
        System.out.println("Second solo corre una vez que haya corrido tryingagain y hello en ese orden");
    }
    @Test(timeOut = 4000)
    public void timeout()
    {
        System.out.println("wont fail until after 40 secs have passed");
    }

}

