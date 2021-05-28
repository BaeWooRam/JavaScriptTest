var book = {
    topic : "JavaScript",
    fat : true
}

var point = [
    {x:0, y:1},
    {x:3, y:2}
]

console.log("book fat = "+book.fat+", topic = "+book.topic)
console.log("point[0] x = "+point[0].x+", y = "+point[0].y+", point[1] x = "+point[1].x+", y = "+point[1].y)

//jQuery는 브랄우저 지원 여부에 따라서 DOMContentLoaded나 Load 이벤트가 일어날 때 $('')에 등록된 함수를 실행하는데 이때 문서 파싱이 완료되었지만 이미지 같은 추가 자원은 아직 불러오지 못한 상태일 수 도 있다
//jQuery 이벤트 관련
$('#appShipModal').on('hide.bs.modal', function (e) {
    M.execute('exWnStopAlertSiren');
})