
define([
    '../accUtils', 
    "require", 
    "exports", 
    "knockout", 
    "ojs/ojbootstrap", 
    "ojs/ojarraydataprovider",
    "text!data/wayback2023.json",
    "ojs/ojknockout", "ojs/ojchart", "ojs/ojtoolbar"],
 function(accUtils,require, exports, ko, ojbootstrap_1, ArrayDataProvider,data) {

    class ChartModel {
        constructor() {
            this.numSeries = 4;
            this.numGroups = 2;
            this.groupNames = ["Jan23", "Fev23", "Mar23", "Apr23", "May23", "Jun23"];
            this.seriesNames = ["HOL Light", "Isabelle", "Coq", "Lean", "Metamath", "Mizar"];
            this.valueCache = {};
            this.observableData = ko.observableArray(JSON.parse(data));
            this.dataProvider = new ArrayDataProvider(this.observableData, {
                keyAttributes: "id",
            });
            this.stackValue = ko.observable("off");
            this.orientationValue = ko.observable("vertical");
            this.updateButtonClick = () => {
                this.valueCache = {};
                this.observableData(this.getData());
            };
            this.seriesButtonClick = () => {
                this.numSeries =
                    this.numSeries <= 4 ? this.numSeries + 1 : this.numSeries - 1;
                this.observableData(this.getData());
            };
            this.groupButtonClick = () => {
                this.numGroups =
                    this.numGroups <= 4 ? this.numGroups + 1 : this.numGroups - 1;
                this.observableData(this.getData());
            };
        }
    }
    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return ChartModel;
  }
);
