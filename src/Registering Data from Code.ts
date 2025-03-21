import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-reports-js-angular/viewer";

@Component({
    selector: "registering-data-from-code",
    imports: [Viewer],
    template: `
        <div>
            <button (click)="buttonXmlClick()">Register XML Data</button>
            <button (click)="buttonJsonClick()">Register JSON Data</button>
            <sti-viewer [report]="report" ></sti-viewer>
        </div>`
})

export class RegisteringDataFromCode {
    report = new Stimulsoft.Report.StiReport();

    updateReport(dataSet: Stimulsoft.System.Data.DataSet) {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("TwoSimpleLists.mrt");
        this.report.dictionary.databases.clear();
        this.report.regData("Demo", "Demo", dataSet);
    }

    buttonXmlClick() {
        var dataSet = new Stimulsoft.System.Data.DataSet();
        dataSet.readXmlSchemaFile("Demo.xsd");
        dataSet.readXmlFile("Demo.xml");

        this.updateReport(dataSet);
    }

    buttonJsonClick() {
        var dataSet = new Stimulsoft.System.Data.DataSet();
        dataSet.readJsonFile("Demo.json");

        this.updateReport(dataSet);
    }

    constructor() {
    }
}