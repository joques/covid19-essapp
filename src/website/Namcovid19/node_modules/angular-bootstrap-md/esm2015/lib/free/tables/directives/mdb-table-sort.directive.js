import { __decorate, __metadata } from "tslib";
import { Directive, EventEmitter, HostListener, Input, Output, ElementRef, Renderer2, OnInit, } from '@angular/core';
var SortDirection;
(function (SortDirection) {
    SortDirection["ASC"] = "ascending";
    SortDirection["DESC"] = "descending";
    SortDirection["CONST"] = "constant";
})(SortDirection || (SortDirection = {}));
let MdbTableSortDirective = class MdbTableSortDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.sortedInto = true;
        this.dataSource = [];
        this.sortEnd = new EventEmitter();
        this.sorted = new EventEmitter();
    }
    onclick() {
        this.sortDataBy(this.trimWhiteSigns(this.sortBy.toString()));
        this.sortEnd.emit(this.dataSource);
        this.sorted.emit({
            data: this.dataSource,
            sortOrder: this.order,
            sortBy: this.sortBy,
        });
    }
    trimWhiteSigns(headElement) {
        return headElement.replace(/ /g, '');
    }
    moveArrayItem(arr, oldIndex, newIndex) {
        while (oldIndex < 0) {
            oldIndex += arr.length;
        }
        while (newIndex < 0) {
            newIndex += arr.length;
        }
        if (newIndex >= arr.length) {
            let k = newIndex - arr.length;
            while (k-- + 1) {
                arr.push(null);
            }
        }
        arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
        return arr;
    }
    sortDataBy(key) {
        let ariaPass = true;
        const setAria = (sort, id) => {
            if (ariaPass) {
                const inverse = sort === 'ascending' ? 'descending' : 'ascending';
                this.renderer.setAttribute(this.el.nativeElement, 'aria-sort', sort);
                this.renderer.setAttribute(this.el.nativeElement, 'aria-label', `${id}: activate to sort column ${inverse}`);
                ariaPass = false;
            }
        };
        key = key.split('.');
        this.dataSource.sort((a, b) => {
            let i = 0;
            while (i < key.length) {
                a = a[key[i]];
                b = b[key[i]];
                i++;
            }
            if (a < b) {
                setAria('ascending', key);
                this.order = SortDirection.ASC;
                return this.sortedInto ? 1 : -1;
            }
            else if (a > b) {
                setAria('descending', key);
                this.order = SortDirection.DESC;
                return this.sortedInto ? -1 : 1;
            }
            else if (a == null || b == null) {
                this.order = SortDirection.CONST;
                return 1;
            }
            else {
                this.order = SortDirection.CONST;
                return 0;
            }
        });
        this.sortedInto = !this.sortedInto;
    }
    ngOnInit() {
        const key = this.trimWhiteSigns(this.sortBy.toString()).split('.');
        this.renderer.setAttribute(this.el.nativeElement, 'aria-label', `${key}: activate to sort column descending`);
    }
};
MdbTableSortDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input('mdbTableSort'),
    __metadata("design:type", Array)
], MdbTableSortDirective.prototype, "dataSource", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MdbTableSortDirective.prototype, "sortBy", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MdbTableSortDirective.prototype, "sortEnd", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MdbTableSortDirective.prototype, "sorted", void 0);
__decorate([
    HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MdbTableSortDirective.prototype, "onclick", null);
MdbTableSortDirective = __decorate([
    Directive({
        selector: '[mdbTableSort]',
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], MdbTableSortDirective);
export { MdbTableSortDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS90YWJsZXMvZGlyZWN0aXZlcy9tZGItdGFibGUtc29ydC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBQ1QsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLElBQUssYUFJSjtBQUpELFdBQUssYUFBYTtJQUNoQixrQ0FBaUIsQ0FBQTtJQUNqQixvQ0FBbUIsQ0FBQTtJQUNuQixtQ0FBa0IsQ0FBQTtBQUNwQixDQUFDLEVBSkksYUFBYSxLQUFiLGFBQWEsUUFJakI7QUFXRCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQVVoQyxZQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFUL0QsZUFBVSxHQUFHLElBQUksQ0FBQztRQUdLLGVBQVUsR0FBZSxFQUFFLENBQUM7UUFHekMsWUFBTyxHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO1FBQ3pELFdBQU0sR0FBNkIsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUVWLENBQUM7SUFFNUMsT0FBTztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSztZQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWMsQ0FBQyxXQUFnQjtRQUM3QixPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxhQUFhLENBQUMsR0FBUSxFQUFFLFFBQWdCLEVBQUUsUUFBZ0I7UUFDL0QsT0FBTyxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLFFBQVEsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLFFBQVEsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxRQUFRLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUMxQixJQUFJLENBQUMsR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUM5QixPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDZCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hCO1NBQ0Y7UUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxVQUFVLENBQUMsR0FBaUI7UUFDMUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXBCLE1BQU0sT0FBTyxHQUFHLENBQUMsSUFBZ0MsRUFBRSxFQUFPLEVBQUUsRUFBRTtZQUM1RCxJQUFJLFFBQVEsRUFBRTtnQkFDWixNQUFNLE9BQU8sR0FBRyxJQUFJLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztnQkFFbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNyRSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3JCLFlBQVksRUFDWixHQUFHLEVBQUUsNkJBQTZCLE9BQU8sRUFBRSxDQUM1QyxDQUFDO2dCQUNGLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDbEI7UUFDSCxDQUFDLENBQUM7UUFFRixHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQU0sRUFBRSxDQUFNLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDVixPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFO2dCQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNkLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsQ0FBQyxFQUFFLENBQUM7YUFDTDtZQUVELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDVCxPQUFPLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUM7Z0JBRS9CLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQztpQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQztnQkFFaEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pDO2lCQUFNLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7Z0JBQ2pDLE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDO2dCQUNqQyxPQUFPLENBQUMsQ0FBQzthQUNWO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3JCLFlBQVksRUFDWixHQUFHLEdBQUcsc0NBQXNDLENBQzdDLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUExRnlCLFVBQVU7WUFBb0IsU0FBUzs7QUFOeEM7SUFBdEIsS0FBSyxDQUFDLGNBQWMsQ0FBQzs4QkFBYSxLQUFLO3lEQUFXO0FBQzFDO0lBQVIsS0FBSyxFQUFFOztxREFBZ0I7QUFFZDtJQUFULE1BQU0sRUFBRTs4QkFBVSxZQUFZO3NEQUFvQztBQUN6RDtJQUFULE1BQU0sRUFBRTs4QkFBUyxZQUFZO3FEQUE4QztBQUlyRDtJQUF0QixZQUFZLENBQUMsT0FBTyxDQUFDOzs7O29EQVFyQjtBQXBCVSxxQkFBcUI7SUFIakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtLQUMzQixDQUFDO3FDQVd3QixVQUFVLEVBQW9CLFNBQVM7R0FWcEQscUJBQXFCLENBb0dqQztTQXBHWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmVudW0gU29ydERpcmVjdGlvbiB7XG4gIEFTQyA9ICdhc2NlbmRpbmcnLFxuICBERVNDID0gJ2Rlc2NlbmRpbmcnLFxuICBDT05TVCA9ICdjb25zdGFudCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU29ydGVkRGF0YSB7XG4gIGRhdGE6IGFueVtdO1xuICBzb3J0T3JkZXI6IHN0cmluZztcbiAgc29ydEJ5OiBzdHJpbmc7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJUYWJsZVNvcnRdJyxcbn0pXG5leHBvcnQgY2xhc3MgTWRiVGFibGVTb3J0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgc29ydGVkSW50byA9IHRydWU7XG4gIG9yZGVyOiBzdHJpbmc7XG5cbiAgQElucHV0KCdtZGJUYWJsZVNvcnQnKSBkYXRhU291cmNlOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIHNvcnRCeTogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBzb3J0RW5kOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcbiAgQE91dHB1dCgpIHNvcnRlZDogRXZlbnRFbWl0dGVyPFNvcnRlZERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxTb3J0ZWREYXRhPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uY2xpY2soKSB7XG4gICAgdGhpcy5zb3J0RGF0YUJ5KHRoaXMudHJpbVdoaXRlU2lnbnModGhpcy5zb3J0QnkudG9TdHJpbmcoKSkpO1xuICAgIHRoaXMuc29ydEVuZC5lbWl0KHRoaXMuZGF0YVNvdXJjZSk7XG4gICAgdGhpcy5zb3J0ZWQuZW1pdCh7XG4gICAgICBkYXRhOiB0aGlzLmRhdGFTb3VyY2UsXG4gICAgICBzb3J0T3JkZXI6IHRoaXMub3JkZXIsXG4gICAgICBzb3J0Qnk6IHRoaXMuc29ydEJ5LFxuICAgIH0pO1xuICB9XG5cbiAgdHJpbVdoaXRlU2lnbnMoaGVhZEVsZW1lbnQ6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGhlYWRFbGVtZW50LnJlcGxhY2UoLyAvZywgJycpO1xuICB9XG5cbiAgcHVibGljIG1vdmVBcnJheUl0ZW0oYXJyOiBhbnksIG9sZEluZGV4OiBudW1iZXIsIG5ld0luZGV4OiBudW1iZXIpIHtcbiAgICB3aGlsZSAob2xkSW5kZXggPCAwKSB7XG4gICAgICBvbGRJbmRleCArPSBhcnIubGVuZ3RoO1xuICAgIH1cbiAgICB3aGlsZSAobmV3SW5kZXggPCAwKSB7XG4gICAgICBuZXdJbmRleCArPSBhcnIubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAobmV3SW5kZXggPj0gYXJyLmxlbmd0aCkge1xuICAgICAgbGV0IGsgPSBuZXdJbmRleCAtIGFyci5sZW5ndGg7XG4gICAgICB3aGlsZSAoay0tICsgMSkge1xuICAgICAgICBhcnIucHVzaChudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXJyLnNwbGljZShuZXdJbmRleCwgMCwgYXJyLnNwbGljZShvbGRJbmRleCwgMSlbMF0pO1xuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICBzb3J0RGF0YUJ5KGtleTogc3RyaW5nIHwgYW55KSB7XG4gICAgbGV0IGFyaWFQYXNzID0gdHJ1ZTtcblxuICAgIGNvbnN0IHNldEFyaWEgPSAoc29ydDogJ2FzY2VuZGluZycgfCAnZGVzY2VuZGluZycsIGlkOiBhbnkpID0+IHtcbiAgICAgIGlmIChhcmlhUGFzcykge1xuICAgICAgICBjb25zdCBpbnZlcnNlID0gc29ydCA9PT0gJ2FzY2VuZGluZycgPyAnZGVzY2VuZGluZycgOiAnYXNjZW5kaW5nJztcblxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhcmlhLXNvcnQnLCBzb3J0KTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICdhcmlhLWxhYmVsJyxcbiAgICAgICAgICBgJHtpZH06IGFjdGl2YXRlIHRvIHNvcnQgY29sdW1uICR7aW52ZXJzZX1gXG4gICAgICAgICk7XG4gICAgICAgIGFyaWFQYXNzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGtleSA9IGtleS5zcGxpdCgnLicpO1xuXG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IGtleS5sZW5ndGgpIHtcbiAgICAgICAgYSA9IGFba2V5W2ldXTtcbiAgICAgICAgYiA9IGJba2V5W2ldXTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuXG4gICAgICBpZiAoYSA8IGIpIHtcbiAgICAgICAgc2V0QXJpYSgnYXNjZW5kaW5nJywga2V5KTtcbiAgICAgICAgdGhpcy5vcmRlciA9IFNvcnREaXJlY3Rpb24uQVNDO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvcnRlZEludG8gPyAxIDogLTE7XG4gICAgICB9IGVsc2UgaWYgKGEgPiBiKSB7XG4gICAgICAgIHNldEFyaWEoJ2Rlc2NlbmRpbmcnLCBrZXkpO1xuICAgICAgICB0aGlzLm9yZGVyID0gU29ydERpcmVjdGlvbi5ERVNDO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvcnRlZEludG8gPyAtMSA6IDE7XG4gICAgICB9IGVsc2UgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5vcmRlciA9IFNvcnREaXJlY3Rpb24uQ09OU1Q7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcmRlciA9IFNvcnREaXJlY3Rpb24uQ09OU1Q7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zb3J0ZWRJbnRvID0gIXRoaXMuc29ydGVkSW50bztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGtleSA9IHRoaXMudHJpbVdoaXRlU2lnbnModGhpcy5zb3J0QnkudG9TdHJpbmcoKSkuc3BsaXQoJy4nKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICdhcmlhLWxhYmVsJyxcbiAgICAgIGAke2tleX06IGFjdGl2YXRlIHRvIHNvcnQgY29sdW1uIGRlc2NlbmRpbmdgXG4gICAgKTtcbiAgfVxufVxuIl19