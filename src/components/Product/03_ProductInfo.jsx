const ProductInfo = () => {
  return (
    <section className="w-full text-[#2f2b78]">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4 border-b-2 border-[#6b648b] pb-5 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold">Cybernecklace</h2>

            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full border-2 border-[#7bdc27] bg-[#d9ffd8]" />
              <p className="text-xl font-medium text-[#4b45a3]">Starchaser</p>
              <div className="h-4 w-4 rounded-full bg-[#f5a18d]" />
            </div>
          </div>

          <p className="text-4xl font-bold md:text-6xl">#Cybercore</p>
        </div>

        <div className="space-y-3 text-sm leading-6 text-[#34324f] md:text-base">
          <p>
            Description ใช้สำหรับแสดงรายละเอียดสินค้า ข้อมูลทั่วไปของชิ้นงาน
            และจุดเด่นที่อยากให้ผู้ชมเข้าใจก่อนตัดสินใจซื้อ
          </p>
          <p>
            สามารถวางเป็นข้อความตัวอย่างไปก่อนเพื่อจัด spacing ของ layout
            และค่อยเปลี่ยนเป็นข้อมูลจริงภายหลังได้
          </p>
          <p>
            ส่วนนี้ควรเป็นเนื้อหาของสินค้าโดยตรง เช่น วัสดุ ขนาด
            หรือคอนเซปต์ของงาน
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
