package ar.edu.ejempoci;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("ar.edu.ejempoci");

        noClasses()
            .that()
                .resideInAnyPackage("ar.edu.ejempoci.service..")
            .or()
                .resideInAnyPackage("ar.edu.ejempoci.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..ar.edu.ejempoci.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
