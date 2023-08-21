define({"oj-message":{fatal:"Nghiêm trọng",error:"Lỗi",warning:"Cảnh báo",info:"Thông tin",confirmation:"Xác nhận","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Giá trị không ở định dạng dự kiến.",detail:"Nhập giá trị ở định dạng dự kiến.","plural-separator":", ",hint:{summary:"Ví dụ: {exampleValue}",detail:"Hãy thử lại bằng định dạng như sau: '{exampleValue}'.","detail-plural":'Nhập giá trị ở những định dạng sau: "{exampleValue}".'},optionHint:{detail:'Giá trị được chấp nhận cho tùy chọn "{propertyName}" là "{propertyValueValid}".',"detail-plural":'Các giá trị được chấp nhận cho tùy chọn "{propertyName}" là "{propertyValueValid}".'},optionTypesMismatch:{summary:'Phải có giá trị cho tùy chọn "{requiredPropertyName}" khi tùy chọn "{propertyName}" được đặt thành "{propertyValue}".'},optionTypeInvalid:{summary:'Giá trị thuộc loại được kỳ vọng không được cung cấp cho tùy chọn "{propertyName}".'},optionOutOfRange:{summary:'Giá trị {propertyValue} nằm ngoài phạm vi cho tùy chọn "{propertyName}".'},optionValueInvalid:{summary:'Giá trị không hợp lệ "{propertyValue}" được chỉ định cho tùy chọn "{propertyName}".'},number:{decimalFormatMismatch:{summary:"Giá trị đã cung cấp không ở định dạng số dự kiến."},shortLongUnsupportedParse:{summary:'"short" và "long" không được hỗ trợ cho phân tích cú pháp trình chuyển đổi.',detail:"Thay đổi thành phần thành readonly. Trường readonly không gọi chức năng parse của trình chuyển đổi."},currencyFormatMismatch:{summary:"Giá trị đã cung cấp không ở định dạng loại tiền dự kiến."},percentFormatMismatch:{summary:"Giá trị đã cung cấp không ở định dạng phần trăm dự kiến."},invalidNumberFormat:{summary:"Giá trị được cung cấp không phải là số hợp lệ.",detail:"Hãy cung cấp số hợp lệ."}},color:{invalidFormat:{summary:"Định dạng màu không hợp lệ.",detail:"Chi tiết tùy chọn định dạng màu không hợp lệ."},invalidSyntax:{summary:"Chi tiết màu không hợp lệ.",detail:"Hãy nhập giá trị màu tuân thủ tiêu chuẩn CSS3."}},datetime:{datetimeOutOfRange:{summary:'Giá trị "{value}" nằm ngoài phạm vi cho "{propertyName}".',detail:'Nhập giá trị từ "{minValue}" đến "{maxValue}".',hour:"giờ",minute:"phút",second:"giây",millisec:"mili giây",month:"tháng",day:"ngày",year:"năm","month name":"tên tháng",weekday:"ngày trong tuần"},dateFormatMismatch:{summary:"Giá trị đã cung cấp không ở định dạng ngày dự kiến."},invalidTimeZoneID:{summary:"Mã múi giờ được cung cấp {timeZoneID} không hợp lệ."},nonExistingTime:{summary:"Thời điểm đã nhập không tồn tại, vì thời điểm này rơi vào khoảng chuyển dịch theo quy ước giờ mùa hè."},missingTimeZoneData:{summary:'Thiếu dữ liệu TimeZone. Hãy gọi "ojs/ojtimezonedata" cần thiết để tải dữ liệu TimeZone.'},timeFormatMismatch:{summary:"Giá trị đã cung cấp không ở định dạng giờ dự kiến."},datetimeFormatMismatch:{summary:"Giá trị đã cung cấp không ở định dạng ngày giờ dự kiến."},dateToWeekdayMismatch:{summary:'Ngày "{date}" không phải là "{weekday}".',detail:"Nhập thứ trong tuần tương ứng với ngày."},invalidISOString:{invalidRangeSummary:'Giá trị "{value}" nằm ngoài phạm vi cho trường "{propertyName}" trong chuỗi ISO 8601 "{isoStr}".',summary:'"{isoStr}" được cung cấp không phải là chuỗi ISO 8601 hợp lệ.',detail:"Hãy cung cấp chuỗi ISO 8601 hợp lệ."}}},"oj-validator":{length:{hint:{min:"Nhập {min} ký tự trở lên.",max:"Nhập {max} ký tự trở xuống.",inRange:"Nhập từ {min} đến {max} ký tự.",exact:"Nhập {length} ký tự."},messageDetail:{tooShort:"Nhập {min} ký tự trở lên.",tooLong:"Nhập không quá {max} ký tự."},messageSummary:{tooShort:"Có quá ít ký tự.",tooLong:"Có quá nhiều ký tự."}},range:{number:{hint:{min:"Nhập số lớn hơn hoặc bằng {min}.",max:"Nhập số nhỏ hơn hoặc bằng {max}.",inRange:"Nhập số từ {min} đến {max}.",exact:"Nhập số {num}."},messageDetail:{rangeUnderflow:"Nhập số từ {min} trở lên.",rangeOverflow:"Nhập số từ {max} trở xuống.",exact:"Nhập số {num}."},messageSummary:{rangeUnderflow:"Số quá thấp.",rangeOverflow:"Số quá cao."}},datetime:{hint:{min:"Nhập ngày giờ trùng hoặc sau {min}.",max:"Nhập ngày giờ trùng hoặc trước {max}.",inRange:"Nhập ngày giờ từ {min} đến {max}."},messageDetail:{rangeUnderflow:"Nhập ngày trùng hoặc sau {min}.",rangeOverflow:"Nhập ngày trùng hoặc trước {max}."},messageSummary:{rangeUnderflow:"Ngày giờ sớm hơn mức ngày giờ tối thiểu.",rangeOverflow:"Ngày giờ muộn hơn mức ngày giờ tối đa."}},date:{hint:{min:"Nhập ngày trùng hoặc sau {min}.",max:"Nhập ngày trùng hoặc trước {max}.",inRange:"Nhập ngày từ {min} đến {max}."},messageDetail:{rangeUnderflow:"Nhập ngày trùng hoặc sau {min}.",rangeOverflow:"Nhập ngày trùng hoặc trước {max}."},messageSummary:{rangeUnderflow:"Ngày sớm hơn mức ngày tối thiểu.",rangeOverflow:"Ngày muộn hơn mức ngày tối đa."}},time:{hint:{min:"Nhập giờ trùng hoặc sau {min}.",max:"Nhập giờ trùng hoặc trước {max}.",inRange:"Nhập giờ từ {min} đến {max}."},messageDetail:{rangeUnderflow:"Nhập giờ trùng hoặc sau {min}.",rangeOverflow:"Nhập giờ trùng hoặc trước {max}."},messageSummary:{rangeUnderflow:"Giờ sớm hơn mức giờ tối thiểu.",rangeOverflow:"Giờ muộn hơn mức giờ tối đa."}}},restriction:{date:{messageSummary:"Ngày {value} là của mục nhập bị vô hiệu hóa.",messageDetail:"Ngày bạn chọn không sẵn dùng. Hãy thử ngày khác."}},regExp:{summary:"Định dạng không chính xác.",detail:'Nhập các giá trị có thể dùng được mô tả vào biểu thức chính quy sau: "{pattern}".'},required:{summary:"Cần có giá trị.",detail:"Nhập giá trị."}},"oj-ojEditableValue":{loading:"Đang tải",requiredText:"Được yêu cầu",helpSourceText:"Tìm hiểu thêm..."},"oj-ojInputDate":{done:"Xong",cancel:"Hủy",time:"Thời gian",prevText:"Trước",nextText:"Tiếp",currentText:"Hôm nay",weekHeader:"Tuần",tooltipCalendar:"Chọn ngày.",tooltipCalendarTime:"Chọn ngày giờ.",tooltipCalendarDisabled:"Chọn ngày bị vô hiệu hóa.",tooltipCalendarTimeDisabled:"Chọn ngày giờ bị vô hiệu hóa.",picker:"Trình chọn",weekText:"Tuần",datePicker:"Trình chọn ngày",inputHelp:"Nhấn phím xuống hoặc phím lên để truy cập lịch.",inputHelpBoth:"Nhấn phím xuống hoặc phím lên để truy cập lịch, nhấn Shift + phím xuống hoặc Shift + phím lên để truy cập danh sách thả xuống giờ.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{cancelText:"Hủy",okText:"OK",currentTimeText:"Bây giờ",hourWheelLabel:"Giờ",minuteWheelLabel:"Phút",ampmWheelLabel:"SA CH",tooltipTime:"Chọn giờ.",tooltipTimeDisabled:"Chọn giờ bị vô hiệu hóa.",inputHelp:"Nhấn phím xuống hoặc phím lên để truy cập danh sách thả xuống giờ.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},regexp:{messageSummary:"",messageDetail:""},accessibleMaxLengthExceeded:"Đã vượt quá độ dài tối đa {len}.",accessibleMaxLengthRemaining:"Còn lại {chars} ký tự."},"oj-ojInputText":{accessibleClearIcon:"Xóa"},"oj-ojInputPassword":{regexp:{messageDetail:'Giá trị phải khớp với mẫu sau: "{pattern}".'},accessibleShowPassword:"Hiển thị mật khẩu.",accessibleHidePassword:"Ẩn mật khẩu."},"oj-ojFilmStrip":{labelAccFilmStrip:"Hiển thị trang {pageIndex}/{pageCount}",labelAccArrowNextPage:"Chọn Tiếp để hiển thị trang tiếp theo",labelAccArrowPreviousPage:"Chọn Trước để hiển thị trang trước",tipArrowNextPage:"Tiếp",tipArrowPreviousPage:"Trước"},"oj-ojDataGrid":{accessibleSortAscending:"{id} được sắp xếp theo thứ tự tăng dần",accessibleSortDescending:"{id} được sắp xếp theo thứ tự giảm dần",accessibleSortable:"{id} có thể sắp xếp",accessibleActionableMode:"Chuyển sang chế độ có thể hành động.",accessibleNavigationMode:"Chuyển sang chế độ điều hướng, nhấn F2 để chuyển sang chế độ chỉnh sửa hoặc chế độ có thể hành động.",accessibleEditableMode:"Chuyển sang chế độ có thể chỉnh sửa, nhấn escape để điều hướng khỏi lưới dữ liệu.",accessibleSummaryExact:"Đây là lưới dữ liệu có {rownum} hàng và {colnum} cột",accessibleSummaryEstimate:"Đây là lưới dữ liệu có số hàng và cột không xác định",accessibleSummaryExpanded:"Hiện có {num} hàng được mở rộng",accessibleRowExpanded:"Cột được mở rộng",accessibleExpanded:"Đã mở rộng",accessibleRowCollapsed:"Cột được thu gọn",accessibleCollapsed:"Đã thu gọn",accessibleRowSelected:"Hàng {row} được chọn",accessibleColumnSelected:"Cột {column} được chọn",accessibleStateSelected:"được chọn",accessibleMultiCellSelected:"{num} ô được chọn",accessibleColumnSpanContext:"Rộng {extent}",accessibleRowSpanContext:"Cao {extent}",accessibleRowContext:"Hàng {index}",accessibleColumnContext:"Cột {index}",accessibleRowHeaderContext:"Tiêu đề hàng {index}",accessibleColumnHeaderContext:"Tiêu đề cột {index}",accessibleRowEndHeaderContext:"Tiêu đề cuối hàng {index}",accessibleColumnEndHeaderContext:"Tiêu đề cuối cột {index}",accessibleRowHeaderLabelContext:"Nhãn tiêu đề hàng {level}",accessibleColumnHeaderLabelContext:"Nhãn tiêu đề cột {level}",accessibleRowEndHeaderLabelContext:"Nhãn tiêu đề cuối hàng {level}",accessibleColumnEndHeaderLabelContext:"Nhãn tiêu đề cuối cột {level}",accessibleLevelContext:"Cấp độ {level}",accessibleRangeSelectModeOn:"Bật chế độ thêm phạm vi ô được chọn.",accessibleRangeSelectModeOff:"Tắt chế độ thêm phạm vi ô được chọn.",accessibleFirstRow:"Bạn đã đến hàng đầu tiên.",accessibleLastRow:"Bạn đã đến hàng cuối cùng.",accessibleFirstColumn:"Bạn đã đến cột đầu tiên.",accessibleLastColumn:"Bạn đã đến cột cuối cùng.",accessibleSelectionAffordanceTop:"Dấu hiệu điều khiển chọn trên cùng.",accessibleSelectionAffordanceBottom:"Dấu hiệu điều khiển chọn dưới cùng.",accessibleLevelHierarchicalContext:"Cấp độ {level}",accessibleRowHierarchicalFull:"Hàng {posInSet} trong số {setSize} hàng",accessibleRowHierarchicalPartial:"Hàng {posInSet} trong số ít nhất {setSize} hàng",accessibleRowHierarchicalUnknown:"Tối thiểu hàng {posInSet} trong số ít nhất {setSize} hàng",accessibleColumnHierarchicalFull:"Cột {posInSet} trong số {setSize} cột",accessibleColumnHierarchicalPartial:"Cột {posInSet} trong số ít nhất {setSize} cột",accessibleColumnHierarchicalUnknown:"Tối thiểu cột {posInSet} trong số ít nhất {setSize} cột",msgFetchingData:"Đang tìm nạp dữ liệu...",msgNoData:"Không có mục nào để hiển thị.",labelResize:"Đổi cỡ",labelResizeWidth:"Chỉnh chiều rộng",labelResizeHeight:"Chỉnh chiều cao",labelSortAsc:"Sắp xếp tăng dần",labelSortDsc:"Sắp xếp giảm dần",labelSortRow:"Sắp xếp hàng",labelSortRowAsc:"Sắp xếp hàng theo thứ tự tăng dần",labelSortRowDsc:"Sắp xếp hàng theo thứ tự giảm dần",labelSortCol:"Sắp xếp cột",labelSortColAsc:"Sắp xếp cột theo thứ tự tăng dần",labelSortColDsc:"Sắp xếp cột theo thứ tự giảm dần",labelCut:"Cắt",labelPaste:"Dán",labelCutCells:"Cắt",labelPasteCells:"Dán",labelCopyCells:"Sao chép",labelAutoFill:"Tự động điền",labelEnableNonContiguous:"Kích hoạt chức năng chọn ngắt quãng",labelDisableNonContiguous:"Vô hiệu hóa chức năng chọn ngắt quãng",labelResizeDialogSubmit:"OK",labelResizeDialogCancel:"Hủy",accessibleContainsControls:"Có chứa bộ điều khiển",labelSelectMultiple:"Chọn nhiều lựa chọn",labelResizeDialogApply:"Áp dụng",labelResizeFitToContent:"Thay đổi kích cỡ cho vừa",columnWidth:"Chiều rộng tính bằng pixel",rowHeight:"Chiều cao tính bằng pixel",labelResizeColumn:"Đổi cỡ cột",labelResizeRow:"Thay đổi kích cỡ hàng",resizeColumnDialog:"Đổi kích thước cột",resizeRowDialog:"Thay đổi kích cỡ hàng",labelFreezeRow:"Cố định hàng",labelFreezeCol:"Cố định cột",labelUnfreezeRow:"Bỏ cố định hàng",labelUnfreezeCol:"Bỏ cố định cột",collapsedText:"Thu gọn",expandedText:"Mở rộng",tooltipRequired:"Được yêu cầu"},"oj-ojRowExpander":{accessibleLevelDescription:"Cấp độ {level}",accessibleRowDescription:"Cấp {level}, hàng {num}/{total}",accessibleRowExpanded:"Cột được mở rộng",accessibleRowCollapsed:"Cột được thu gọn",accessibleStateExpanded:"đã mở rộng",accessibleStateCollapsed:"đã thu gọn"},"oj-ojStreamList":{msgFetchingData:"Đang tìm nạp dữ liệu..."},"oj-ojListView":{msgFetchingData:"Đang tìm nạp dữ liệu...",msgNoData:"Không có mục nào để hiển thị.",msgItemsAppended:"{count} mục được thêm vào cuối.",msgFetchCompleted:"Tất cả các mục đã được tìm nạp.",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",accessibleExpandCollapseInstructionText:"Sử dụng các phím mũi tên để mở rộng và thu gọn.",accessibleGroupExpand:"Đã mở rộng",accessibleGroupCollapse:"Đã thu gọn",accessibleReorderTouchInstructionText:"Chạm hai lần và giữ. Đợi đến khi có âm báo thì kéo để sắp xếp lại.",accessibleReorderBeforeItem:"Trước khi {item}",accessibleReorderAfterItem:"Sau khi {item}",accessibleReorderInsideItem:"Vào {item}",accessibleNavigateSkipItems:"Bỏ qua {numSkip} mục",accessibleSuggestion:"Gợi ý",labelCut:"Cắt",labelCopy:"Sao chép",labelPaste:"Dán",labelPasteBefore:"Dán trước",labelPasteAfter:"Dán sau"},"oj-ojWaterfallLayout":{msgFetchingData:"Đang tìm nạp dữ liệu..."},"oj-_ojLabel":{tooltipHelp:"Trợ giúp",tooltipRequired:"Được yêu cầu"},"oj-ojLabel":{tooltipHelp:"Trợ giúp",tooltipRequired:"Được yêu cầu"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Giảm",tooltipIncrement:"Tăng"},"oj-ojTable":{accessibleAddRow:"Nhập dữ liệu để thêm một hàng mới.",accessibleColumnContext:"Cột {index}",accessibleColumnFooterContext:"Phần chân cột {index}",accessibleColumnHeaderContext:"Tiêu đề cột {index}",accessibleContainsControls:"Có chứa bộ điều khiển",accessibleColumnsSpan:"Trải dài qua {count} cột",accessibleRowContext:"Hàng {index}",accessibleSortable:"{id} có thể sắp xếp",accessibleSortAscending:"{id} được sắp xếp theo thứ tự tăng dần",accessibleSortDescending:"{id} được sắp xếp theo thứ tự giảm dần",accessibleStateSelected:"được chọn",accessibleStateUnselected:"chưa chọn",accessibleSummaryEstimate:"Bảng có {colnum} cột và hơn {rownum} hàng",accessibleSummaryExact:"Bảng có {colnum} cột và {rownum} hàng",labelAccSelectionAffordanceTop:"Dấu hiệu điều khiển chọn trên cùng",labelAccSelectionAffordanceBottom:"Dấu hiệu điều khiển chọn dưới cùng",labelEnableNonContiguousSelection:"Kích hoạt chức năng chọn ngắt quãng",labelDisableNonContiguousSelection:"Vô hiệu hóa chức năng chọn ngắt quãng",labelResize:"Đổi cỡ",labelResizeColumn:"Đổi cỡ cột",labelResizePopupSubmit:"OK",labelResizePopupCancel:"Hủy",labelResizePopupSpinner:"Đổi cỡ cột",labelResizeColumnDialog:"Đổi kích thước cột",labelColumnWidth:"Chiều rộng tính bằng pixel",labelResizeDialogApply:"Áp dụng",labelSelectRow:"Chọn hàng",labelSelectAllRows:"Chọn toàn bộ các hàng",labelEditRow:"Chỉnh sửa dòng",labelSelectAndEditRow:"Chọn và chỉnh sửa hàng",labelSelectColumn:"Chọn cột",labelSort:"Sắp xếp",labelSortAsc:"Sắp xếp tăng dần",labelSortDsc:"Sắp xếp giảm dần",msgFetchingData:"Đang tìm nạp dữ liệu...",msgNoData:"Không có dữ liệu để hiển thị.",msgInitializing:"Đang khởi tạo...",msgColumnResizeWidthValidation:"Giá trị chiều rộng phải là số nguyên.",msgScrollPolicyMaxCountSummary:"Đã vượt quá số hàng tối đa cho thao tác cuộn bảng.",msgScrollPolicyMaxCountDetail:"Hãy tải lại với loạt dữ liệu nhỏ hơn.",msgStatusSortAscending:"{0} được sắp xếp theo thứ tự tăng dần.",msgStatusSortDescending:"{0} được sắp xếp theo thứ tự giảm dần.",tooltipRequired:"Được yêu cầu"},"oj-ojTabs":{labelCut:"Cắt",labelPasteBefore:"Dán trước",labelPasteAfter:"Dán sau",labelRemove:"Loại bỏ",labelReorder:"Sắp xếp lại",removeCueText:"Bỏ được"},"oj-ojCheckboxset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:"Chọn một giá trị."}},"oj-ojRadioset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:"Chọn một giá trị."}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:"Chọn một giá trị."},searchField:"Trường tìm kiếm",noMatchesFound:"Không tìm thấy kết quả khớp nào",noMoreResults:"Không còn kết quả nào nữa",oneMatchesFound:"Tìm thấy một kết quả khớp",moreMatchesFound:"Tìm thấy {num} kết quả khớp",filterFurther:"Còn có các kết quả khác, hãy lọc thêm."},"oj-ojSwitch":{SwitchON:"Bật",SwitchOFF:"Tắt"},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Không tìm thấy kết quả khớp nào",noMoreResults:"Không còn kết quả nào nữa",oneMatchesFound:"Tìm thấy một kết quả khớp",moreMatchesFound:"Tìm thấy {num} kết quả khớp",filterFurther:"Còn có các kết quả khác, hãy lọc thêm."},"oj-ojSelectSingle":{required:{hint:"",messageSummary:"",messageDetail:"Chọn một giá trị."},noMatchesFound:"Không tìm thấy kết quả khớp nào",oneMatchFound:"Tìm thấy một kết quả khớp",multipleMatchesFound:"Tìm thấy {num} kết quả khớp",nOrMoreMatchesFound:"Tìm thấy {num} kết quả khớp trở lên",cancel:"Hủy",labelAccOpenDropdown:"mở rộng",labelAccClearValue:"xóa giá trị",noResultsLine1:"Không tìm thấy kết quả",noResultsLine2:"Chúng tôi không thể tìm thấy kết quả nào khớp với lệnh tìm kiếm của bạn."},"oj-ojInputSearch2":{cancel:"Hủy",noSuggestionsFound:"Không tìm thấy đề xuất nào"},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Không tìm thấy kết quả khớp nào",oneMatchesFound:"Tìm thấy một kết quả khớp",moreMatchesFound:"Tìm thấy {num} kết quả khớp"},"oj-ojTreeView":{treeViewSelectorAria:"Công cụ chọn TreeView {rowKey}",retrievingDataAria:"Đang truy lục dữ liệu cho nút: {nodeText}",receivedDataAria:"Đã truy lục dữ liệu cho nút: {nodeText}"},"oj-ojTree":{stateLoading:"Đang tải...",labelNewNode:"Nút mới",labelMultiSelection:"Nhiều lựa chọn",labelEdit:"Chỉnh sửa",labelCreate:"Tạo",labelCut:"Cắt",labelCopy:"Sao chép",labelPaste:"Dán",labelPasteAfter:"Dán sau",labelPasteBefore:"Dán trước",labelRemove:"Loại bỏ",labelRename:"Đổi tên",labelNoData:"Không có dữ liệu"},"oj-ojPagingControl":{labelAccPaging:"Phân trang",labelAccPageNumber:"Nội dung trang {pageNum} được tải",labelAccNavFirstPage:"Trang đầu",labelAccNavLastPage:"Trang cuối",labelAccNavNextPage:"Trang tiếp theo",labelAccNavPreviousPage:"Trang trước",labelAccNavPage:"Trang",labelLoadMore:"Hiển thị thêm...",labelLoadMoreMaxRows:"Đã đạt đến giới hạn tối đa {maxRows} hàng",labelNavInputPage:"Trang",labelNavInputPageMax:"trong số {pageMax}",fullMsgItemRange:"{pageFrom} – {pageTo} trong số {pageMax} mục",fullMsgItemRangeAtLeast:"{pageFrom} – {pageTo} trong số ít nhất {pageMax} mục",fullMsgItemRangeApprox:"{pageFrom} – {pageTo} trong khoảng {pageMax} mục",msgItemRangeNoTotal:"{pageFrom} - {pageTo} mục",fullMsgItem:"{pageTo}/{pageMax} mục",fullMsgItemAtLeast:"{pageTo} trong ít nhất {pageMax} mục",fullMsgItemApprox:"{pageTo} trong khoảng {pageMax} mục",msgItemNoTotal:"{pageTo} mục",msgItemRangeCurrent:"{pageFrom} - {pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"trên",msgItemRangeOfAtLeast:"trong số ít nhất",msgItemRangeOfApprox:"trong khoảng",msgItemRangeItems:"mục",tipNavInputPage:"Đi đến trang",tipNavPageLink:"Đi đến trang {pageNum}",tipNavNextPage:"Tiếp",tipNavPreviousPage:"Trước",tipNavFirstPage:"Đầu tiên",tipNavLastPage:"Cuối cùng",pageInvalid:{summary:"Giá trị trang đã nhập không hợp lệ.",detail:"Hãy nhập giá trị lớn hơn 0."},maxPageLinksInvalid:{summary:"Giá trị cho maxPageLinks không hợp lệ.",detail:"Hãy nhập giá trị lớn hơn 4."}},"oj-ojMasonryLayout":{labelCut:"Cắt",labelPasteBefore:"Dán trước",labelPasteAfter:"Dán sau"},"oj-panel":{labelAccButtonExpand:"Mở rộng",labelAccButtonCollapse:"Thu gọn",labelAccButtonRemove:"Loại bỏ",labelAccFlipForward:"Lật qua",labelAccFlipBack:"Lật lại",tipDragToReorder:"Kéo để sắp xếp lại",labelAccDragToReorder:"Kéo để sắp xếp lại, có sẵn menu theo ngữ cảnh"},"oj-ojChart":{labelDefaultGroupName:"Nhóm {0}",labelSeries:"Sê-ri",labelGroup:"Nhóm",labelDate:"Ngày",labelValue:"Giá trị",labelTargetValue:"Mục tiêu",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Phần trăm",labelLow:"Thấp",labelHigh:"Cao",labelOpen:"Mở",labelClose:"Đóng",labelVolume:"Khối lượng",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"Tối thiểu",labelMax:"Tối đa",labelOther:"Khác",tooltipPan:"Số tài khoản chính",tooltipSelect:"Chọn marquee",tooltipZoom:"Thu phóng marquee",componentName:"Biểu đồ"},"oj-dvtBaseGauge":{componentName:"Đồng hồ đo"},"oj-ojDiagram":{promotedLink:"{0} liên kết",promotedLinks:"{0} liên kết",promotedLinkAriaDesc:"Gián tiếp",componentName:"Sơ đồ"},"oj-ojGantt":{componentName:"Gantt",accessibleDurationDays:"{0} ngày",accessibleDurationHours:"{0} giờ",accessibleTaskInfo:"Thời gian bắt đầu là {0}, thời gian kết thúc là {1}, thời lượng là {2}",accessibleMilestoneInfo:"Thời gian là {0}",accessibleRowInfo:"Hàng {0}",accessibleTaskTypeMilestone:"Sự kiện",accessibleTaskTypeSummary:"Tổng hợp",accessiblePredecessorInfo:"{0} đối tượng trước",accessibleSuccessorInfo:"{0} đối tượng sau",accessibleDependencyInfo:"Đối tượng phụ thuộc loại {0}, kết nối {1} với {2}",startStartDependencyAriaDesc:"bắt đầu để bắt đầu",startFinishDependencyAriaDesc:"bắt đầu để kết thúc",finishStartDependencyAriaDesc:"kết thúc để bắt đầu",finishFinishDependencyAriaDesc:"kết thúc để kết thúc",tooltipZoomIn:"Phóng to",tooltipZoomOut:"Thu nhỏ",labelLevel:"Mức độ",labelRow:"Hàng",labelStart:"Đầu",labelEnd:"Cuối",labelDate:"Ngày",labelBaselineStart:"Đầu đường cơ sở",labelBaselineEnd:"Cuối đường cơ sở",labelBaselineDate:"Ngày của đường cơ sở",labelDowntimeStart:"Bắt đầu thời gian ngừng hoạt động",labelDowntimeEnd:"Kết thúc thời gian ngừng hoạt động",labelOvertimeStart:"Bắt đầu thời gian làm ngoài giờ",labelOvertimeEnd:"Kết thúc thời gian làm ngoài giờ",labelAttribute:"Thuộc tính",labelLabel:"Nhãn",labelProgress:"Tiến độ",labelMoveBy:"Mức di chuyển",labelResizeBy:"Mức điều chỉnh",taskMoveInitiated:"Đã khởi chạy công việc di chuyển",taskResizeEndInitiated:"Đã khởi chạy công việc điều chỉnh cuối",taskResizeStartInitiated:"Đã khởi chạy công việc điều chỉnh đầu",taskMoveSelectionInfo:"{0} mục khác được chọn",taskResizeSelectionInfo:"{0} mục khác được chọn",taskMoveInitiatedInstruction:"Sử dụng các phím mũi tên để di chuyển",taskResizeInitiatedInstruction:"Sử dụng các phím mũi tên để điều chỉnh",taskMoveFinalized:"Đã hoàn tất công việc di chuyển",taskResizeFinalized:"Đã hoàn tất công việc điều chỉnh",taskMoveCancelled:"Đã hủy công việc di chuyển",taskResizeCancelled:"Đã hủy công việc điều chỉnh",taskResizeStartHandle:"Dấu hiệu điều khiển công việc điều chỉnh đầu",taskResizeEndHandle:"Dấu hiệu điều khiển công việc điều chỉnh cuối"},"oj-ojLegend":{componentName:"Chú giải",tooltipExpand:"Mở rộng",tooltipCollapse:"Thu gọn",labelInvalidData:"Dữ liệu không hợp lệ",labelNoData:"Không có dữ liệu để hiển thị",labelClearSelection:"Xóa mục chọn",stateSelected:"Được chọn",stateUnselected:"Không được chọn",stateMaximized:"Tối đa",stateMinimized:"Tối thiểu",stateIsolated:"Đã tách biệt",labelCountWithTotal:"{0}/{1}",accessibleContainsControls:"Có chứa bộ điều khiển"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Khác",labelGroup:"Nhóm",labelSize:"Kích cỡ",labelAdditionalData:"Dữ liệu bổ sung",componentName:"Ô {0}"},"oj-ojPictoChart":{componentName:"Biểu đồ hình"},"oj-ojSparkChart":{componentName:"Biểu đồ"},"oj-ojSunburst":{labelColor:"Màu",labelSize:"Kích cỡ",tooltipExpand:"Mở rộng",tooltipCollapse:"Thu gọn",componentName:"Ánh nắng lan tỏa"},"oj-ojTagCloud":{componentName:"Đám mây thẻ",accessibleContainsControls:"Có chứa bộ điều khiển",labelCountWithTotal:"{0}/{1}",labelInvalidData:"Dữ liệu không hợp lệ",stateCollapsed:"Đã thu gọn",stateDrillable:"Có thể phân tích chi tiết",stateExpanded:"Đã mở rộng",stateIsolated:"Đã tách biệt",stateHidden:"Bị ẩn",stateMaximized:"Tối đa",stateMinimized:"Tối thiểu",stateVisible:"Hiển thị"},"oj-ojThematicMap":{componentName:"Bản đồ nhiệt",areasRegion:"Khu vực",linksRegion:"Liên kết",markersRegion:"Vạch dấu"},"oj-ojTimeAxis":{componentName:"Trục thời gian"},"oj-ojTimeline":{componentName:"Dòng thời gian",stateMinimized:"Tối thiểu",stateMaximized:"Tối đa",stateIsolated:"Đã tách biệt",stateHidden:"Bị ẩn",stateExpanded:"Đã mở rộng",stateVisible:"Hiển thị",stateDrillable:"Có thể phân tích chi tiết",stateCollapsed:"Đã thu gọn",labelCountWithTotal:"{0}/{1}",accessibleItemDesc:"Phần mô tả là {0}.",accessibleItemEnd:"Thời gian kết thúc là {0}.",accessibleItemStart:"Thời gian bắt đầu là {0}.",accessibleItemTitle:"Tiêu đề là {0}.",labelSeries:"Sê-ri",tooltipZoomIn:"Phóng to",tooltipZoomOut:"Thu nhỏ",labelStart:"Đầu",labelEnd:"Cuối",labelAccNavNextPage:"Trang tiếp theo",labelAccNavPreviousPage:"Trang trước",tipArrowNextPage:"Tiếp",tipArrowPreviousPage:"Trước",navArrowDisabledState:"Đã vô hiệu hóa",labelDate:"Ngày",labelTitle:"Tiêu đề",labelDescription:"Mô tả",labelMoveBy:"Mức di chuyển",labelResizeBy:"Mức điều chỉnh",itemMoveInitiated:"Đã khởi chạy di chuyển sự kiện",itemResizeEndInitiated:"Đã khởi chạy kết thúc thay đổi kích cỡ sự kiện",itemResizeStartInitiated:"Đã khởi chạy bắt đầu thay đổi kích cỡ sự kiện",itemMoveSelectionInfo:"{0} mục khác được chọn",itemResizeSelectionInfo:"{0} mục khác được chọn",itemMoveInitiatedInstruction:"Sử dụng các phím mũi tên để di chuyển",itemResizeInitiatedInstruction:"Sử dụng các phím mũi tên để điều chỉnh",itemMoveFinalized:"Đã hoàn tất di chuyển sự kiện",itemResizeFinalized:"Đã hoàn tất thay đổi kích cỡ sự kiện",itemMoveCancelled:"Đã hủy di chuyển sự kiện",itemResizeCancelled:"Đã hủy thay đổi kích cỡ sự kiện",itemResizeStartHandle:"Dấu hiệu điều khiển bắt đầu thay đổi kích cỡ sự kiện",itemResizeEndHandle:"Dấu hiệu điều khiển kết thúc thay đổi kích cỡ sự kiện"},"oj-ojTreemap":{labelColor:"Màu",labelSize:"Kích cỡ",tooltipIsolate:"Tách biệt",tooltipRestore:"Khôi phục",componentName:"Bản đồ cây"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"N",labelScalingSuffixMillion:"Tr",labelScalingSuffixBillion:"T",labelScalingSuffixTrillion:"NT",labelScalingSuffixQuadrillion:"TrT",labelInvalidData:"Dữ liệu không hợp lệ",labelNoData:"Không có dữ liệu để hiển thị",labelClearSelection:"Xóa mục chọn",labelDataVisualization:"Hiển thị dữ liệu bằng hình ảnh",stateSelected:"Được chọn",stateUnselected:"Không được chọn",stateMaximized:"Tối đa",stateMinimized:"Tối thiểu",stateExpanded:"Đã mở rộng",stateCollapsed:"Đã thu gọn",stateIsolated:"Đã tách biệt",stateHidden:"Bị ẩn",stateVisible:"Hiển thị",stateDrillable:"Có thể phân tích chi tiết",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0}/{1}",accessibleContainsControls:"Có chứa bộ điều khiển"},"oj-ojRatingGauge":{labelClearSelection:"Xóa mục chọn",stateSelected:"Được chọn",stateUnselected:"Không được chọn",stateMaximized:"Tối đa",stateMinimized:"Tối thiểu",stateExpanded:"Đã mở rộng",stateCollapsed:"Đã thu gọn",stateIsolated:"Đã tách biệt",stateHidden:"Bị ẩn",stateVisible:"Hiển thị",stateDrillable:"Có thể phân tích chi tiết",labelCountWithTotal:"{0}/{1}",accessibleContainsControls:"Có chứa bộ điều khiển"},"oj-ojStatusMeterGauge":{labelClearSelection:"Xóa mục chọn",stateSelected:"Được chọn",stateUnselected:"Không được chọn",stateMaximized:"Tối đa",stateMinimized:"Tối thiểu",stateExpanded:"Đã mở rộng",stateCollapsed:"Đã thu gọn",stateIsolated:"Đã tách biệt",stateHidden:"Bị ẩn",stateVisible:"Hiển thị",stateDrillable:"Có thể phân tích chi tiết",labelCountWithTotal:"{0}/{1}",accessibleContainsControls:"Có chứa bộ điều khiển"},"oj-ojNavigationList":{defaultRootLabel:"Danh sách điều hướng",hierMenuBtnLabel:"Nút menu phân cấp",selectedLabel:"được chọn",previousIcon:"Trước",msgFetchingData:"Đang tìm nạp dữ liệu...",msgNoData:"Không có mục nào để hiển thị.",overflowItemLabel:"Thêm",accessibleReorderTouchInstructionText:"Chạm hai lần và giữ. Đợi đến khi có âm báo thì kéo để sắp xếp lại.",accessibleReorderBeforeItem:"Trước khi {item}",accessibleReorderAfterItem:"Sau khi {item}",labelCut:"Cắt",labelPasteBefore:"Dán trước",labelPasteAfter:"Dán sau",labelRemove:"Loại bỏ",removeCueText:"Bỏ được"},"oj-ojSlider":{noValue:"ojSlider không có giá trị",maxMin:"Tối đa không được nhỏ hơn hoặc bằng tối thiểu",startEnd:"value.start không được lớn hơn value.end",valueRange:"Giá trị phải trong phạm vi từ tối thiểu đến tối đa",optionNum:"Tùy chọn {option} không phải là số",invalidStep:"Bước không hợp lệ; bước phải > 0",lowerValueThumb:"giá trị thấp hơn chính xác",higherValueThumb:"giá trị cao hơn chính xác"},"oj-ojDialog":{labelCloseIcon:"Đóng"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Truy cập phần bật lên. Nhấn F6 để chuyển đổi giữa phần bật lên và bộ điều khiển có liên quan.",ariaLiveRegionInitialFocusNone:"Phần bật lên mở ra. Nhấn F6 để chuyển đổi giữa phần bật lên và bộ điều khiển có liên quan.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Truy cập phần bật lên. Bạn có thể đóng phần bật lên bằng cách di chuyển đến liên kết cuối cùng trong phần này.",ariaLiveRegionInitialFocusNoneTouch:"Phần bật lên mở ra. Di chuyển đến liên kết tiếp theo để thiết lập tiêu điểm trong phần bật lên.",ariaFocusSkipLink:"Chạm hai lần để di chuyển đến phần bật lên mở ra.",ariaCloseSkipLink:"Chạm hai lần để đóng phần bật lên đang mở."},"oj-ojRefresher":{ariaRefreshLink:"Kích hoạt liên kết để làm mới nội dung",ariaRefreshingLink:"Làm mới nội dung",ariaRefreshCompleteLink:"Làm mới hoàn tất"},"oj-ojSwipeActions":{ariaShowStartActionsDescription:"Hiển thị hành động đầu",ariaShowEndActionsDescription:"Hiển thị hành động cuối",ariaHideActionsDescription:"Ẩn hành động"},"oj-ojIndexer":{indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",indexerOthers:"#",ariaDisabledLabel:"Không có tiêu đề nhóm nào khớp",ariaOthersLabel:"số",ariaInBetweenText:"Từ {first} đến {second}",ariaKeyboardInstructionText:"Nhấn enter để chọn giá trị.",ariaTouchInstructionText:"Chạm hai lần và giữ để truy cập chế độ cử chỉ, rồi kéo lên hoặc xuống để điều chỉnh giá trị."},"oj-ojMenu":{labelCancel:"Hủy",ariaFocusSkipLink:"Tiêu điểm nằm trong menu, chạm hai lần hoặc vuốt để di chuyển tiêu điểm đến mục đầu tiên trong menu."},"oj-ojColorSpectrum":{labelHue:"Sắc độ",labelOpacity:"Độ chắn sáng",labelSatLum:"Độ bão hòa/độ chói",labelThumbDesc:"Thanh trượt bốn hướng điều chỉnh phổ màu."},"oj-ojColorPalette":{labelNone:"Không"},"oj-ojColorPicker":{labelSwatches:"Mẫu màu",labelCustomColors:"Màu tùy chỉnh",labelPrevColor:"Màu trước",labelDefColor:"Màu mặc định",labelDelete:"Xóa",labelDeleteQ:"Xóa?",labelAdd:"Thêm",labelAddColor:"Thêm màu",labelMenuHex:"HEX",labelMenuRgba:"RGBa",labelMenuHsla:"HSLa",labelSliderHue:"Sắc độ",labelSliderSaturation:"Độ bão hòa",labelSliderSat:"Bão hòa",labelSliderLightness:"Độ đậm nhạt",labelSliderLum:"Độ sáng",labelSliderAlpha:"Alpha",labelOpacity:"Độ chắn sáng",labelSliderRed:"Đỏ",labelSliderGreen:"Xanh lục",labelSliderBlue:"Xanh dương"},"oj-ojFilePicker":{dropzoneText:"Thả tập tin ở đây hoặc nhấp để tải lên",singleFileUploadError:"Tải lên một tập tin tại một thời điểm.",singleFileTypeUploadError:"Bạn không thể tải lên tập tin loại {fileType}.",multipleFileTypeUploadError:"Bạn không thể tải lên tập tin loại: {fileTypes}.",dropzonePrimaryText:"Kéo và thả",secondaryDropzoneText:"Chọn tập tin hoặc thả một tập tin vào đây.",secondaryDropzoneTextMultiple:"Chọn hoặc thả tập tin ở đây.",unknownFileType:"không xác định"},"oj-ojProgressbar":{ariaIndeterminateProgressText:"Đang xử lý"},"oj-ojMessage":{labelCloseIcon:"Đóng",categories:{error:"Lỗi",warning:"Cảnh báo",info:"Thông tin",confirmation:"Xác nhận",none:"Không"}},"oj-ojSelector":{checkboxAriaLabel:"Hộp kiểm chọn {rowKey}",checkboxAriaLabelSelected:" được chọn",checkboxAriaLabelUnselected:" chưa chọn"},"oj-ojMessages":{labelLandmark:"Thông báo",ariaLiveRegion:{navigationFromKeyboard:"Truy cập khu vực thông báo. Nhấn F6 để chuyển trở lại yếu tố được làm nổi bật trước.",navigationToTouch:"Có thông báo mới ở khu vực thông báo. Hãy sử dụng rô-to thuyết minh để chuyển đến điểm mốc thông báo.",navigationToKeyboard:"Có thông báo mới ở khu vực thông báo. Hãy nhấn F6 để chuyển đến khu vực thông báo gần đây nhất.",newMessage:"Thông báo loại {category}. {summary}. {detail}.",noDetail:"Không có chi tiết"}},"oj-ojMessageBanner":{close:"Đóng",navigationFromMessagesRegion:"Truy cập khu vực thông báo. Nhấn F6 để chuyển trở lại yếu tố được làm nổi bật trước.",navigationToMessagesRegion:"Có thông báo mới ở khu vực thông báo. Hãy nhấn F6 để chuyển đến khu vực thông báo gần đây nhất.",error:"Lỗi",warning:"Cảnh báo",info:"Thông tin",confirmation:"Xác nhận"},"oj-ojConveyorBelt":{tipArrowNext:"Tiếp",tipArrowPrevious:"Trước"},"oj-ojTrain":{stepInfo:"Bước {index}/{count}.",stepStatus:"Trạng thái: {status}.",stepCurrent:"Hiện tại",stepVisited:"Đã truy cập",stepNotVisited:"Chưa truy cập",stepDisabled:"Đã vô hiệu hóa",stepMessageType:"Loại thông báo: {messageType}.",stepMessageConfirmation:"Đã xác nhận",stepMessageInfo:"Thông tin",stepMessageWarning:"Cảnh báo",stepMessageError:"Lỗi"}});