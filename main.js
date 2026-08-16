function tinhDiem(button) {
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
    
    // Nhóm 1: QTKD, KT (C01, C03, C04, D01, X01, X02)
    let diem_hb_max_n1 = Math.max(diem_hb_c01 , diem_hb_c03 , diem_hb_c04 , diem_hb_d01 , diem_hb_x01 , diem_hb_x02);
    let diem_dt_max_n1 = Math.max(diem_dt_c01 , diem_dt_c03 , diem_dt_c04 , diem_dt_d01 , diem_dt_x01 , diem_dt_x02);
    
    // Nhóm 2: CNTT (A00, A01, C01, X05, X06, X07; C02, D01, X01, X02, X03)
    let diem_hb_max_n2 = Math.max(diem_hb_a00 , diem_hb_a01 , diem_hb_c01 , diem_hb_x05 , diem_hb_x06 , diem_hb_x07, diem_hb_c02 , diem_hb_d01 , diem_hb_x01 , diem_hb_x02 , diem_hb_x03);
    let diem_dt_max_n2 = Math.max(diem_dt_a00 , diem_dt_a01 , diem_dt_c01 , diem_dt_x05 , diem_dt_x06 , diem_dt_x07, diem_dt_c02 , diem_dt_d01 , diem_dt_x01 , diem_dt_x02 , diem_dt_x03); 

    // Nhóm 3: Cơ khí; Ô tô; Điện (A00, A01, C01, X05, X06, X07)
    let diem_hb_max_n3 = Math.max(diem_hb_a00 , diem_hb_a01 , diem_hb_c01 , diem_hb_x05 , diem_hb_x06 , diem_hb_x07);
    let diem_dt_max_n3 = Math.max(diem_dt_a00 , diem_dt_a01 , diem_dt_c01 , diem_dt_x05 , diem_dt_x06 , diem_dt_x07);

    // Tính điểm xét tuyển 1, 2, 3, 4 và điểm Toán + Văn + 1 môn thi
    // Ngành Quản trị kinh doanh, kế toán
    // Điểm xét tuyển 1 (điểm thi theo THM)
    let qtkd_dxt1 = diem_dt_max_n1;
    // Điểm xét tuyển 2 (điểm thi đánh giá năng lực)
    let qtkd_dxt2 = Math.floor(diem_dgnl*30/1139 * 100) / 100;
    // Điểm xét tuyển 3 (điểm thi theo THM + điểm học bạ THM)
    let qtkd_dxt3 = Math.floor((0.7*diem_dt_max_n1 + 0.3*diem_hb_max_n1) * 100) / 100;
    // Điểm xét tuyển 4 (điểm thi đánh giá năng lực + điểm học bạ THM)
    let qtkd_dxt4 = Math.floor((0.7*(diem_dgnl*30/1139) + 0.3*diem_hb_max_n1) * 100) / 100;

    // Ngành Kế toán
    // Điểm xét tuyển 1 (điểm thi theo THM)
    let kt_dxt1 = diem_dt_max_n1;
    // Điểm xét tuyển 2 (điểm thi đánh giá năng lực)
    let kt_dxt2 = Math.floor(diem_dgnl*30/1139 * 100) / 100;
    // Điểm xét tuyển 3 (điểm thi theo THM + điểm học bạ THM)
    let kt_dxt3 = Math.floor((0.7*diem_dt_max_n1 + 0.3*diem_hb_max_n1) * 100) / 100;
    // Điểm xét tuyển 4 (điểm thi đánh giá năng lực + điểm học bạ THM)
    let kt_dxt4 = Math.floor((0.7*(diem_dgnl*30/1139) + 0.3*diem_hb_max_n1) * 100) / 100;

    // Ngành CNTT
    // Điểm xét tuyển 1 (điểm thi theo THM)
    let tin_dxt1 = diem_dt_max_n2;
    // Điểm xét tuyển 2 (điểm thi đánh giá năng lực)
    let tin_dxt2 = Math.floor(diem_dgnl*30/1139 * 100) / 100;
    // Điểm xét tuyển 3 (điểm thi theo THM + điểm học bạ THM)
    let tin_dxt3 = Math.floor((0.7*diem_dt_max_n2 + 0.3*diem_hb_max_n2) * 100) / 100;
    // Điểm xét tuyển 4 (điểm thi đánh giá năng lực + điểm học bạ THM)
    let tin_dxt4 = Math.floor((0.7*(diem_dgnl*30/1139) + 0.3*diem_hb_max_n2) * 100) / 100;

    // Ngành Cơ khí
    // Điểm xét tuyển 1 (điểm thi theo THM)
    let ck_dxt1 = diem_dt_max_n3;
    // Điểm xét tuyển 2 (điểm thi đánh giá năng lực)
    let ck_dxt2 = Math.floor(diem_dgnl*30/1139 * 100) / 100;
    // Điểm xét tuyển 3 (điểm thi theo THM + điểm học bạ THM)
    let ck_dxt3 = Math.floor((0.7*diem_dt_max_n2 + 0.3*diem_hb_max_n3) * 100) / 100;
    // Điểm xét tuyển 4 (điểm thi đánh giá năng lực + điểm học bạ THM)
    let ck_dxt4 = Math.floor((0.7*(diem_dgnl*30/1139) + 0.3*diem_hb_max_n3) * 100) / 100;

    // Ngành Ô tô
    // Điểm xét tuyển 1 (điểm thi theo THM)
    let oto_dxt1 = diem_dt_max_n3;
    // Điểm xét tuyển 2 (điểm thi đánh giá năng lực)
    let oto_dxt2 = Math.floor(diem_dgnl*30/1139 * 100) / 100;
    // Điểm xét tuyển 3 (điểm thi theo THM + điểm học bạ THM)
    let oto_dxt3 = Math.floor((0.7*diem_dt_max_n2 + 0.3*diem_hb_max_n3) * 100) / 100;
    // Điểm xét tuyển 4 (điểm thi đánh giá năng lực + điểm học bạ THM)
    let oto_dxt4 = Math.floor((0.7*(diem_dgnl*30/1139) + 0.3*diem_hb_max_n3) * 100) / 100;

    // Ngành Điện
    // Điểm xét tuyển 1 (điểm thi theo THM)
    let dien_dxt1 = diem_dt_max_n3;
    // Điểm xét tuyển 2 (điểm thi đánh giá năng lực)
    let dien_dxt2 = Math.floor(diem_dgnl*30/1139 * 100) / 100;
    // Điểm xét tuyển 3 (điểm thi theo THM + điểm học bạ THM)
    let dien_dxt3 = Math.floor((0.7*diem_dt_max_n2 + 0.3*diem_hb_max_n3) * 100) / 100;
    // Điểm xét tuyển 4 (điểm thi đánh giá năng lực + điểm học bạ THM)
    let dien_dxt4 = Math.floor((0.7*(diem_dgnl*30/1139) + 0.3*diem_hb_max_n3) * 100) / 100;


    // Tính điểm theo Toán + Văn + 1 môn thi khác
    // B03, C01, C02, C03, D01, X01, X02, X03, X04
    let diem_tv = Math.max(diem_dt_b03 , diem_dt_c01 , diem_dt_c02 , diem_dt_c03 , diem_dt_d01 , diem_dt_x01 , diem_dt_x02, diem_dt_x03 , diem_dt_x04);

    // Gán giá trị lên Label
    document.getElementById("qtkd_dxt1").textContent = qtkd_dxt1;
    if(qtkd_dxt1 < 15)
    {
      document.getElementById("qtkd_dxt1").style.color = 'red';
      // document.getElementById("qtkd_dxt1").style.fontWeight = 'bold';
    }
    document.getElementById("qtkd_dxt2").textContent = qtkd_dxt2;
    document.getElementById("qtkd_dxt3").textContent = qtkd_dxt3;
    document.getElementById("qtkd_dxt4").textContent = qtkd_dxt4;
    document.getElementById("qtkd_dtv").textContent = diem_tv;
    if(diem_tv < 15)
    {
      document.getElementById("qtkd_dtv").style.color = 'red';
      // document.getElementById("qtkd_dtv").style.fontWeight = 'bold';
    }

    document.getElementById("kt_dxt1").textContent = kt_dxt1;
    if(kt_dxt1 < 15)
    {
      document.getElementById("kt_dxt1").style.color = 'red';
      // document.getElementById("kt_dxt1").style.fontWeight = 'bold';
    }
    document.getElementById("kt_dxt2").textContent = kt_dxt2;
    document.getElementById("kt_dxt3").textContent = kt_dxt3;
    document.getElementById("kt_dxt4").textContent = kt_dxt4;
    document.getElementById("kt_dtv").textContent = diem_tv;
    if(diem_tv < 15)
    {
      document.getElementById("kt_dtv").style.color = 'red';
      // document.getElementById("kt_dtv").style.fontWeight = 'bold';
    }

    document.getElementById("tin_dxt1").textContent = tin_dxt1;
    if( tin_dxt1 < 15)
    {
      document.getElementById("tin_dxt1").style.color = 'red';
      // document.getElementById("tin_dxt1").style.fontWeight = 'bold';
    }
    document.getElementById("tin_dxt2").textContent = tin_dxt2;
    document.getElementById("tin_dxt3").textContent = tin_dxt3;
    document.getElementById("tin_dxt4").textContent = tin_dxt4;
    document.getElementById("tin_dtv").textContent = diem_tv;
    if(diem_tv < 15)
    {
      document.getElementById("tin_dtv").style.color = 'red';
      // document.getElementById("tin_dtv").style.fontWeight = 'bold';
    }

    document.getElementById("ck_dxt1").textContent = ck_dxt1;
    if( ck_dxt1 < 15)
    {
      document.getElementById("ck_dxt1").style.color = 'red';
      // document.getElementById("ck_dxt1").style.fontWeight = 'bold';
    }
    document.getElementById("ck_dxt2").textContent = ck_dxt2;
    document.getElementById("ck_dxt3").textContent = ck_dxt3;
    document.getElementById("ck_dxt4").textContent = ck_dxt4;
    document.getElementById("ck_dtv").textContent = diem_tv;
    if(diem_tv < 15)
    {
      document.getElementById("ck_dtv").style.color = 'red';
      // document.getElementById("ck_dtv").style.fontWeight = 'bold';
    }

    document.getElementById("oto_dxt1").textContent = oto_dxt1;
    if( oto_dxt1 < 15)
    {
      document.getElementById("oto_dxt1").style.color = 'red';
      // document.getElementById("oto_dxt1").style.fontWeight = 'bold';
    }
    document.getElementById("oto_dxt2").textContent = oto_dxt2;
    document.getElementById("oto_dxt3").textContent = oto_dxt3;
    document.getElementById("oto_dxt4").textContent = oto_dxt4;
    document.getElementById("oto_dtv").textContent = diem_tv;
    if(diem_tv < 15)
    {
      document.getElementById("oto_dtv").style.color = 'red';
      // document.getElementById("oto_dtv").style.fontWeight = 'bold';
    }

    document.getElementById("dien_dxt1").textContent = dien_dxt1;
    if( dien_dxt1 < 15)
    {
      document.getElementById("dien_dxt1").style.color = 'red';
      // document.getElementById("dien_dxt1").style.fontWeight = 'bold';
    }
    document.getElementById("dien_dxt2").textContent = dien_dxt2;
    document.getElementById("dien_dxt3").textContent = dien_dxt3;
    document.getElementById("dien_dxt4").textContent = dien_dxt4;
    document.getElementById("dien_dtv").textContent = diem_tv;
    if(diem_tv < 15)
    {
      document.getElementById("dien_dtv").style.color = 'red';
      // document.getElementById("dien_dtv").style.fontWeight = 'bold';
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