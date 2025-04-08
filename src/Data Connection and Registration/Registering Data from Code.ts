import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-reports-js-angular/viewer";

@Component({
    selector: "registering-data-from-code",
    imports: [Viewer],
    template: `
        <div class="container">
            <div class="container-button">
                <button (click)="buttonXmlClick()" class="button" title="Using regData() method for registering XML data">Register XML Data</button>
                <button (click)="buttonJsonClick()" class="button" title="Using regData() method for registering JSON data">Register JSON Data</button>
            </div>
            <div>
                <sti-viewer [report]="report"></sti-viewer>
            </div>
        </div>`,
    styleUrls: ['../styles.css']
})

export class RegisteringDataFromCode {
    report = new Stimulsoft.Report.StiReport();

    updateReport(dataSet: Stimulsoft.System.Data.DataSet) {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("Reports/TwoSimpleLists.mrt");
        this.report.dictionary.databases.clear();
        this.report.regData("Demo", "Demo", dataSet);
    }

    buttonXmlClick() {
        var dataSet = new Stimulsoft.System.Data.DataSet();
        dataSet.readXmlSchemaFile("Data/Demo.xsd");
        dataSet.readXmlFile("Data/Demo.xml");

        this.updateReport(dataSet);
    }

    buttonJsonClick() {
        var dataSet = new Stimulsoft.System.Data.DataSet();
        dataSet.readJsonFile("Data/Demo.json");

        this.updateReport(dataSet);
    }

    constructor() {
    }
}