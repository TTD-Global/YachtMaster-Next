import ChevronLeft from "@/components/icons/IconChevronLeft"
import ChevronRight from "@/components/icons/IconChevronRight"

interface PageinationProps {
  initialPage: number;
  total: number;
  onChange?: (page: number) => void;
  size?: "sm" | "md" | "lg";
  rounded?: "rect" | "circle";
}

export default function Pageination({initialPage, total, onChange, size="lg", rounded="rect"}: PageinationProps) {
  const radius = rounded === "circle" ? "rounded-full" : "rounded-[8px]"
  let pageIndex = initialPage || 0

  const updatePage = (page: number) => {
    if (onChange) {
      onChange(page);
    }
    pageIndex = page
  };

  const gotoPreviousPage = () => {
    const newPageIndex = pageIndex - 1;
    if (newPageIndex > 0) {
      updatePage(newPageIndex);
    }
  };

  const gotoNextPage = () => {
    const newPageIndex = pageIndex + 1;
    if (newPageIndex <= total) {
      updatePage(newPageIndex);
    }
  };
  
  const pages = total
  const sizeButton =  size === "sm" ? "w-6 h-6" : 
                      size === "md" ? "w-8 h-8" :
                      size === "lg" ? "w-10 h-10" : ""
  const buttonStyle = `${sizeButton} ${radius} object-cover flex-shrink-0 flex items-center justify-center transition-colors text-[14px] text-[#475467]
            enabled:bg-muted/50 enabled:cursor-pointer border-[1px] border-solid border-[#475467] disabled:border-[#D1D4DA] 
            disabled:text-[#D1D4DA] disabled:bg-[#F6F6F6] disabled:pointer-events-none cursor-pointer`
  
  const renderPageButtons = () => {
    const renderPage = (pageNumber: number) => (
      <button
        key={`pageButton-${pageNumber}`}
        onClick={() => updatePage(pageNumber)}
        disabled={pageIndex === 0} // เปลี่ยนค่า page ที่นี่ pageModal
        className={`${buttonStyle}
            ${pageIndex === pageNumber 
              ? "text-white bg-[#0086C9] border-none" 
              : "text-[#475467] bg-transparent"}
        `}
      >
        {pageNumber}
      </button>
    );

    const renderDot = (pageNumber: number) => (
      <button
        key={`pageNumber-${pageNumber}`}
        // onClick={() => updatePage(pageNumber)}
        disabled={true}
        className={`${sizeButton} ${radius} flex-shrink-0 border-none flex items-center justify-center transition-colors pointer-events-none`}
      >
        ...
      </button>
    );

    let buttons = [];

    // กรณีหน้าไม่เกิน 7
    if (pages <= 7) {
      // วนลูปสร้างปุ่มตามจำนวนหน้า
      for (let i = 1; i <= pages; i++) {
        buttons.push(renderPage(i));
      }
    } else {
      // แสดงปุ่มเพจแรก
      buttons.push(renderPage(1));

      // กรณี pageIndex อยู่ในช่วงแรก
      if (pageIndex <= 4) {
        // วนลูปสร้างปุ่ม 2-5
        for (let i = 2; i <= 5; i++) {
          buttons.push(renderPage(i));
        }
        // แสดงจุดที่บ่งชี้หน้าสุดท้ายและแสดงหน้าสุดท้าย
        buttons.push(renderDot(pages - 1));
        buttons.push(renderPage(pages));
      } 
      // กรณี pageIndex อยู่ในช่วงสุดท้าย
      else if (pageIndex >= pages - 3) {
        // แสดงจุดที่บ่งชี้หน้าแรก
        buttons.push(renderDot(1));
        // วนลูปสร้างปุ่ม ที่ pages - 4 ถึง pages
        for (let i = pages - 4; i <= pages; i++) {
          buttons.push(renderPage(i));
        }
      } 
      // กรณี pageIndex อยู่ในช่วงกลาง
      else {
        // แสดงจุดที่บ่งชี้หน้าแรก
        buttons.push(renderDot(1));
        // วนลูปสร้างปุ่ม pageIndex - 1 ถึง pageIndex + 1
        for (let i = pageIndex - 1; i <= pageIndex + 1; i++) {
          buttons.push(renderPage(i));
        }
        // แสดงจุดที่บ่งชี้หน้าสุดท้ายและแสดงหน้าสุดท้าย
        buttons.push(renderDot(pages - 1));
        buttons.push(renderPage(pages));
      }
    }

    return buttons;
  };

  return (
    <div className="relative h-[52px] flex items-center justify-center">
      <div className="flex items-center justify-center gap-x-3">
        {/* previous page*/}
        <button
          className={`${buttonStyle}`}
          onClick={() => gotoPreviousPage()}
          disabled={pageIndex <= 1}
        >
          <ChevronLeft />
        </button>

        <div className="flex items-center gap-x-3 overflow-hidden">
          {renderPageButtons()}
        </div>

        {/* next page */}
        <button
          className={`${buttonStyle}`}
          onClick={() => gotoNextPage()}
          disabled={
            pageIndex === total ||
            pages === undefined ||
            pages === 0 ||
            pages === 1
          }
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
