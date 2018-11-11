package com.java.test.bdd.test.runner;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;



@RunWith(Cucumber.class)
@CucumberOptions(
        format = { "pretty", "html:target/feature" },
        glue = "com.java.test.bdd.test.steps",
        features = "classpath:feature/login1.feature"
)

public class CucumberRunnerClass {

}
