function tinhDiem(button) {
  //alert("Chức năng đang được phát triển. Vui lòng liên hệ với quản trị viên để biết thêm chi tiết.");
    // Lấy điểm
    let diem_toan_12 = parseFloat(document.getElementById("toan12").value);
    let diem_toan = parseFloat(document.getElementById("toan").value);
    let diem_ly12 = parseFloat(document.getElementById("ly12").value);
    let diem_ly = parseFloat(document.getElementById("ly").value);
    let diem_hoa12 = parseFloat(document.getElementById("hoa12").value);
    let diem_hoa = parseFloat(document.getElementById("hoa").value);
    let diem_van12 = parseFloat(document.getElementById("van12").value);
    let diem_van = parseFloat(document.getElementById("van").value);
    let diem_sinh12 = parseFloat(document.getElementById("sinh12").value);
    let diem_sinh = parseFloat(document.getElementById("sinh").value);
    let diem_su12 = parseFloat(document.getElementById("su12").value);
    let diem_su = parseFloat(document.getElementById("su").value);
    let diem_dia12 = parseFloat(document.getElementById("dia12").value);
    let diem_dia = parseFloat(document.getElementById("dia").value);
    let diem_anh12 = parseFloat(document.getElementById("anh12").value);
    let diem_anh = parseFloat(document.getElementById("anh").value);
    let diem_tin12 = parseFloat(document.getElementById("tin12").value);
    let diem_tin = parseFloat(document.getElementById("tin").value);
    let diem_ktpl12 = parseFloat(document.getElementById("ktpl12").value);
    let diem_ktpl = parseFloat(document.getElementById("ktpl").value);
    let diem_cncn12 = parseFloat(document.getElementById("cncn12").value);
    let diem_cncn = parseFloat(document.getElementById("cncn").value);
    let diem_cnnn12 = parseFloat(document.getElementById("cnnn12").value);
    let diem_cnnn = parseFloat(document.getElementById("cnnn").value);
    let diem_dgnl = parseFloat(document.getElementById("dgnl").value);

    // Tính điểm tổ hợp môn
    // A00 (Toán + Lý + Hoá)
    let diem_hb_a00 = 0;
    if(diem_toan_12 > 0 && diem_ly12 > 0 && diem_hoa12 > 0){
      diem_hb_a00 = diem_toan_12 + diem_ly12 + diem_hoa12;
    } 

    let diem_dt_a00 = 0;
    if(diem_toan >1 && diem_ly > 1 && diem_hoa > 1){
      diem_dt_a00 = diem_toan + diem_ly + diem_hoa;
    }

    // A01 (Toán + Lý + Tiếng Anh)
    let diem_hb_a01 = 0;
    if(diem_toan_12 > 0 && diem_ly12 > 0 && diem_anh12 > 0 ){
      diem_hb_a01 = diem_toan_12 + diem_ly12 + diem_anh12;
    }

    let diem_dt_a01 = 0;
    if(diem_toan > 1 && diem_ly > 1 && diem_anh > 1 ){
      diem_dt_a01 = diem_toan + diem_ly + diem_anh;
    }
    
    // B03 (Toán + Văn + Sinh)
    let diem_hb_b03 = 0;
    if(diem_toan_12 >0 && diem_van12 > 0 && diem_sinh12 > 0){
      diem_hb_b03 = diem_toan_12 + diem_van12 + diem_sinh12;
    }

    let diem_dt_b03 = 0;
    if(diem_toan > 1 && diem_van > 1 && diem_sinh > 1){
      diem_dt_b03 = diem_toan + diem_van + diem_sinh;
    }
    
    // C01 (Toán + Văn + Lý)
    let diem_hb_c01 = 0;
    if(diem_toan_12 > 0 && diem_van12 > 0 && diem_ly12 > 0){
      diem_hb_c01 = diem_toan_12 + diem_van12 + diem_ly12;
    }

    let diem_dt_c01 = 0;
    if(diem_toan > 1 && diem_van > 1 && diem_ly > 1){
      diem_dt_c01 = diem_toan + diem_van + diem_ly;
    }
    
    // C02 (Toán + Văn + Hoá)
    let diem_hb_c02 = 0;
    if(diem_toan_12 > 0 && diem_van12 > 0 && diem_hoa12 >0){
      diem_hb_c02 = diem_toan_12 + diem_van12 + diem_hoa12;
    }

    let diem_dt_c02 = 0;
    if(diem_toan > 1 && diem_van > 1 && diem_hoa > 1){
      let diem_dt_c02 = diem_toan + diem_van + diem_hoa;
    } 

    // C03 (Toán + Văn + Sử)
    let diem_hb_c03 = 0;
    if(diem_toan_12 > 0 && diem_van12 > 0 && diem_su12 > 0){
      diem_hb_c03 = diem_toan_12 + diem_van12 + diem_su12;
    }

    let diem_dt_c03 = 0;
    if(diem_toan > 1 && diem_van > 1 && diem_su > 1){
      diem_dt_c03 = diem_toan + diem_van + diem_su;
    }

    // C04 (Toán + Văn + Địa)
    let diem_hb_c04 = 0;
    if(diem_toan_12 > 0 && diem_van12 > 0 && diem_dia12 > 0){
      diem_hb_c04 = diem_toan_12 + diem_van12 + diem_dia12;
    }
    let diem_dt_c04 = 0;
    if(diem_toan > 1 && diem_van > 1 && diem_dia > 1){
      diem_dt_c04 = diem_toan + diem_van + diem_dia;
    }

    // D01 (Toán + Văn + Anh)
    let diem_hb_d01 = 0;
    if(diem_toan_12 > 0 && diem_van12 > 0 && diem_anh12 > 0){
      diem_hb_d01 = diem_toan_12 + diem_van12 + diem_anh12;
    }

    let diem_dt_d01 = 0;
    if(diem_toan > 1 && diem_van > 1 && diem_anh > 1){
      diem_dt_d01 = diem_toan + diem_van + diem_anh;
    }
    // X01 (Toán + Văn + KTPL)
    let diem_hb_x01 = 0;
    if(diem_toan_12 > 0 && diem_van12 > 0 && diem_ktpl12 > 0){
      diem_hb_x01 = diem_toan_12 + diem_van12 + diem_ktpl12;
    }

    let diem_dt_x01 = 0;
    if(diem_toan > 1 && diem_van > 1 && diem_ktpl > 1){
      diem_dt_x01 = diem_toan + diem_van + diem_ktpl;
    }

    // X02 (Toán + Văn + Tin)
    let diem_hb_x02 = 0;
    if(diem_toan_12 > 0 && diem_van12 > 0 && diem_tin12 > 0){
      diem_hb_x02 = diem_toan_12 + diem_van12 + diem_tin12;
    }

    let diem_dt_x02 = 0;
    if(diem_toan > 1 && diem_van > 1 && diem_tin > 1){
      diem_dt_x02 = diem_toan + diem_van + diem_tin;
    }

    // X03 (Toán + Văn + CNCN)
    let diem_hb_x03 = 0;
    if(diem_toan_12 > 0 && diem_van12 > 0 && diem_cncn12 > 0){
      diem_hb_x03 = diem_toan_12 + diem_van12 + diem_cncn12;
    }

    let diem_dt_x03 = 0;
    if(diem_toan > 1 && diem_van > 1 && diem_cncn > 1){
      diem_dt_x03 = diem_toan + diem_van + diem_cncn;
    }

    // X04 (Toán + Văn + CNNN)
    let diem_hb_x04 = 0;
    if(diem_toan_12 > 0 && diem_van12 > 0 && diem_cnnn12 > 0){
      diem_hb_x04 = diem_toan_12 + diem_van12 + diem_cnnn12;
    }

    let diem_dt_x04 = 0;
    if(diem_toan > 1 && diem_van > 1 && diem_cnnn > 1){
      diem_dt_x04 = diem_toan + diem_van + diem_cnnn;
    }

    // X05 (Toán + Lý + KTPL)
    let diem_hb_x05 = 0;
    if(diem_toan_12 > 0 && diem_ly12 > 0 && diem_ktpl12 > 0){
      diem_hb_x05 = diem_toan_12 + diem_ly12 + diem_ktpl12;
    }

    let diem_dt_x05 = 0;
    if(diem_toan > 1 && diem_ly > 1 && diem_ktpl > 1){
      diem_dt_x05 = diem_toan + diem_ly + diem_ktpl;
    }

    // X06 (Toán + Lý + Tin)
    let diem_hb_x06 = 0;
    if(diem_toan_12 > 0 && diem_ly12 > 0 && diem_tin12 > 0){
      diem_hb_x06 = diem_toan_12 + diem_ly12 + diem_tin12;
    }

    let diem_dt_x06 = 0;
    if(diem_toan > 1 && diem_ly > 1 && diem_tin > 1){
      diem_dt_x06 = diem_toan + diem_ly + diem_tin;
    }

    // X07 (Toán + Lý + CNCN)
    let diem_hb_x07 = 0;
    if(diem_toan_12 > 0 && diem_ly12 > 0 && diem_cncn12 > 0){
      diem_hb_x07 = diem_toan_12 + diem_ly12 + diem_cncn12;
    }

    let diem_dt_x07 = 0;
    if(diem_toan > 1 && diem_ly > 1 && diem_cncn > 1){
      diem_dt_x07 = diem_toan + diem_ly + diem_cncn;
    }
    
    // Nhóm 1: Quản trị kinh doanh, kế toán (C01, C03, C04, D01, X01, X02)
    // 1. Tạo một object chứa cặp tên khối và điểm số tương ứng
    const khoiHocba_n1 = {
      'C01': Number(diem_hb_c01 || 0),
      'C03': Number(diem_hb_c03 || 0),
      'C04': Number(diem_hb_c04 || 0),
      'D01': Number(diem_hb_d01 || 0),
      'X01': Number(diem_hb_x01 || 0),
      'X02': Number(diem_hb_x02 || 0)
    };

    // 2. Tìm tên khối có điểm lớn nhất (maKhoiMaxHocba_n1)
    let maKhoiMaxHB_n1 = Object.keys(khoiHocba_n1).reduce((a, b) => khoiHocba_n1[a] >= khoiHocba_n1[b] ? a : b);

    // 3. Tìm điểm số lớn nhất (diem_hb_max_n1)
    let diem_hb_max_n1 = khoiHocba_n1[maKhoiMaxHB_n1];

    const khoiThi_n1 = {
      'C01': Number(diem_dt_c01 || 0),
      'C03': Number(diem_dt_c03 || 0),
      'C04': Number(diem_dt_c04 || 0),
      'D01': Number(diem_dt_d01 || 0),
      'X01': Number(diem_dt_x01 || 0),
      'X02': Number(diem_dt_x02 || 0)
    };

    // 2. Tìm tên khối có điểm lớn nhất (maKhoiMaxThi_n1)
    let maKhoiMaxThi_n1 = Object.keys(khoiThi_n1).reduce((a, b) => khoiThi_n1[a] >= khoiThi_n1[b] ? a : b);

    // 3. Tìm điểm số lớn nhất (diem_thi_max_n1)
    let diem_thi_max_n1 = khoiThi_n1[maKhoiMaxThi_n1];

    
    // Nhóm 2: CNTT (A00, A01, C01, X05, X06, X07; C02, D01, X01, X02, X03)
    const khoiHocba_n2 = {
      'A00': Number(diem_hb_a00 || 0),
      'A01': Number(diem_hb_a01 || 0),
      'C01': Number(diem_hb_c01 || 0),
      'C02': Number(diem_hb_c02 || 0),
      'D01': Number(diem_hb_d01 || 0),
      'X01': Number(diem_hb_x01 || 0),
      'X02': Number(diem_hb_x02 || 0),
      'X03': Number(diem_hb_x03 || 0),
      'X05': Number(diem_hb_x05 || 0),
      'X06': Number(diem_hb_x06 || 0),
      'X07': Number(diem_hb_x07 || 0)
    };
    // 2. Tìm tên khối có điểm lớn nhất (maKhoiMaxHocba_n2)
    let maKhoiMaxHB_n2 = Object.keys(khoiHocba_n2).reduce((a, b) => khoiHocba_n2[a] >= khoiHocba_n2[b] ? a : b);

    // 3. Tìm điểm số lớn nhất (diem_hb_max_n2)
    let diem_hb_max_n2 = khoiHocba_n2[maKhoiMaxHB_n2];

    
    const khoiThi_n2 = {
      'A00': Number(diem_dt_a00 || 0),
      'A01': Number(diem_dt_a01 || 0),
      'C01': Number(diem_dt_c01 || 0),
      'C02': Number(diem_dt_c02 || 0),
      'D01': Number(diem_dt_d01 || 0),
      'X01': Number(diem_dt_x01 || 0),
      'X02': Number(diem_dt_x02 || 0),
      'X03': Number(diem_dt_x03 || 0),
      'X05': Number(diem_dt_x05 || 0),
      'X06': Number(diem_dt_x06 || 0),
      'X07': Number(diem_dt_x07 || 0)
    };

    // 2. Tìm tên khối có điểm lớn nhất (maKhoiMaxThi_n2)
    let maKhoiMaxThi_n2 = Object.keys(khoiThi_n2).reduce((a, b) => khoiThi_n2[a] >= khoiThi_n2[b] ? a : b);

    // 3. Tìm điểm số lớn nhất (diem_thi_max_n2)
    let diem_thi_max_n2 = khoiThi_n2[maKhoiMaxThi_n2];


    // Nhóm 3: Cơ khí; Ô tô; Điện (A00, A01, C01, X05, X06, X07)
    // 1. Tạo một object chứa cặp tên khối và điểm số tương ứng
    const khoiHocba_n3 = {
      'A00': Number(diem_hb_a00 || 0),
      'A01': Number(diem_hb_a01 || 0),
      'C01': Number(diem_hb_c01 || 0),
      'X05': Number(diem_hb_x05 || 0),
      'X06': Number(diem_hb_x06 || 0),
      'X07': Number(diem_hb_x07 || 0)
    };

    // 2. Tìm tên khối có điểm lớn nhất (maKhoiMaxHocba_n3)
    let maKhoiMaxHB_n3 = Object.keys(khoiHocba_n3).reduce((a, b) => khoiHocba_n3[a] >= khoiHocba_n3[b] ? a : b);

    // 3. Tìm điểm số lớn nhất (diem_hb_max_n3)
    let diem_hb_max_n3 = khoiHocba_n3[maKhoiMaxHB_n3];

    const khoiThi_n3 = {
      'A00': Number(diem_dt_a00 || 0),
      'A01': Number(diem_dt_a01 || 0),
      'C01': Number(diem_dt_c01 || 0),
      'X05': Number(diem_dt_x05 || 0),
      'X06': Number(diem_dt_x06 || 0),
      'X07': Number(diem_dt_x07 || 0)
    };

    // 2. Tìm tên khối có điểm lớn nhất (maKhoiMaxThi_n3)
    let maKhoiMaxThi_n3 = Object.keys(khoiThi_n3).reduce((a, b) => khoiThi_n3[a] >= khoiThi_n3[b] ? a : b);

    // 3. Tìm điểm số lớn nhất (diem_thi_max_n3)
    let diem_thi_max_n3 = khoiThi_n3[maKhoiMaxThi_n3];


    // Tính điểm xét tuyển 1, 2, 3, 4 và điểm Toán + Văn + 1 môn thi
    // Ngành Quản trị kinh doanh, kế toán
    // Điểm xét tuyển 1 (điểm thi theo THM)
    let nhom1_dxt1 = Math.floor(diem_thi_max_n1*100) / 100;
    // Điểm xét tuyển 2 (điểm thi đánh giá năng lực)
    let nhom1_dxt2 = Math.floor(diem_dgnl*30/1139 * 100) / 100;
    // Điểm xét tuyển 3 (điểm thi theo THM + điểm học bạ THM)
    let nhom1_dxt3 = Math.floor((0.7*diem_thi_max_n1 + 0.3*diem_hb_max_n1) * 100) / 100;
    // Điểm xét tuyển 4 (điểm thi đánh giá năng lực + điểm học bạ THM)
    let nhom1_dxt4 = Math.floor((0.7*(diem_dgnl*30/1139) + 0.3*diem_hb_max_n1) * 100) / 100;

        // Ngành CNTT
    // Điểm xét tuyển 1 (điểm thi theo THM)
    let nhom2_dxt1 = Math.floor(diem_thi_max_n2*100) / 100;
    // Điểm xét tuyển 2 (điểm thi đánh giá năng lực)
    let nhom2_dxt2 = Math.floor(diem_dgnl*30/1139 * 100) / 100;
    // Điểm xét tuyển 3 (điểm thi theo THM + điểm học bạ THM)
    let nhom2_dxt3 = Math.floor((0.7*diem_thi_max_n2 + 0.3*diem_hb_max_n2) * 100) / 100;
    // Điểm xét tuyển 4 (điểm thi đánh giá năng lực + điểm học bạ THM)
    let nhom2_dxt4 = Math.floor((0.7*(diem_dgnl*30/1139) + 0.3*diem_hb_max_n2) * 100) / 100;

    // Ngành Cơ khí, Ô tô, Điện
    // Điểm xét tuyển 1 (điểm thi theo THM)
    let nhom3_dxt1 = Math.floor(diem_thi_max_n3*100) / 100;
    // Điểm xét tuyển 2 (điểm thi đánh giá năng lực)
    let nhom3_dxt2 = Math.floor(diem_dgnl*30/1139 * 100) / 100;
    // Điểm xét tuyển 3 (điểm thi theo THM + điểm học bạ THM)
    let nhom3_dxt3 = Math.floor((0.7*diem_thi_max_n3 + 0.3*diem_hb_max_n3) * 100) / 100;
    // Điểm xét tuyển 4 (điểm thi đánh giá năng lực + điểm học bạ THM)
    let nhom3_dxt4 = Math.floor((0.7*(diem_dgnl*30/1139) + 0.3*diem_hb_max_n3) * 100) / 100;

    // Tính điểm theo Toán + Văn + 1 môn thi khác
    // B03, C01, C02, C03, D01, X01, X02, X03, X04
    
    const khoiTV = {
      'B03': Number(diem_dt_b03 || 0),
      'C01': Number(diem_dt_c01 || 0),
      'C02': Number(diem_dt_c02 || 0),
      'C03': Number(diem_dt_c03 || 0),
      'C04': Number(diem_dt_c04 || 0),
      'D01': Number(diem_dt_d01 || 0),
      'X01': Number(diem_dt_x01 || 0),
      'X02': Number(diem_dt_x02 || 0),
      'X03': Number(diem_dt_x03 || 0),
      'X04': Number(diem_dt_x04 || 0)
    };

    // 2. Tìm tên khối có điểm lớn nhất (maKhoiMaxThi_n3)
    let maKhoiMaxTV = Object.keys(khoiTV).reduce((a, b) => khoiTV[a] >= khoiTV[b] ? a : b);

    // 3. Tìm điểm số lớn nhất (diem_thi_max_n3)
    let diem_tv = khoiTV[maKhoiMaxTV];

    // Kiểm tra năm tốt nghiệp
    const checkbox_namtn = document.getElementById('namtn');
    // Lấy trạng thái true hoặc false
    const isChecked_namtn = checkbox_namtn.checked; 
  
    let xet_tv = true;
    if (isChecked_namtn) {
      xet_tv = false; // Tốt nghiêp trước 2026
    } else {
      xet_tv = true; // Tốt nghiệp từ 2026 về sau
    }

    // Gán giá trị lên Đ1, Đ2, Đ3, Đ4, TV 
    // Nhóm 1: QTKD, KT
    let target_nhom1_dxt1 = document.getElementById("nhom1_dxt1");
    if (target_nhom1_dxt1) {
      target_nhom1_dxt1.textContent = nhom1_dxt1;
      if(nhom1_dxt1 >0 && nhom1_dxt1 < 15)
      {
        target_nhom1_dxt1.style.color = 'red';
      }else{
        target_nhom1_dxt1.style.color = 'blue';
      }
    }
    
    let target_nhom1_dxt2 = document.getElementById("nhom1_dxt2");
    if (target_nhom1_dxt2) {
      target_nhom1_dxt2.textContent = nhom1_dxt2;
    }

    let target_nhom1_dxt3 = document.getElementById("nhom1_dxt3");
    if (target_nhom1_dxt3) {
      target_nhom1_dxt3.textContent = nhom1_dxt3;
    }

    let target_nhom1_dxt4 = document.getElementById("nhom1_dxt4");
    if (target_nhom1_dxt4) {
      target_nhom1_dxt4.textContent = nhom1_dxt4;
    }

    let target_nhom1_dtv = document.getElementById("nhom1_dtv");
    if (target_nhom1_dtv) {
      target_nhom1_dtv.textContent = diem_tv;
      if(xet_tv){
        if(diem_tv > 0 && diem_tv < 15 )
        {
          document.getElementById("nhom1_dtv").style.color = 'red';
        }else{
          document.getElementById("nhom1_dtv").style.color = 'blue';
        }
      }else{
          document.getElementById("nhom1_dtv").textContent = "";
      }
    }

    // Gán giá trị lên Label Nhóm 2: CNTT
    let target_nhom2_dxt1 = document.getElementById("nhom2_dxt1");
    if (target_nhom2_dxt1) {
      target_nhom2_dxt1.textContent = nhom2_dxt1;
      if( nhom2_dxt1 > 0 && nhom2_dxt1 < 15 )
      {
        target_nhom2_dxt1.style.color = 'red';
      }else{
        target_nhom2_dxt1.style.color = 'blue';
      }
    }
    
    let target_nhom2_dxt2 = document.getElementById("nhom2_dxt2");
    if (target_nhom2_dxt2) {
      target_nhom2_dxt2.textContent = nhom2_dxt2;
    }

    let target_nhom2_dxt3 = document.getElementById("nhom2_dxt3");
    if (target_nhom2_dxt3) {
      target_nhom2_dxt3.textContent = nhom2_dxt3;
    }

    let target_nhom2_dxt4 = document.getElementById("nhom2_dxt4");
    if (target_nhom2_dxt4) {
      target_nhom2_dxt4.textContent = nhom2_dxt4;
    }

    let target_nhom2_dtv = document.getElementById("nhom2_dtv");
    if (target_nhom2_dtv) {
      target_nhom2_dtv.textContent = diem_tv;
      if(xet_tv){
        if(diem_tv > 0 && diem_tv < 15 )
        {
          document.getElementById("nhom2_dtv").style.color = 'red';
        }else{
          document.getElementById("nhom2_dtv").style.color = 'blue';
        }
      }else{
          document.getElementById("nhom2_dtv").textContent = "";
      }
    }

    // Gán giá trị lên Label Nhóm 3: Cơ khí, Ô tô, Điện
    let target_nhom3_dxt1 = document.getElementById("nhom3_dxt1");
    if (target_nhom3_dxt1) {
      target_nhom3_dxt1.textContent = nhom3_dxt1;
      if( nhom3_dxt1 > 0 && nhom3_dxt1 < 15 ){
        target_nhom3_dxt1.style.color = 'red';
      }else{
        target_nhom3_dxt1.style.color = 'blue';
      }
    }
    
    let target_nhom3_dxt2 = document.getElementById("nhom3_dxt2");
    if (target_nhom3_dxt2) {
      target_nhom3_dxt2.textContent = nhom3_dxt2;
    }

    let target_nhom3_dxt3 = document.getElementById("nhom3_dxt3");
    if (target_nhom3_dxt3) {
      target_nhom3_dxt3.textContent = nhom3_dxt3;
    }

    let target_nhom3_dxt4 = document.getElementById("nhom3_dxt4");
    if (target_nhom3_dxt4) {
      target_nhom3_dxt4.textContent = nhom3_dxt4;
    }

    let target_nhom3_dtv = document.getElementById("nhom3_dtv");
    if (target_nhom3_dtv) {
      target_nhom3_dtv.textContent = diem_tv;
      if(xet_tv){
        if(diem_tv > 0 && diem_tv < 15 )
        {
          document.getElementById("nhom3_dtv").style.color = 'red';
        }else{
          document.getElementById("nhom3_dtv").style.color = 'blue';
        }
      }else{
          document.getElementById("nhom3_dtv").textContent = "";
      }
    }

    // Hiển thị THM của Nhóm 1
    let target_thm_nhom1 = document.getElementById("thm_nhom1");
    if (target_thm_nhom1) {
      let thm_thi = "ĐT: " + maKhoiMaxThi_n1 + "(" + Math.floor(diem_thi_max_n1 * 100) / 100 + ")";
      let thm_tv = " TV: " + maKhoiMaxTV + "(" + Math.floor(diem_tv * 100) / 100 + ")";
      let thm_hb = " HB: " + maKhoiMaxHB_n1 + "(" + Math.floor(diem_hb_max_n1 * 100) / 100 + ")";
      let thm_n1 = thm_thi + thm_tv + thm_hb;
      if (thm_n1 === "") {
        target_thm_nhom1.textContent = "Không hợp lệ";
      }else{
        target_thm_nhom1.textContent = thm_n1;
      }
    }

    // Hiển thị THM của Nhóm 2
    let target_thm_nhom2 = document.getElementById("thm_nhom2");
    if (target_thm_nhom2) {
      let thm_thi = "ĐT: " + maKhoiMaxThi_n2 + "(" + Math.floor(diem_thi_max_n2 * 100) / 100 + ")";
      let thm_tv = " TV: " + maKhoiMaxTV + "(" + Math.floor(diem_tv * 100) / 100 + ")";
      let thm_hb = " HB: " + maKhoiMaxHB_n2 + "(" + Math.floor(diem_hb_max_n2 * 100) / 100 + ")";
      let thm_n2 = thm_thi + thm_tv + thm_hb;
      if (thm_n2 === "") {
        target_thm_nhom2.textContent = "Không hợp lệ";
      }else{
        target_thm_nhom2.textContent = thm_n2;
      }
    }

    // Hiển thị THM của Nhóm 3
    let target_thm_nhom3 = document.getElementById("thm_nhom3");
    if (target_thm_nhom3) {
      let thm_thi = "ĐT: " + maKhoiMaxThi_n3 + "(" + Math.floor(diem_thi_max_n3 * 100) / 100 + ")";
      let thm_tv = " TV: " + maKhoiMaxTV + "(" + Math.floor(diem_tv * 100) / 100 + ")";
      let thm_hb = " HB: " + maKhoiMaxHB_n3 + "(" + Math.floor(diem_hb_max_n3 * 100) / 100 + ")";
      let thm_n3 = thm_thi + thm_tv + thm_hb;
      if (thm_n3 === "") {
        target_thm_nhom3.textContent = "Không hợp lệ";
      }else{
        target_thm_nhom3.textContent = thm_n3;
      }
    }
    
}

function kiemTraPopup(el) {
  let val = parseFloat(el.value);
  
  if (!isNaN(val)) {
    if (val > 10) {
      alert("Lỗi: Giá trị nhập vào không được lớn hơn 10.00!");
      el.value = 0; // Đưa về giá trị tối đa
    } else if (val < 0) {
      alert("Lỗi: Giá trị nhập vào không được nhỏ hơn 0.00!");
      el.value = 0; // Đưa về giá trị tối thiểu
    }
  }
}