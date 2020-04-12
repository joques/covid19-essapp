import { __decorate, __metadata } from "tslib";
import { Directive, EventEmitter, HostListener, Input, Output, ElementRef, Renderer2, OnInit, } from '@angular/core';
var SortDirection;
(function (SortDirection) {
    SortDirection["ASC"] = "ascending";
    SortDirection["DESC"] = "descending";
    SortDirection["CONST"] = "constant";
})(SortDirection || (SortDirection = {}));
var MdbTableSortDirective = /** @class */ (function () {
    function MdbTableSortDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.sortedInto = true;
        this.dataSource = [];
        this.sortEnd = new EventEmitter();
        this.sorted = new EventEmitter();
    }
    MdbTableSortDirective.prototype.onclick = function () {
        this.sortDataBy(this.trimWhiteSigns(this.sortBy.toString()));
        this.sortEnd.emit(this.dataSource);
        this.sorted.emit({
            data: this.dataSource,
            sortOrder: this.order,
            sortBy: this.sortBy,
        });
    };
    MdbTableSortDirective.prototype.trimWhiteSigns = function (headElement) {
        return headElement.replace(/ /g, '');
    };
    MdbTableSortDirective.prototype.moveArrayItem = function (arr, oldIndex, newIndex) {
        while (oldIndex < 0) {
            oldIndex += arr.length;
        }
        while (newIndex < 0) {
            newIndex += arr.length;
        }
        if (newIndex >= arr.length) {
            var k = newIndex - arr.length;
            while (k-- + 1) {
                arr.push(null);
            }
        }
        arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
        return arr;
    };
    MdbTableSortDirective.prototype.sortDataBy = function (key) {
        var _this = this;
        var ariaPass = true;
        var setAria = function (sort, id) {
            if (ariaPass) {
                var inverse = sort === 'ascending' ? 'descending' : 'ascending';
                _this.renderer.setAttribute(_this.el.nativeElement, 'aria-sort', sort);
                _this.renderer.setAttribute(_this.el.nativeElement, 'aria-label', id + ": activate to sort column " + inverse);
                ariaPass = false;
            }
        };
        key = key.split('.');
        this.dataSource.sort(function (a, b) {
            var i = 0;
            while (i < key.length) {
                a = a[key[i]];
                b = b[key[i]];
                i++;
            }
            if (a < b) {
                setAria('ascending', key);
                _this.order = SortDirection.ASC;
                return _this.sortedInto ? 1 : -1;
            }
            else if (a > b) {
                setAria('descending', key);
                _this.order = SortDirection.DESC;
                return _this.sortedInto ? -1 : 1;
            }
            else if (a == null || b == null) {
                _this.order = SortDirection.CONST;
                return 1;
            }
            else {
                _this.order = SortDirection.CONST;
                return 0;
            }
        });
        this.sortedInto = !this.sortedInto;
    };
    MdbTableSortDirective.prototype.ngOnInit = function () {
        var key = this.trimWhiteSigns(this.sortBy.toString()).split('.');
        this.renderer.setAttribute(this.el.nativeElement, 'aria-label', key + ": activate to sort column descending");
    };
    MdbTableSortDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return MdbTableSortDirective;
}());
export { MdbTableSortDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS90YWJsZXMvZGlyZWN0aXZlcy9tZGItdGFibGUtc29ydC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBQ1QsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLElBQUssYUFJSjtBQUpELFdBQUssYUFBYTtJQUNoQixrQ0FBaUIsQ0FBQTtJQUNqQixvQ0FBbUIsQ0FBQTtJQUNuQixtQ0FBa0IsQ0FBQTtBQUNwQixDQUFDLEVBSkksYUFBYSxLQUFiLGFBQWEsUUFJakI7QUFXRDtJQVVFLCtCQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFUL0QsZUFBVSxHQUFHLElBQUksQ0FBQztRQUdLLGVBQVUsR0FBZSxFQUFFLENBQUM7UUFHekMsWUFBTyxHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO1FBQ3pELFdBQU0sR0FBNkIsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUVWLENBQUM7SUFFNUMsdUNBQU8sR0FBUDtRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FB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NEJBQUM7Q0FBQSxBQXBHRCxJQW9HQztTQXBHWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmVudW0gU29ydERpcmVjdGlvbiB7XG4gIEFTQyA9ICdhc2NlbmRpbmcnLFxuICBERVNDID0gJ2Rlc2NlbmRpbmcnLFxuICBDT05TVCA9ICdjb25zdGFudCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU29ydGVkRGF0YSB7XG4gIGRhdGE6IGFueVtdO1xuICBzb3J0T3JkZXI6IHN0cmluZztcbiAgc29ydEJ5OiBzdHJpbmc7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJUYWJsZVNvcnRdJyxcbn0pXG5leHBvcnQgY2xhc3MgTWRiVGFibGVTb3J0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgc29ydGVkSW50byA9IHRydWU7XG4gIG9yZGVyOiBzdHJpbmc7XG5cbiAgQElucHV0KCdtZGJUYWJsZVNvcnQnKSBkYXRhU291cmNlOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIHNvcnRCeTogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBzb3J0RW5kOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcbiAgQE91dHB1dCgpIHNvcnRlZDogRXZlbnRFbWl0dGVyPFNvcnRlZERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxTb3J0ZWREYXRhPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uY2xpY2soKSB7XG4gICAgdGhpcy5zb3J0RGF0YUJ5KHRoaXMudHJpbVdoaXRlU2lnbnModGhpcy5zb3J0QnkudG9TdHJpbmcoKSkpO1xuICAgIHRoaXMuc29ydEVuZC5lbWl0KHRoaXMuZGF0YVNvdXJjZSk7XG4gICAgdGhpcy5zb3J0ZWQuZW1pdCh7XG4gICAgICBkYXRhOiB0aGlzLmRhdGFTb3VyY2UsXG4gICAgICBzb3J0T3JkZXI6IHRoaXMub3JkZXIsXG4gICAgICBzb3J0Qnk6IHRoaXMuc29ydEJ5LFxuICAgIH0pO1xuICB9XG5cbiAgdHJpbVdoaXRlU2lnbnMoaGVhZEVsZW1lbnQ6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGhlYWRFbGVtZW50LnJlcGxhY2UoLyAvZywgJycpO1xuICB9XG5cbiAgcHVibGljIG1vdmVBcnJheUl0ZW0oYXJyOiBhbnksIG9sZEluZGV4OiBudW1iZXIsIG5ld0luZGV4OiBudW1iZXIpIHtcbiAgICB3aGlsZSAob2xkSW5kZXggPCAwKSB7XG4gICAgICBvbGRJbmRleCArPSBhcnIubGVuZ3RoO1xuICAgIH1cbiAgICB3aGlsZSAobmV3SW5kZXggPCAwKSB7XG4gICAgICBuZXdJbmRleCArPSBhcnIubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAobmV3SW5kZXggPj0gYXJyLmxlbmd0aCkge1xuICAgICAgbGV0IGsgPSBuZXdJbmRleCAtIGFyci5sZW5ndGg7XG4gICAgICB3aGlsZSAoay0tICsgMSkge1xuICAgICAgICBhcnIucHVzaChudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXJyLnNwbGljZShuZXdJbmRleCwgMCwgYXJyLnNwbGljZShvbGRJbmRleCwgMSlbMF0pO1xuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICBzb3J0RGF0YUJ5KGtleTogc3RyaW5nIHwgYW55KSB7XG4gICAgbGV0IGFyaWFQYXNzID0gdHJ1ZTtcblxuICAgIGNvbnN0IHNldEFyaWEgPSAoc29ydDogJ2FzY2VuZGluZycgfCAnZGVzY2VuZGluZycsIGlkOiBhbnkpID0+IHtcbiAgICAgIGlmIChhcmlhUGFzcykge1xuICAgICAgICBjb25zdCBpbnZlcnNlID0gc29ydCA9PT0gJ2FzY2VuZGluZycgPyAnZGVzY2VuZGluZycgOiAnYXNjZW5kaW5nJztcblxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhcmlhLXNvcnQnLCBzb3J0KTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICdhcmlhLWxhYmVsJyxcbiAgICAgICAgICBgJHtpZH06IGFjdGl2YXRlIHRvIHNvcnQgY29sdW1uICR7aW52ZXJzZX1gXG4gICAgICAgICk7XG4gICAgICAgIGFyaWFQYXNzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGtleSA9IGtleS5zcGxpdCgnLicpO1xuXG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IGtleS5sZW5ndGgpIHtcbiAgICAgICAgYSA9IGFba2V5W2ldXTtcbiAgICAgICAgYiA9IGJba2V5W2ldXTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuXG4gICAgICBpZiAoYSA8IGIpIHtcbiAgICAgICAgc2V0QXJpYSgnYXNjZW5kaW5nJywga2V5KTtcbiAgICAgICAgdGhpcy5vcmRlciA9IFNvcnREaXJlY3Rpb24uQVNDO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvcnRlZEludG8gPyAxIDogLTE7XG4gICAgICB9IGVsc2UgaWYgKGEgPiBiKSB7XG4gICAgICAgIHNldEFyaWEoJ2Rlc2NlbmRpbmcnLCBrZXkpO1xuICAgICAgICB0aGlzLm9yZGVyID0gU29ydERpcmVjdGlvbi5ERVNDO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvcnRlZEludG8gPyAtMSA6IDE7XG4gICAgICB9IGVsc2UgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5vcmRlciA9IFNvcnREaXJlY3Rpb24uQ09OU1Q7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcmRlciA9IFNvcnREaXJlY3Rpb24uQ09OU1Q7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zb3J0ZWRJbnRvID0gIXRoaXMuc29ydGVkSW50bztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGtleSA9IHRoaXMudHJpbVdoaXRlU2lnbnModGhpcy5zb3J0QnkudG9TdHJpbmcoKSkuc3BsaXQoJy4nKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICdhcmlhLWxhYmVsJyxcbiAgICAgIGAke2tleX06IGFjdGl2YXRlIHRvIHNvcnQgY29sdW1uIGRlc2NlbmRpbmdgXG4gICAgKTtcbiAgfVxufVxuIl19