const bankCardList = [
  {
    bankCode: '00000000',
    bankName: '银联远程快捷（测试）',
    patterns: [{ reg: /^(621214)\d{13}$/g }],
  },
  {
    bankCode: '00000000',
    bankName: '银联远程快捷（测试）',
    patterns: [{ reg: /^(622424)\d{10}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6258245)\d{9}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6201362)\d{10}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6230742)\d{10}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6235242)\d{10}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6251646)\d{10}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6258246)\d{10}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6201363)\d{11}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6230743)\d{11}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6235243)\d{11}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6251647)\d{11}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6258247)\d{11}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6201365)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6201366)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6201367)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6201368)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6201369)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6230744)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6230745)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6230746)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6230747)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6230748)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6230749)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6235244)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6235245)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6235246)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6235247)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6235248)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6251648)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6251649)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6258248)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6258249)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(625153)\d{10}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(623529)\d{13}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6258244)\d{9}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6201361)\d{9}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6230740)\d{9}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6230741)\d{9}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6235241)\d{9}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6251640)\d{9}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6251641)\d{9}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6251642)\d{9}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6251643)\d{9}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6251644)\d{9}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6251645)\d{9}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6258240)\d{9}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6258241)\d{9}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6258242)\d{9}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6258243)\d{9}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6201364)\d{9}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6235249)\d{9}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6201360)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6235240)\d{12}$/g }],
  },
  {
    bankCode: '00010030',
    bankName: '中国银联支付标记',
    patterns: [{ reg: /^(6230440)\d{12}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636000)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636001)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636002)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636003)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636004)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636005)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636006)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636007)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636008)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636009)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926000)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926001)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926002)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926003)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926004)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926005)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926006)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926007)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926008)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926009)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926900)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926901)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926902)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926903)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926904)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926905)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926010)\d{9}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926011)\d{9}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926012)\d{9}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926013)\d{9}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926014)\d{9}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926015)\d{9}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926017)\d{9}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926018)\d{9}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926019)\d{9}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926906)\d{9}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926907)\d{9}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926908)\d{9}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926909)\d{9}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926910)\d{9}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926911)\d{9}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926020)\d{10}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926021)\d{10}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926022)\d{10}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926023)\d{10}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926025)\d{10}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926026)\d{10}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926027)\d{10}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926028)\d{10}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926029)\d{10}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926912)\d{10}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926914)\d{10}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926915)\d{10}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926916)\d{10}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926917)\d{10}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926030)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926031)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926032)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926033)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926034)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926035)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926036)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926037)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926038)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926039)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926918)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926919)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926920)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926921)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926922)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926923)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636010)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636011)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636012)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636013)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636014)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636015)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636016)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636017)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636018)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636019)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926040)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926041)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926042)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926043)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926044)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926045)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926046)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926047)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926048)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926049)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926924)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926925)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926926)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926927)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926928)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926929)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926016)\d{9}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926024)\d{10}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926913)\d{10}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636100)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926100)\d{11}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636020)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636021)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636101)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636102)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636103)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636104)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636105)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62636106)\d{8}$/g }],
  },
  {
    bankCode: '00010033',
    bankName: '银联国际支付标记',
    patterns: [{ reg: /^(62926050)\d{11}$/g }],
  },
  {
    bankCode: '01000000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(622199)\d{13}$/g }],
  },
  {
    bankCode: '01000000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(622150)\d{13}$/g }],
  },
  {
    bankCode: '01000000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(622151)\d{13}$/g }],
  },
  {
    bankCode: '01000000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(622181)\d{13}$/g }],
  },
  {
    bankCode: '01000000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(622188)\d{13}$/g }],
  },
  {
    bankCode: '01000000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(955100)\d{13}$/g }],
  },
  {
    bankCode: '01000000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(620062)\d{13}$/g }],
  },
  {
    bankCode: '01000000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(621285)\d{13}$/g }],
  },
  {
    bankCode: '01000000',
    bankName: '邮政储蓄银行',
    patterns: [{ reg: /^(621797)\d{13}$/g }],
  },
  {
    bankCode: '01000000',
    bankName: '邮政储蓄银行',
    patterns: [{ reg: /^(621799)\d{13}$/g }],
  },
  {
    bankCode: '01000000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(621096)\d{13}$/g }],
  },
  {
    bankCode: '01000000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(621095)\d{13}$/g }],
  },
  {
    bankCode: '01000000',
    bankName: '邮政储蓄银行',
    patterns: [{ reg: /^(621798)\d{13}$/g }],
  },
  {
    bankCode: '01001000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215010)\d{11}$/g }],
  },
  {
    bankCode: '01001000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218110)\d{11}$/g }],
  },
  {
    bankCode: '01001000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218810)\d{11}$/g }],
  },
  {
    bankCode: '01001000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215110)\d{11}$/g }],
  },
  {
    bankCode: '01001000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510010)\d{11}$/g }],
  },
  {
    bankCode: '01001100',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215011)\d{11}$/g }],
  },
  {
    bankCode: '01001100',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215111)\d{11}$/g }],
  },
  {
    bankCode: '01001100',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218111)\d{11}$/g }],
  },
  {
    bankCode: '01001100',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218811)\d{11}$/g }],
  },
  {
    bankCode: '01001100',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510011)\d{11}$/g }],
  },
  {
    bankCode: '01001200',
    bankName: '邮政银行',
    patterns: [{ reg: /^(62218812)\d{11}$/g }],
  },
  {
    bankCode: '01001200',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215012)\d{11}$/g }],
  },
  {
    bankCode: '01001200',
    bankName: '邮政银行',
    patterns: [{ reg: /^(62215112)\d{11}$/g }],
  },
  {
    bankCode: '01001200',
    bankName: '邮政银行',
    patterns: [{ reg: /^(95510012)\d{11}$/g }],
  },
  {
    bankCode: '01001200',
    bankName: '邮政银行',
    patterns: [{ reg: /^(62218112)\d{11}$/g }],
  },
  {
    bankCode: '01001600',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218116)\d{11}$/g }],
  },
  {
    bankCode: '01001600',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218816)\d{11}$/g }],
  },
  {
    bankCode: '01001600',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215016)\d{11}$/g }],
  },
  {
    bankCode: '01001600',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215116)\d{11}$/g }],
  },
  {
    bankCode: '01001600',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510016)\d{11}$/g }],
  },
  {
    bankCode: '01001900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215019)\d{11}$/g }],
  },
  {
    bankCode: '01001900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215119)\d{11}$/g }],
  },
  {
    bankCode: '01001900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218119)\d{11}$/g }],
  },
  {
    bankCode: '01001900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218819)\d{11}$/g }],
  },
  {
    bankCode: '01001900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510019)\d{11}$/g }],
  },
  {
    bankCode: '01002200',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215022)\d{11}$/g }],
  },
  {
    bankCode: '01002200',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218822)\d{11}$/g }],
  },
  {
    bankCode: '01002200',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510022)\d{11}$/g }],
  },
  {
    bankCode: '01002200',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218122)\d{11}$/g }],
  },
  {
    bankCode: '01002200',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215122)\d{11}$/g }],
  },
  {
    bankCode: '01002400',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215024)\d{11}$/g }],
  },
  {
    bankCode: '01002400',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215124)\d{11}$/g }],
  },
  {
    bankCode: '01002400',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218824)\d{11}$/g }],
  },
  {
    bankCode: '01002400',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218124)\d{11}$/g }],
  },
  {
    bankCode: '01002400',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510024)\d{11}$/g }],
  },
  {
    bankCode: '01002600',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215026)\d{11}$/g }],
  },
  {
    bankCode: '01002600',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215126)\d{11}$/g }],
  },
  {
    bankCode: '01002600',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218826)\d{11}$/g }],
  },
  {
    bankCode: '01002600',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510026)\d{11}$/g }],
  },
  {
    bankCode: '01002600',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218126)\d{11}$/g }],
  },
  {
    bankCode: '01002900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215029)\d{11}$/g }],
  },
  {
    bankCode: '01002900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218129)\d{11}$/g }],
  },
  {
    bankCode: '01002900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218829)\d{11}$/g }],
  },
  {
    bankCode: '01002900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215129)\d{11}$/g }],
  },
  {
    bankCode: '01002900',
    bankName: '邮政银行',
    patterns: [{ reg: /^(95510029)\d{11}$/g }],
  },
  {
    bankCode: '01003000',
    bankName: '邮政银行',
    patterns: [{ reg: /^(62215030)\d{11}$/g }],
  },
  {
    bankCode: '01003000',
    bankName: '邮政银行',
    patterns: [{ reg: /^(62215130)\d{11}$/g }],
  },
  {
    bankCode: '01003000',
    bankName: '邮政银行',
    patterns: [{ reg: /^(62218130)\d{11}$/g }],
  },
  {
    bankCode: '01003000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218830)\d{11}$/g }],
  },
  {
    bankCode: '01003000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510030)\d{11}$/g }],
  },
  {
    bankCode: '01003300',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215033)\d{11}$/g }],
  },
  {
    bankCode: '01003300',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215133)\d{11}$/g }],
  },
  {
    bankCode: '01003300',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218833)\d{11}$/g }],
  },
  {
    bankCode: '01003300',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510033)\d{11}$/g }],
  },
  {
    bankCode: '01003300',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218133)\d{11}$/g }],
  },
  {
    bankCode: '01003600',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215036)\d{11}$/g }],
  },
  {
    bankCode: '01003600',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215136)\d{11}$/g }],
  },
  {
    bankCode: '01003600',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218836)\d{11}$/g }],
  },
  {
    bankCode: '01003600',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218136)\d{11}$/g }],
  },
  {
    bankCode: '01003600',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510036)\d{11}$/g }],
  },
  {
    bankCode: '01003900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215139)\d{11}$/g }],
  },
  {
    bankCode: '01003900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218139)\d{11}$/g }],
  },
  {
    bankCode: '01003900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218839)\d{11}$/g }],
  },
  {
    bankCode: '01003900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510039)\d{11}$/g }],
  },
  {
    bankCode: '01003900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215039)\d{11}$/g }],
  },
  {
    bankCode: '01004200',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215042)\d{11}$/g }],
  },
  {
    bankCode: '01004200',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218142)\d{11}$/g }],
  },
  {
    bankCode: '01004200',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218842)\d{11}$/g }],
  },
  {
    bankCode: '01004200',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510042)\d{11}$/g }],
  },
  {
    bankCode: '01004200',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215142)\d{11}$/g }],
  },
  {
    bankCode: '01004500',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215045)\d{11}$/g }],
  },
  {
    bankCode: '01004500',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218145)\d{11}$/g }],
  },
  {
    bankCode: '01004500',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510045)\d{11}$/g }],
  },
  {
    bankCode: '01004500',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215145)\d{11}$/g }],
  },
  {
    bankCode: '01004500',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218845)\d{11}$/g }],
  },
  {
    bankCode: '01004900',
    bankName: '邮储银行河南分行',
    patterns: [{ reg: /^(62215049)\d{11}$/g }],
  },
  {
    bankCode: '01004900',
    bankName: '邮储银行河南分行',
    patterns: [{ reg: /^(62215050)\d{11}$/g }],
  },
  {
    bankCode: '01004900',
    bankName: '邮储银行河南分行',
    patterns: [{ reg: /^(62218849)\d{11}$/g }],
  },
  {
    bankCode: '01004900',
    bankName: '邮储银行河南分行',
    patterns: [{ reg: /^(62218851)\d{11}$/g }],
  },
  {
    bankCode: '01004900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215149)\d{11}$/g }],
  },
  {
    bankCode: '01004900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218149)\d{11}$/g }],
  },
  {
    bankCode: '01004900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510049)\d{11}$/g }],
  },
  {
    bankCode: '01004900',
    bankName: '邮储银行河南分行',
    patterns: [{ reg: /^(62218850)\d{11}$/g }],
  },
  {
    bankCode: '01004900',
    bankName: '邮储银行河南分行',
    patterns: [{ reg: /^(62215051)\d{11}$/g }],
  },
  {
    bankCode: '01005200',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215052)\d{11}$/g }],
  },
  {
    bankCode: '01005200',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218152)\d{11}$/g }],
  },
  {
    bankCode: '01005200',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218852)\d{11}$/g }],
  },
  {
    bankCode: '01005200',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510052)\d{11}$/g }],
  },
  {
    bankCode: '01005200',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215152)\d{11}$/g }],
  },
  {
    bankCode: '01005500',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215055)\d{11}$/g }],
  },
  {
    bankCode: '01005500',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218155)\d{11}$/g }],
  },
  {
    bankCode: '01005500',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218855)\d{11}$/g }],
  },
  {
    bankCode: '01005500',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510055)\d{11}$/g }],
  },
  {
    bankCode: '01005500',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215155)\d{11}$/g }],
  },
  {
    bankCode: '01005800',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215058)\d{11}$/g }],
  },
  {
    bankCode: '01005800',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215158)\d{11}$/g }],
  },
  {
    bankCode: '01005800',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218158)\d{11}$/g }],
  },
  {
    bankCode: '01005800',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510058)\d{11}$/g }],
  },
  {
    bankCode: '01005800',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218858)\d{11}$/g }],
  },
  {
    bankCode: '01006100',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215061)\d{11}$/g }],
  },
  {
    bankCode: '01006100',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215161)\d{11}$/g }],
  },
  {
    bankCode: '01006100',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218161)\d{11}$/g }],
  },
  {
    bankCode: '01006100',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218861)\d{11}$/g }],
  },
  {
    bankCode: '01006100',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510061)\d{11}$/g }],
  },
  {
    bankCode: '01006400',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215164)\d{11}$/g }],
  },
  {
    bankCode: '01006400',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218164)\d{11}$/g }],
  },
  {
    bankCode: '01006400',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218864)\d{11}$/g }],
  },
  {
    bankCode: '01006400',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510064)\d{11}$/g }],
  },
  {
    bankCode: '01006400',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215064)\d{11}$/g }],
  },
  {
    bankCode: '01006500',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215065)\d{11}$/g }],
  },
  {
    bankCode: '01006500',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218165)\d{11}$/g }],
  },
  {
    bankCode: '01006500',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510065)\d{11}$/g }],
  },
  {
    bankCode: '01006500',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218865)\d{11}$/g }],
  },
  {
    bankCode: '01006500',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215165)\d{11}$/g }],
  },
  {
    bankCode: '01006530',
    bankName: '邮储银行',
    patterns: [{ reg: /^(622150653)\d{10}$/g }],
  },
  {
    bankCode: '01006530',
    bankName: '邮储银行',
    patterns: [{ reg: /^(622151653)\d{10}$/g }],
  },
  {
    bankCode: '01006530',
    bankName: '邮储银行',
    patterns: [{ reg: /^(622181653)\d{10}$/g }],
  },
  {
    bankCode: '01006530',
    bankName: '邮储银行',
    patterns: [{ reg: /^(622188653)\d{10}$/g }],
  },
  {
    bankCode: '01006530',
    bankName: '邮储银行',
    patterns: [{ reg: /^(955100653)\d{10}$/g }],
  },
  {
    bankCode: '01007000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215070)\d{11}$/g }],
  },
  {
    bankCode: '01007000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215170)\d{11}$/g }],
  },
  {
    bankCode: '01007000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218170)\d{11}$/g }],
  },
  {
    bankCode: '01007000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510070)\d{11}$/g }],
  },
  {
    bankCode: '01007000',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218870)\d{11}$/g }],
  },
  {
    bankCode: '01007300',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215073)\d{11}$/g }],
  },
  {
    bankCode: '01007300',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218173)\d{11}$/g }],
  },
  {
    bankCode: '01007300',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218873)\d{11}$/g }],
  },
  {
    bankCode: '01007300',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510073)\d{11}$/g }],
  },
  {
    bankCode: '01007300',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215173)\d{11}$/g }],
  },
  {
    bankCode: '01007700',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215077)\d{11}$/g }],
  },
  {
    bankCode: '01007700',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215177)\d{11}$/g }],
  },
  {
    bankCode: '01007700',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510077)\d{11}$/g }],
  },
  {
    bankCode: '01007700',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218177)\d{11}$/g }],
  },
  {
    bankCode: '01007700',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218877)\d{11}$/g }],
  },
  {
    bankCode: '01007900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215079)\d{11}$/g }],
  },
  {
    bankCode: '01007900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215179)\d{11}$/g }],
  },
  {
    bankCode: '01007900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218179)\d{11}$/g }],
  },
  {
    bankCode: '01007900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218879)\d{11}$/g }],
  },
  {
    bankCode: '01007900',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510079)\d{11}$/g }],
  },
  {
    bankCode: '01008200',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215082)\d{11}$/g }],
  },
  {
    bankCode: '01008200',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215182)\d{11}$/g }],
  },
  {
    bankCode: '01008200',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218882)\d{11}$/g }],
  },
  {
    bankCode: '01008200',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510082)\d{11}$/g }],
  },
  {
    bankCode: '01008200',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218182)\d{11}$/g }],
  },
  {
    bankCode: '01008500',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215085)\d{11}$/g }],
  },
  {
    bankCode: '01008500',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215185)\d{11}$/g }],
  },
  {
    bankCode: '01008500',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218185)\d{11}$/g }],
  },
  {
    bankCode: '01008500',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510085)\d{11}$/g }],
  },
  {
    bankCode: '01008500',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218885)\d{11}$/g }],
  },
  {
    bankCode: '01008700',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215087)\d{11}$/g }],
  },
  {
    bankCode: '01008700',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215187)\d{11}$/g }],
  },
  {
    bankCode: '01008700',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218187)\d{11}$/g }],
  },
  {
    bankCode: '01008700',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218887)\d{11}$/g }],
  },
  {
    bankCode: '01008700',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510087)\d{11}$/g }],
  },
  {
    bankCode: '01008800',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215088)\d{11}$/g }],
  },
  {
    bankCode: '01008800',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218188)\d{11}$/g }],
  },
  {
    bankCode: '01008800',
    bankName: '邮储银行',
    patterns: [{ reg: /^(95510088)\d{11}$/g }],
  },
  {
    bankCode: '01008800',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62218888)\d{11}$/g }],
  },
  {
    bankCode: '01008800',
    bankName: '邮储银行',
    patterns: [{ reg: /^(62215188)\d{11}$/g }],
  },
  {
    bankCode: '01009999',
    bankName: '邮政储蓄银行',
    patterns: [{ reg: /^(621098)\d{13}$/g }],
  },
  {
    bankCode: '01009999',
    bankName: '邮政储蓄银行',
    patterns: [{ reg: /^(621599)\d{13}$/g }],
  },
  {
    bankCode: '01009999',
    bankName: '邮政储蓄银行',
    patterns: [{ reg: /^(620529)\d{13}$/g }],
  },
  {
    bankCode: '01009999',
    bankName: '邮政储蓄银行',
    patterns: [{ reg: /^(621674)\d{13}$/g }],
  },
  {
    bankCode: '01009999',
    bankName: '邮政储蓄银行',
    patterns: [{ reg: /^(623218)\d{13}$/g }],
  },
  {
    bankCode: '01009999',
    bankName: '邮政储蓄银行',
    patterns: [{ reg: /^(623219)\d{13}$/g }],
  },
  {
    bankCode: '01009999',
    bankName: '邮政储蓄银行',
    patterns: [{ reg: /^(623686)\d{13}$/g }],
  },
  {
    bankCode: '01009999',
    bankName: '邮政储蓄银行',
    patterns: [{ reg: /^(623698)\d{13}$/g }],
  },
  {
    bankCode: '01009999',
    bankName: '邮政储蓄银行',
    patterns: [{ reg: /^(623699)\d{13}$/g }],
  },
  {
    bankCode: '01009999',
    bankName: '邮政储蓄银行',
    patterns: [{ reg: /^(622187)\d{13}$/g }],
  },
  {
    bankCode: '01009999',
    bankName: '邮政储蓄银行',
    patterns: [{ reg: /^(622189)\d{13}$/g }],
  },
  {
    bankCode: '01009999',
    bankName: '邮政储蓄银行',
    patterns: [{ reg: /^(622180)\d{13}$/g }],
  },
  {
    bankCode: '01009999',
    bankName: '邮政储蓄银行',
    patterns: [{ reg: /^(622182)\d{13}$/g }],
  },
  {
    bankCode: '01009999',
    bankName: '邮政储蓄银行',
    patterns: [{ reg: /^(621582)\d{13}$/g }],
  },
  {
    bankCode: '01009999',
    bankName: '邮政储蓄银行',
    patterns: [{ reg: /^(623676)\d{13}$/g }],
  },
  {
    bankCode: '01009999',
    bankName: '邮政储蓄银行',
    patterns: [{ reg: /^(623677)\d{13}$/g }],
  },
  {
    bankCode: '01009999',
    bankName: '邮政储蓄银行',
    patterns: [{ reg: /^(621622)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(524047)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(524091)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(525498)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(45806)\d{11}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(53098)\d{11}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(370247)\d{9}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(370249)\d{9}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(402791)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(427010)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(427018)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(427020)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(427028)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(427029)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(427030)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(427039)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(427062)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620200)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620402)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620403)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620405)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620407)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622201)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622202)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622203)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622211)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622212)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622214)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622215)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622220)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622224)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622225)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622229)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622232)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622233)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622235)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622237)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622238)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622240)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622245)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620409)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620410)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620411)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620412)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620502)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620504)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620505)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620508)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620509)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620510)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620512)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620602)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620604)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620605)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620606)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620607)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620609)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620610)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620611)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620612)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620613)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620704)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620706)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620707)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620708)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620709)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620711)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620712)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620713)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620714)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620802)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620803)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620805)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620806)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620807)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620808)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620902)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620905)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620906)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620907)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620908)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620909)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620912)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620913)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620914)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621001)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621103)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621104)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621105)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621106)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621107)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621109)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621110)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621115)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621117)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621202)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621204)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621205)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621206)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621207)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621208)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(438125)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(438126)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(451804)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(451810)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(451811)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(458071)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(489734)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(489736)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(510529)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(530970)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(530990)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(558360)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622402)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622404)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622405)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622408)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622502)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622505)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622507)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622508)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622510)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622513)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622515)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622516)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622517)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622902)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622903)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622904)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622905)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623002)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623003)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(6253098)\d{9}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623004)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623007)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623008)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623010)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623011)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623012)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623015)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623016)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623017)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623100)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623301)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623500)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623602)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623700)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623803)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623901)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(624000)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(624301)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(624402)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(628286)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621209)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621210)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621211)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621302)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621303)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621304)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621305)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621306)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621307)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621308)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621310)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621311)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621313)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621315)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621316)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621402)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621404)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621405)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621406)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621407)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621408)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621410)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621501)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621502)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621503)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621504)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621508)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621510)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621511)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621602)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621603)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621605)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621606)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621607)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621608)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621609)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621610)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621612)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621613)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621614)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621615)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621616)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621703)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621704)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621705)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621706)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621707)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621709)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621710)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621711)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621712)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621713)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621715)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621716)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621717)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621718)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621803)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621804)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621807)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621810)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621813)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621814)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621817)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621901)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621903)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621904)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621905)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621906)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621909)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621910)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621911)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621913)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621914)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621915)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622002)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622004)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622005)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622006)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622007)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622008)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622011)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622012)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622013)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622014)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622015)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622016)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622019)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622020)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622102)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622103)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622104)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622107)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622110)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622111)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622604)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622605)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622606)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622608)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620058)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622703)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622704)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622705)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622706)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622710)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622714)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622715)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622716)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622720)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622806)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622303)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622304)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622306)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622307)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622308)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622313)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622314)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622316)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622317)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622320)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955828)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955830)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955831)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955832)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955833)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955834)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955835)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955837)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955838)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955839)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955840)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955841)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955842)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955844)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955845)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955846)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955847)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955848)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955850)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955852)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955853)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955854)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955855)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955856)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955857)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955860)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955861)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955862)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955863)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955864)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955865)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955867)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955868)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955869)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955871)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955872)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955873)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955875)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955876)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955877)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955878)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955879)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955882)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955883)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955884)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955885)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955886)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955887)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955889)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955890)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955892)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955893)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955894)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955895)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955897)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955898)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955899)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621225)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621226)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621227)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(62451811)\d{8}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(9558)\d{15}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622206)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(900010)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(513685)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(458441)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(62451804)\d{8}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(62451810)\d{8}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(62458071)\d{8}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955800)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955801)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955803)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955804)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955805)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955807)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955808)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955810)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955811)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955812)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955813)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955816)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955817)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955819)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955820)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955821)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955823)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955824)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955826)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955827)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(544210)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(548943)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(621558)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(621559)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621281)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622246)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(620086)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(623062)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(622236)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(625330)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(625331)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(625332)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621721)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621722)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621723)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(621618)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(356879)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(356880)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(356882)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(524374)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(528856)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(550213)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(374738)\d{9}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(374739)\d{9}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620302)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622200)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622213)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622230)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622239)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621116)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621908)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622602)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622610)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622504)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955809)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955818)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(526836)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(360883)\d{8}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(360884)\d{8}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(622597)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(622599)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(625899)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(370246)\d{9}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(427038)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(625865)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(625866)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(625708)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620404)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622210)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622231)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621102)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621111)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622009)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622018)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622114)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622607)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622315)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623202)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(624200)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(628288)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(625160)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(625161)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(625162)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955802)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955814)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955825)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955849)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955859)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955870)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955880)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955891)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(543098)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(370267)\d{9}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(625650)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(622910)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(622911)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(622913)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(625858)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(625859)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(625860)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(621218)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(621475)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(621476)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(623229)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(62844801)\d{8}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(622299)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(625651)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(625247)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620408)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620503)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620511)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620608)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620614)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620710)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620804)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620904)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620910)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621108)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621203)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(489735)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(548259)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622403)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622509)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622514)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(6245806)\d{9}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623006)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623014)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(623400)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(624100)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621309)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621317)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621409)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621506)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621604)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621611)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621617)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621708)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621714)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621805)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621818)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621907)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621912)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622003)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622010)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622017)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622105)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622709)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622302)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622305)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622309)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955829)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955836)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955843)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955851)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955858)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955866)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955874)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955881)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955888)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955896)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(621288)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620516)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955806)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955815)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(955822)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(625249)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(625250)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(370248)\d{9}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(427019)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(427064)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(620406)\d{12}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622208)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622223)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(622234)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(356881)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(621670)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(625709)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(622912)\d{10}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '工商银行',
    patterns: [{ reg: /^(900000)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(623260)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(623271)\d{13}$/g }],
  },
  {
    bankCode: '01020000',
    bankName: '中国工商银行',
    patterns: [{ reg: /^(623272)\d{13}$/g }],
  },
  {
    bankCode: '01020056',
    bankName: '工行布鲁塞尔',
    patterns: [{ reg: /^(625929)\d{10}$/g }],
  },
  {
    bankCode: '01020056',
    bankName: '中国工商银行布鲁塞尔分行',
    patterns: [{ reg: /^(621376)\d{10}$/g }],
  },
  {
    bankCode: '01020056',
    bankName: '中国工商银行布鲁塞尔分行',
    patterns: [{ reg: /^(620142)\d{10}$/g }],
  },
  {
    bankCode: '01020056',
    bankName: '中国工商银行布鲁塞尔分行',
    patterns: [{ reg: /^(620054)\d{10}$/g }],
  },
  {
    bankCode: '01020076',
    bankName: '中国工商银行（巴西）',
    patterns: [{ reg: /^(625927)\d{10}$/g }],
  },
  {
    bankCode: '01020076',
    bankName: '中国工商银行（巴西）',
    patterns: [{ reg: /^(621423)\d{10}$/g }],
  },
  {
    bankCode: '01020116',
    bankName: '中国工商银行金边分行',
    patterns: [{ reg: /^(621428)\d{10}$/g }],
  },
  {
    bankCode: '01020116',
    bankName: '中国工商银行金边分行',
    patterns: [{ reg: /^(625939)\d{10}$/g }],
  },
  {
    bankCode: '01020116',
    bankName: '中国工商银行金边分行',
    patterns: [{ reg: /^(621434)\d{10}$/g }],
  },
  {
    bankCode: '01020116',
    bankName: '中国工商银行金边分行',
    patterns: [{ reg: /^(625987)\d{10}$/g }],
  },
  {
    bankCode: '01020124',
    bankName: '工行加拿大',
    patterns: [{ reg: /^(625930)\d{10}$/g }],
  },
  {
    bankCode: '01020124',
    bankName: '中国工商银行加拿大分行',
    patterns: [{ reg: /^(621761)\d{10}$/g }],
  },
  {
    bankCode: '01020124',
    bankName: '中国工商银行加拿大分行',
    patterns: [{ reg: /^(621749)\d{10}$/g }],
  },
  {
    bankCode: '01020124',
    bankName: '中国工商银行加拿大分行',
    patterns: [{ reg: /^(620184)\d{10}$/g }],
  },
  {
    bankCode: '01020124',
    bankName: '中国工商银行加拿大分行',
    patterns: [{ reg: /^(623321)\d{10}$/g }],
  },
  {
    bankCode: '01020250',
    bankName: '中国工商银行巴黎分行',
    patterns: [{ reg: /^(621300)\d{10}$/g }],
  },
  {
    bankCode: '01020250',
    bankName: '中国工商银行巴黎分行',
    patterns: [{ reg: /^(621378)\d{10}$/g }],
  },
  {
    bankCode: '01020250',
    bankName: '中国工商银行巴黎分行',
    patterns: [{ reg: /^(625114)\d{10}$/g }],
  },
  {
    bankCode: '01020276',
    bankName: '中国工商银行法兰克福分行',
    patterns: [{ reg: /^(621720)\d{13}$/g }],
  },
  {
    bankCode: '01020276',
    bankName: '中国工商银行法兰克福分行',
    patterns: [{ reg: /^(622159)\d{10}$/g }],
  },
  {
    bankCode: '01020276',
    bankName: '中国工商银行法兰克福分行',
    patterns: [{ reg: /^(625021)\d{10}$/g }],
  },
  {
    bankCode: '01020276',
    bankName: '中国工商银行法兰克福分行',
    patterns: [{ reg: /^(625022)\d{10}$/g }],
  },
  {
    bankCode: '01020276',
    bankName: '工银法兰克福',
    patterns: [{ reg: /^(625932)\d{10}$/g }],
  },
  {
    bankCode: '01020276',
    bankName: '中国工商银行法兰克福分行',
    patterns: [{ reg: /^(621379)\d{13}$/g }],
  },
  {
    bankCode: '01020276',
    bankName: '中国工商银行法兰克福分行',
    patterns: [{ reg: /^(620114)\d{13}$/g }],
  },
  {
    bankCode: '01020276',
    bankName: '中国工商银行法兰克福分行',
    patterns: [{ reg: /^(620146)\d{13}$/g }],
  },
  {
    bankCode: '01020344',
    bankName: '中国工商银行(亚洲)有限公司',
    patterns: [{ reg: /^(622944)\d{10}$/g }],
  },
  {
    bankCode: '01020344',
    bankName: '中国工商银行(亚洲)有限公司',
    patterns: [{ reg: /^(625915)\d{10}$/g }],
  },
  {
    bankCode: '01020344',
    bankName: '中国工商银行(亚洲)有限公司',
    patterns: [{ reg: /^(622889)\d{10}$/g }],
  },
  {
    bankCode: '01020344',
    bankName: '中国工商银行(亚洲)有限公司',
    patterns: [{ reg: /^(625916)\d{10}$/g }],
  },
  {
    bankCode: '01020344',
    bankName: '中国工商银行(亚洲)有限公司',
    patterns: [{ reg: /^(625941)\d{10}$/g }],
  },
  {
    bankCode: '01020344',
    bankName: '中国工商银行(亚洲)有限公司',
    patterns: [{ reg: /^(625801)\d{10}$/g }],
  },
  {
    bankCode: '01020344',
    bankName: '中国工商银行(亚洲)有限公司',
    patterns: [{ reg: /^(625900)\d{10}$/g }],
  },
  {
    bankCode: '01020344',
    bankName: '中国工商银行(亚洲)有限公司',
    patterns: [{ reg: /^(622949)\d{10}$/g }],
  },
  {
    bankCode: '01020344',
    bankName: '中国工商银行(亚洲)有限公司',
    patterns: [{ reg: /^(625115)\d{10}$/g }],
  },
  {
    bankCode: '01020360',
    bankName: '中国工商银行(印尼)',
    patterns: [{ reg: /^(621240)\d{13}$/g }],
  },
  {
    bankCode: '01020360',
    bankName: '中国工商银行(印尼)',
    patterns: [{ reg: /^(622171)\d{10}$/g }],
  },
  {
    bankCode: '01020360',
    bankName: '中国工商银行印尼分行',
    patterns: [{ reg: /^(621724)\d{13}$/g }],
  },
  {
    bankCode: '01020360',
    bankName: '工银印尼',
    patterns: [{ reg: /^(625931)\d{10}$/g }],
  },
  {
    bankCode: '01020360',
    bankName: '中国工商银行（印度尼西亚）',
    patterns: [{ reg: /^(621762)\d{13}$/g }],
  },
  {
    bankCode: '01020360',
    bankName: '中国工商银行印尼分行',
    patterns: [{ reg: /^(625918)\d{10}$/g }],
  },
  {
    bankCode: '01020380',
    bankName: '工行米兰',
    patterns: [{ reg: /^(625113)\d{10}$/g }],
  },
  {
    bankCode: '01020380',
    bankName: '中国工商银行米兰分行',
    patterns: [{ reg: /^(621371)\d{10}$/g }],
  },
  {
    bankCode: '01020380',
    bankName: '中国工商银行米兰分行',
    patterns: [{ reg: /^(620143)\d{10}$/g }],
  },
  {
    bankCode: '01020380',
    bankName: '中国工商银行米兰分行',
    patterns: [{ reg: /^(620149)\d{10}$/g }],
  },
  {
    bankCode: '01020380',
    bankName: '中国工商银行米兰分行',
    patterns: [{ reg: /^(62137310)\d{8}$/g }],
  },
  {
    bankCode: '01020380',
    bankName: '中国工商银行米兰分行',
    patterns: [{ reg: /^(62137320)\d{8}$/g }],
  },
  {
    bankCode: '01020380',
    bankName: '中国工商银行米兰分行',
    patterns: [{ reg: /^(62592310)\d{8}$/g }],
  },
  {
    bankCode: '01020380',
    bankName: '中国工商银行米兰分行',
    patterns: [{ reg: /^(62592320)\d{8}$/g }],
  },
  {
    bankCode: '01020380',
    bankName: '中国工商银行米兰分行',
    patterns: [{ reg: /^(62592340)\d{8}$/g }],
  },
  {
    bankCode: '01020380',
    bankName: '中国工商银行米兰分行',
    patterns: [{ reg: /^(62013101)\d{8}$/g }],
  },
  {
    bankCode: '01020380',
    bankName: '中国工商银行米兰分行',
    patterns: [{ reg: /^(62013102)\d{8}$/g }],
  },
  {
    bankCode: '01020392',
    bankName: '工行东京分行',
    patterns: [{ reg: /^(621730)\d{10}$/g }],
  },
  {
    bankCode: '01020398',
    bankName: '工行阿拉木图',
    patterns: [{ reg: /^(625928)\d{10}$/g }],
  },
  {
    bankCode: '01020398',
    bankName: '中国工商银行阿拉木图子行',
    patterns: [{ reg: /^(621375)\d{13}$/g }],
  },
  {
    bankCode: '01020398',
    bankName: '中国工商银行阿拉木图子行',
    patterns: [{ reg: /^(620187)\d{13}$/g }],
  },
  {
    bankCode: '01020398',
    bankName: '中国工商银行阿拉木图子行',
    patterns: [{ reg: /^(625914)\d{10}$/g }],
  },
  {
    bankCode: '01020398',
    bankName: '中国工商银行阿拉木图子行',
    patterns: [{ reg: /^(621414)\d{13}$/g }],
  },
  {
    bankCode: '01020410',
    bankName: '工行首尔',
    patterns: [{ reg: /^(621734)\d{10}$/g }],
  },
  {
    bankCode: '01020418',
    bankName: '中国工商银行万象分行',
    patterns: [{ reg: /^(621433)\d{10}$/g }],
  },
  {
    bankCode: '01020418',
    bankName: '中国工商银行万象分行',
    patterns: [{ reg: /^(625986)\d{10}$/g }],
  },
  {
    bankCode: '01020442',
    bankName: '中国工商银行卢森堡分行',
    patterns: [{ reg: /^(625925)\d{10}$/g }],
  },
  {
    bankCode: '01020442',
    bankName: '中国工商银行卢森堡分行',
    patterns: [{ reg: /^(621370)\d{10}$/g }],
  },
  {
    bankCode: '01020446',
    bankName: '中国工商银行澳门分行',
    patterns: [{ reg: /^(622927)\d{13}$/g }],
  },
  {
    bankCode: '01020446',
    bankName: '中国工商银行澳门分行',
    patterns: [{ reg: /^(622928)\d{13}$/g }],
  },
  {
    bankCode: '01020446',
    bankName: '中国工商银行澳门分行',
    patterns: [{ reg: /^(622929)\d{13}$/g }],
  },
  {
    bankCode: '01020446',
    bankName: '中国工商银行澳门分行',
    patterns: [{ reg: /^(622930)\d{13}$/g }],
  },
  {
    bankCode: '01020446',
    bankName: '中国工商银行澳门分行',
    patterns: [{ reg: /^(622931)\d{13}$/g }],
  },
  {
    bankCode: '01020446',
    bankName: '中国工商银行（澳门）',
    patterns: [{ reg: /^(621733)\d{13}$/g }],
  },
  {
    bankCode: '01020446',
    bankName: '中国工商银行（澳门）',
    patterns: [{ reg: /^(621732)\d{13}$/g }],
  },
  {
    bankCode: '01020446',
    bankName: '中国工商银行澳门分行',
    patterns: [{ reg: /^(620124)\d{10}$/g }],
  },
  {
    bankCode: '01020446',
    bankName: '中国工商银行澳门分行',
    patterns: [{ reg: /^(620183)\d{10}$/g }],
  },
  {
    bankCode: '01020446',
    bankName: '中国工商银行澳门分行',
    patterns: [{ reg: /^(625116)\d{10}$/g }],
  },
  {
    bankCode: '01020446',
    bankName: '中国工商银行澳门分行',
    patterns: [{ reg: /^(620561)\d{10}$/g }],
  },
  {
    bankCode: '01020446',
    bankName: '中国工商银行澳门分行',
    patterns: [{ reg: /^(622227)\d{10}$/g }],
  },
  {
    bankCode: '01020446',
    bankName: '中国工商银行澳门分行',
    patterns: [{ reg: /^(622926)\d{13}$/g }],
  },
  {
    bankCode: '01020458',
    bankName: '工行马来西亚',
    patterns: [{ reg: /^(625921)\d{10}$/g }],
  },
  {
    bankCode: '01020458',
    bankName: '工银马来西亚',
    patterns: [{ reg: /^(621764)\d{10}$/g }],
  },
  {
    bankCode: '01020458',
    bankName: '工银马来西亚',
    patterns: [{ reg: /^(62176410)\d{8}$/g }],
  },
  {
    bankCode: '01020458',
    bankName: '工银马来西亚',
    patterns: [{ reg: /^(62176420)\d{8}$/g }],
  },
  {
    bankCode: '01020458',
    bankName: '工银马来西亚',
    patterns: [{ reg: /^(62592110)\d{8}$/g }],
  },
  {
    bankCode: '01020458',
    bankName: '工银马来西亚',
    patterns: [{ reg: /^(62592120)\d{8}$/g }],
  },
  {
    bankCode: '01020458',
    bankName: '工银马来西亚',
    patterns: [{ reg: /^(62592140)\d{8}$/g }],
  },
  {
    bankCode: '01020528',
    bankName: '工行阿姆斯特丹',
    patterns: [{ reg: /^(625926)\d{10}$/g }],
  },
  {
    bankCode: '01020528',
    bankName: '中国工商银行阿姆斯特丹',
    patterns: [{ reg: /^(621372)\d{13}$/g }],
  },
  {
    bankCode: '01020554',
    bankName: '工银新西兰',
    patterns: [{ reg: /^(623034)\d{10}$/g }],
  },
  {
    bankCode: '01020554',
    bankName: '工银新西兰',
    patterns: [{ reg: /^(625110)\d{10}$/g }],
  },
  {
    bankCode: '01020586',
    bankName: '中国工商银行卡拉奇分行',
    patterns: [{ reg: /^(621464)\d{10}$/g }],
  },
  {
    bankCode: '01020586',
    bankName: '中国工商银行卡拉奇分行',
    patterns: [{ reg: /^(625942)\d{10}$/g }],
  },
  {
    bankCode: '01020586',
    bankName: '中国工商银行卡拉奇分行',
    patterns: [{ reg: /^(62594250)\d{8}$/g }],
  },
  {
    bankCode: '01020586',
    bankName: '中国工商银行卡拉奇分行',
    patterns: [{ reg: /^(62594260)\d{8}$/g }],
  },
  {
    bankCode: '01020586',
    bankName: '中国工商银行卡拉奇分行',
    patterns: [{ reg: /^(62594270)\d{8}$/g }],
  },
  {
    bankCode: '01020702',
    bankName: '中国工商银行新加坡分行',
    patterns: [{ reg: /^(622158)\d{10}$/g }],
  },
  {
    bankCode: '01020702',
    bankName: '中国工商银行新加坡分行',
    patterns: [{ reg: /^(621765)\d{10}$/g }],
  },
  {
    bankCode: '01020702',
    bankName: '中国工商银行新加坡分行',
    patterns: [{ reg: /^(620094)\d{10}$/g }],
  },
  {
    bankCode: '01020702',
    bankName: '中国工商银行新加坡分行',
    patterns: [{ reg: /^(621719)\d{10}$/g }],
  },
  {
    bankCode: '01020702',
    bankName: '中国工商银行新加坡分行',
    patterns: [{ reg: /^(621719)\d{13}$/g }],
  },
  {
    bankCode: '01020702',
    bankName: '中国工商银行新加坡分行',
    patterns: [{ reg: /^(625917)\d{10}$/g }],
  },
  {
    bankCode: '01020702',
    bankName: '中国工商银行新加坡分行',
    patterns: [{ reg: /^(620186)\d{10}$/g }],
  },
  {
    bankCode: '01020704',
    bankName: '工银河内',
    patterns: [{ reg: /^(625934)\d{10}$/g }],
  },
  {
    bankCode: '01020704',
    bankName: '工银河内',
    patterns: [{ reg: /^(621763)\d{13}$/g }],
  },
  {
    bankCode: '01020704',
    bankName: '工行河内',
    patterns: [{ reg: /^(625922)\d{10}$/g }],
  },
  {
    bankCode: '01020704',
    bankName: '工银河内',
    patterns: [{ reg: /^(621369)\d{13}$/g }],
  },
  {
    bankCode: '01020704',
    bankName: '工银河内',
    patterns: [{ reg: /^(620046)\d{13}$/g }],
  },
  {
    bankCode: '01020724',
    bankName: '中国工商银行马德里分行',
    patterns: [{ reg: /^(621750)\d{10}$/g }],
  },
  {
    bankCode: '01020724',
    bankName: '工行马德里',
    patterns: [{ reg: /^(625933)\d{10}$/g }],
  },
  {
    bankCode: '01020724',
    bankName: '中国工商银行马德里分行',
    patterns: [{ reg: /^(621377)\d{10}$/g }],
  },
  {
    bankCode: '01020724',
    bankName: '中国工商银行马德里分行',
    patterns: [{ reg: /^(620148)\d{10}$/g }],
  },
  {
    bankCode: '01020724',
    bankName: '中国工商银行马德里分行',
    patterns: [{ reg: /^(620185)\d{10}$/g }],
  },
  {
    bankCode: '01020764',
    bankName: '工银泰国',
    patterns: [{ reg: /^(621367)\d{10}$/g }],
  },
  {
    bankCode: '01020764',
    bankName: '工银泰国',
    patterns: [{ reg: /^(625920)\d{10}$/g }],
  },
  {
    bankCode: '01020826',
    bankName: '中国工商银行伦敦子行',
    patterns: [{ reg: /^(621781)\d{10}$/g }],
  },
  {
    bankCode: '01020826',
    bankName: '中国工商银行伦敦子行',
    patterns: [{ reg: /^(621731)\d{10}$/g }],
  },
  {
    bankCode: '01020826',
    bankName: '工行伦敦',
    patterns: [{ reg: /^(625924)\d{10}$/g }],
  },
  {
    bankCode: '01020840',
    bankName: 'ICBC(USA) NA',
    patterns: [{ reg: /^(6243190)\d{9}$/g }],
  },
  {
    bankCode: '01020840',
    bankName: 'ICBC(USA) NA',
    patterns: [{ reg: /^(6243191)\d{9}$/g }],
  },
  {
    bankCode: '01020840',
    bankName: 'ICBC(USA) NA',
    patterns: [{ reg: /^(6243192)\d{9}$/g }],
  },
  {
    bankCode: '01020840',
    bankName: 'ICBC(USA) NA',
    patterns: [{ reg: /^(6243193)\d{9}$/g }],
  },
  {
    bankCode: '01020840',
    bankName: 'ICBC(USA) NA',
    patterns: [{ reg: /^(62431940)\d{8}$/g }],
  },
  {
    bankCode: '01020840',
    bankName: 'ICBC(USA) NA',
    patterns: [{ reg: /^(6244220)\d{9}$/g }],
  },
  {
    bankCode: '01020840',
    bankName: 'ICBC(USA) NA',
    patterns: [{ reg: /^(6244221)\d{9}$/g }],
  },
  {
    bankCode: '01020840',
    bankName: 'ICBC(USA) NA',
    patterns: [{ reg: /^(6244222)\d{9}$/g }],
  },
  {
    bankCode: '01020840',
    bankName: 'ICBC(USA) NA',
    patterns: [{ reg: /^(6244223)\d{9}$/g }],
  },
  {
    bankCode: '01020840',
    bankName: 'ICBC(USA) NA',
    patterns: [{ reg: /^(62442240)\d{8}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(519413)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(520083)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(103)\d{16}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(53591)\d{11}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(95596)\d{14}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(95599)\d{14}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(404117)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(404118)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(404119)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(404121)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(558730)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(622824)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(622825)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(622827)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(622837)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(622840)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(622841)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(622843)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(622844)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(622846)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(622847)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(622849)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(6349102)\d{9}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(6353591)\d{9}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(622821)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(463758)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(514027)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998342)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998345)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998346)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998347)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998348)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998349)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998353)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998355)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998356)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998357)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998358)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998361)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998366)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998367)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998368)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998369)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998370)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998373)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998374)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998375)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998377)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998378)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998380)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998381)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998383)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998384)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998385)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998199)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998201)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998202)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998203)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998204)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998205)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998207)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998209)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998210)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998212)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998213)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998225)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998226)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998227)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998229)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998230)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998231)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998233)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998234)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998235)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998236)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998237)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998242)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998243)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998244)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998245)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998246)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998250)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998251)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998253)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998254)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998255)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998256)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998258)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998259)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998260)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998262)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998263)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998265)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998270)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998271)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998272)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998273)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998275)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998277)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998278)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998279)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998280)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998281)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998282)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998285)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998286)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998287)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998288)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998289)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998291)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998292)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998293)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998295)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998296)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998298)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998299)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998300)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998301)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998302)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998310)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998312)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998313)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998314)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998315)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998316)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998318)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998320)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998321)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998322)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998323)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998001)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998002)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998003)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998012)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998014)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998015)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998021)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998022)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998024)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998025)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998026)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998027)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998028)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998029)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998032)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998033)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998034)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998035)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998036)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998038)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998039)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998041)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998042)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998388)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998389)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998390)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998391)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998392)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998395)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998396)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998397)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998407)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998408)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998410)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998411)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998413)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998414)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998415)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(620059)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(621282)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998043)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998044)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998045)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998046)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998047)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998049)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998052)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998053)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998054)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998055)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998056)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998065)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998066)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998067)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998069)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998070)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998072)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998078)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998080)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998081)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998082)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998083)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998086)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998089)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998092)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998093)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998094)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998096)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998098)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998099)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998100)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998103)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998104)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998106)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998107)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998108)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998110)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998111)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998119)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998123)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998124)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998125)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998126)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998131)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998133)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998134)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998135)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998136)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998137)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998144)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998151)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998152)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998153)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998154)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998156)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998157)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998158)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998170)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998171)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998172)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998174)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998175)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998176)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998177)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998178)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998183)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998184)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998185)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998186)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998187)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998192)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998194)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998197)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998198)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998324)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998325)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998330)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998331)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998332)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998334)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998335)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998338)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998339)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998340)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998341)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998063)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998071)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998412)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(621336)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(623018)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(621619)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(625996)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(625997)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(625998)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(622828)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(622822)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(623206)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(621671)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(520082)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(49102)\d{11}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(95598)\d{14}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(622823)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(622836)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(622848)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998051)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998068)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998084)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998097)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998109)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998128)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998147)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998169)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998181)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998193)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998333)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998351)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998365)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998376)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998386)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998208)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998228)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998238)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998252)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998261)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998274)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998284)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998294)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998309)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998319)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998016)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998030)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998040)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998387)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998398)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998416)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(622839)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(623052)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(623056)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(623050)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(623053)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(552599)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(622826)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(622845)\d{13}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998239)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998247)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998257)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998264)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998276)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998283)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998290)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998297)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998311)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998317)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998006)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998023)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998031)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998037)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998394)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998409)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998417)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(95595)\d{14}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(628268)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998343)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998352)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998360)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998372)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998379)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998200)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998206)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998224)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998232)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(519412)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(95597)\d{14}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(403361)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(404120)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998050)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998064)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998073)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998085)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998095)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998105)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998112)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998132)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998138)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998155)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998173)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998182)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998188)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998328)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998337)\d{10}$/g }],
  },
  {
    bankCode: '01030000',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998048)\d{10}$/g }],
  },
  {
    bankCode: '01030001',
    bankName: '中国农业银行贷记卡',
    patterns: [{ reg: /^(622838)\d{10}$/g }],
  },
  {
    bankCode: '01030001',
    bankName: '中国农业银行贷记卡',
    patterns: [{ reg: /^(622820)\d{10}$/g }],
  },
  {
    bankCode: '01030001',
    bankName: '中国农业银行贷记卡',
    patterns: [{ reg: /^(625336)\d{10}$/g }],
  },
  {
    bankCode: '01030001',
    bankName: '中国农业银行贷记卡',
    patterns: [{ reg: /^(625826)\d{10}$/g }],
  },
  {
    bankCode: '01030001',
    bankName: '中国农业银行贷记卡',
    patterns: [{ reg: /^(625827)\d{10}$/g }],
  },
  {
    bankCode: '01030001',
    bankName: '中国农业银行贷记卡',
    patterns: [{ reg: /^(548478)\d{10}$/g }],
  },
  {
    bankCode: '01030001',
    bankName: '中国农业银行贷记卡',
    patterns: [{ reg: /^(544243)\d{10}$/g }],
  },
  {
    bankCode: '01030001',
    bankName: '中国农业银行贷记卡',
    patterns: [{ reg: /^(628269)\d{10}$/g }],
  },
  {
    bankCode: '01030001',
    bankName: '中国农业银行贷记卡',
    patterns: [{ reg: /^(625170)\d{10}$/g }],
  },
  {
    bankCode: '01030001',
    bankName: '中国农业银行贷记卡',
    patterns: [{ reg: /^(625171)\d{10}$/g }],
  },
  {
    bankCode: '01030001',
    bankName: '中国农业银行贷记卡',
    patterns: [{ reg: /^(625653)\d{10}$/g }],
  },
  {
    bankCode: '01030001',
    bankName: '中国农业银行贷记卡',
    patterns: [{ reg: /^(628346)\d{10}$/g }],
  },
  {
    bankCode: '01030001',
    bankName: '中国农业银行贷记卡',
    patterns: [{ reg: /^(625818)\d{10}$/g }],
  },
  {
    bankCode: '01030001',
    bankName: '中国农业银行贷记卡',
    patterns: [{ reg: /^(62844803)\d{8}$/g }],
  },
  {
    bankCode: '01030001',
    bankName: '中国农业银行贷记卡',
    patterns: [{ reg: /^(622830)\d{10}$/g }],
  },
  {
    bankCode: '01030001',
    bankName: '中国农业银行贷记卡',
    patterns: [{ reg: /^(625999)\d{10}$/g }],
  },
  {
    bankCode: '01033320',
    bankName: '宁波市农业银行',
    patterns: [{ reg: /^(620501)\d{13}$/g }],
  },
  {
    bankCode: '01033930',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998007)\d{10}$/g }],
  },
  {
    bankCode: '01035210',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998005)\d{10}$/g }],
  },
  {
    bankCode: '01035210',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998074)\d{10}$/g }],
  },
  {
    bankCode: '01035210',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998075)\d{10}$/g }],
  },
  {
    bankCode: '01035210',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998076)\d{10}$/g }],
  },
  {
    bankCode: '01035210',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998077)\d{10}$/g }],
  },
  {
    bankCode: '01035210',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998079)\d{10}$/g }],
  },
  {
    bankCode: '01035210',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998161)\d{10}$/g }],
  },
  {
    bankCode: '01035210',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998163)\d{10}$/g }],
  },
  {
    bankCode: '01035210',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998240)\d{10}$/g }],
  },
  {
    bankCode: '01035210',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998241)\d{10}$/g }],
  },
  {
    bankCode: '01035210',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998326)\d{10}$/g }],
  },
  {
    bankCode: '01035210',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998327)\d{10}$/g }],
  },
  {
    bankCode: '01035210',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998382)\d{10}$/g }],
  },
  {
    bankCode: '01035210',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998160)\d{10}$/g }],
  },
  {
    bankCode: '01035210',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998162)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998010)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998011)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998013)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998060)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998061)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998113)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998114)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998115)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998117)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998118)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998140)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998141)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998142)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998143)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998145)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998350)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998009)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998116)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998146)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998008)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998062)\d{10}$/g }],
  },
  {
    bankCode: '01035800',
    bankName: '农业银行',
    patterns: [{ reg: /^(955998139)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(514958)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(518378)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(518474)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(518475)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(518476)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(524864)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(525746)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(356833)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(409665)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(409666)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(409667)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(409668)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(409669)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(409672)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(438088)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(558868)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(456351)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(512315)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(512411)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(552742)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(553131)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(622752)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(622753)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(622755)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(622756)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(622758)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(622759)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(622760)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(622761)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(622763)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621256)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621212)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621660)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621661)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621662)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621663)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621666)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621668)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621669)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(620040)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(622765)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(622754)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(628388)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(377677)\d{9}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621569)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621297)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(620061)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621725)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(625905)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(625906)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(625908)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(625910)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(620514)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621331)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621332)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621333)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621757)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621758)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621785)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621786)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621787)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621788)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621789)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(622788)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621283)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(558869)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621620)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(625333)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(628312)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(628313)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621672)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(623208)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(512412)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(547766)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(625338)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(518379)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(525745)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(625568)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(622762)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(623263)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(518377)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621665)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(625909)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621756)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(623184)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(623569)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(623586)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(623571)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(623572)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(623573)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(623575)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(627025)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(627026)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(627027)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(627028)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(625834)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(62844802)\d{8}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(512316)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621568)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(625907)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(622757)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621667)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(622764)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(514957)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(524865)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(356835)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(409671)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(601382)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(409670)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(625337)\d{10}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621330)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621759)\d{13}$/g }],
  },
  {
    bankCode: '01040000',
    bankName: '中国银行',
    patterns: [{ reg: /^(621790)\d{13}$/g }],
  },
  {
    bankCode: '01040036',
    bankName: 'Bank Of China Australia',
    patterns: [{ reg: /^(626201)\d{10}$/g }],
  },
  {
    bankCode: '01040116',
    bankName: '中国银行金边分行',
    patterns: [{ reg: /^(621648)\d{10}$/g }],
  },
  {
    bankCode: '01040418',
    bankName: 'Bank Of China Limited Vientian',
    patterns: [{ reg: /^(629143)\d{10}$/g }],
  },
  {
    bankCode: '01040446',
    bankName: '中国银行澳门分行',
    patterns: [{ reg: /^(622273)\d{13}$/g }],
  },
  {
    bankCode: '01040446',
    bankName: '中国银行澳门分行',
    patterns: [{ reg: /^(622274)\d{13}$/g }],
  },
  {
    bankCode: '01040446',
    bankName: '中国银行澳门分行',
    patterns: [{ reg: /^(622772)\d{13}$/g }],
  },
  {
    bankCode: '01040446',
    bankName: '中国银行澳门分行',
    patterns: [{ reg: /^(620531)\d{13}$/g }],
  },
  {
    bankCode: '01040446',
    bankName: '中国银行澳门分行',
    patterns: [{ reg: /^(620211)\d{10}$/g }],
  },
  {
    bankCode: '01040446',
    bankName: '中国银行澳门分行',
    patterns: [{ reg: /^(622479)\d{10}$/g }],
  },
  {
    bankCode: '01040446',
    bankName: '中国银行澳门分行',
    patterns: [{ reg: /^(622480)\d{10}$/g }],
  },
  {
    bankCode: '01040446',
    bankName: '中国银行澳门分行',
    patterns: [{ reg: /^(622380)\d{10}$/g }],
  },
  {
    bankCode: '01040446',
    bankName: '中国银行澳门分行',
    patterns: [{ reg: /^(626200)\d{10}$/g }],
  },
  {
    bankCode: '01040446',
    bankName: '中国银行澳门分行',
    patterns: [{ reg: /^(622770)\d{13}$/g }],
  },
  {
    bankCode: '01040446',
    bankName: '中国银行澳门分行',
    patterns: [{ reg: /^(622771)\d{13}$/g }],
  },
  {
    bankCode: '01040446',
    bankName: '中国银行澳门分行',
    patterns: [{ reg: /^(620210)\d{10}$/g }],
  },
  {
    bankCode: '01040458',
    bankName: '中国银行(马来西亚)',
    patterns: [{ reg: /^(620019)\d{10}$/g }],
  },
  {
    bankCode: '01040458',
    bankName: '中国银行(马来西亚)',
    patterns: [{ reg: /^(620035)\d{10}$/g }],
  },
  {
    bankCode: '01040702',
    bankName: '中行新加坡分行',
    patterns: [{ reg: /^(622789)\d{10}$/g }],
  },
  {
    bankCode: '01040704',
    bankName: '中国银行胡志明分行',
    patterns: [{ reg: /^(621638)\d{10}$/g }],
  },
  {
    bankCode: '01040764',
    bankName: '中国银行曼谷分行',
    patterns: [{ reg: /^(621334)\d{10}$/g }],
  },
  {
    bankCode: '01040764',
    bankName: '中国银行曼谷分行',
    patterns: [{ reg: /^(625140)\d{10}$/g }],
  },
  {
    bankCode: '01040764',
    bankName: '中国银行曼谷分行',
    patterns: [{ reg: /^(621395)\d{10}$/g }],
  },
  {
    bankCode: '01043320',
    bankName: '中行宁波分行',
    patterns: [{ reg: /^(620513)\d{13}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(524094)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(526410)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(53242)\d{11}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(434061)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(434062)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(622280)\d{13}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(491031)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(552245)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(553242)\d{12}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(5453242)\d{11}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(5491031)\d{11}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(5544033)\d{11}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(628266)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(628366)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(622168)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(622700)\d{13}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(622707)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(622728)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(589970)\d{13}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(620060)\d{13}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(621284)\d{13}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(621466)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(621488)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(621499)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(625955)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(625956)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(621700)\d{13}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(621081)\d{13}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(622966)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(622988)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(621467)\d{13}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(621598)\d{13}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(436742)\d{13}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(622708)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(621082)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(62844800)\d{8}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(453242)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(544033)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(622725)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(621080)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(53243)\d{11}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(421349)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(436728)\d{10}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(621621)\d{13}$/g }],
  },
  {
    bankCode: '01050000',
    bankName: '建设银行',
    patterns: [{ reg: /^(623251)\d{10}$/g }],
  },
  {
    bankCode: '01050001',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(623211)\d{13}$/g }],
  },
  {
    bankCode: '01050001',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(621673)\d{13}$/g }],
  },
  {
    bankCode: '01050001',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(623668)\d{13}$/g }],
  },
  {
    bankCode: '01050001',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(623094)\d{13}$/g }],
  },
  {
    bankCode: '01050001',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(623669)\d{13}$/g }],
  },
  {
    bankCode: '01050001',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(623656)\d{13}$/g }],
  },
  {
    bankCode: '01050001',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(623644)\d{13}$/g }],
  },
  {
    bankCode: '01050643',
    bankName: 'LLC Bank (Russia)',
    patterns: [{ reg: /^(6233670)\d{9}$/g }],
  },
  {
    bankCode: '01050643',
    bankName: 'LLC Bank (Russia)',
    patterns: [{ reg: /^(6233671)\d{9}$/g }],
  },
  {
    bankCode: '01050643',
    bankName: 'LLC Bank (Russia)',
    patterns: [{ reg: /^(6233672)\d{9}$/g }],
  },
  {
    bankCode: '01050643',
    bankName: 'LLC Bank (Russia)',
    patterns: [{ reg: /^(6233673)\d{9}$/g }],
  },
  {
    bankCode: '01050643',
    bankName: 'LLC Bank (Russia)',
    patterns: [{ reg: /^(6233674)\d{9}$/g }],
  },
  {
    bankCode: '01050643',
    bankName: 'LLC Bank (Russia)',
    patterns: [{ reg: /^(6233675)\d{9}$/g }],
  },
  {
    bankCode: '01050643',
    bankName: 'LLC Bank (Russia)',
    patterns: [{ reg: /^(6234340)\d{9}$/g }],
  },
  {
    bankCode: '01050643',
    bankName: 'LLC Bank (Russia)',
    patterns: [{ reg: /^(6234341)\d{9}$/g }],
  },
  {
    bankCode: '01050643',
    bankName: 'LLC Bank (Russia)',
    patterns: [{ reg: /^(6234342)\d{9}$/g }],
  },
  {
    bankCode: '01050643',
    bankName: 'LLC Bank (Russia)',
    patterns: [{ reg: /^(6234343)\d{9}$/g }],
  },
  {
    bankCode: '01050643',
    bankName: 'LLC Bank (Russia)',
    patterns: [{ reg: /^(6234344)\d{9}$/g }],
  },
  {
    bankCode: '01050643',
    bankName: 'LLC Bank (Russia)',
    patterns: [{ reg: /^(6234345)\d{9}$/g }],
  },
  {
    bankCode: '01053930',
    bankName: '建行厦门分行',
    patterns: [{ reg: /^(436742193)\d{10}$/g }],
  },
  {
    bankCode: '01053930',
    bankName: '建行厦门分行',
    patterns: [{ reg: /^(622280193)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(436718)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(436738)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(436745)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(558895)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(489592)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(532450)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(552801)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(622166)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(356899)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(356896)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(356895)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(625964)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(625966)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(544887)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(625362)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(628316)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(628317)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(436748)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(557080)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(625965)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(531693)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(559051)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(625363)\d{10}$/g }],
  },
  {
    bankCode: '01059999',
    bankName: '中国建设银行',
    patterns: [{ reg: /^(532458)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(521899)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(405512)\d{11}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(601428)\d{11}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(622252)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(622253)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(622254)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(622256)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(622257)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(622258)\d{11}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(622261)\d{13}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(458123)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(458124)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(628216)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(628218)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(622284)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(622262)\d{13}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(00405512)\d{9}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(00601428)\d{9}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(620021)\d{13}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(66405512)\d{9}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(66601428)\d{9}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(434910)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(622656)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(955590)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(955591)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(955593)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(620521)\d{13}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(622255)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(622250)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(622260)\d{13}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(622285)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(622259)\d{11}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(522964)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(955592)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(520169)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(622251)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(623560)\d{13}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(62844808)\d{11}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(625138)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(623261)\d{13}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(491040)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(537839)\d{10}$/g }],
  },
  {
    bankCode: '03010000',
    bankName: '交通银行',
    patterns: [{ reg: /^(623191)\d{13}$/g }],
  },
  {
    bankCode: '03010344',
    bankName: '交通银行香港分行',
    patterns: [{ reg: /^(625029)\d{10}$/g }],
  },
  {
    bankCode: '03010344',
    bankName: '交通银行香港分行',
    patterns: [{ reg: /^(621069)\d{13}$/g }],
  },
  {
    bankCode: '03010344',
    bankName: '交通银行香港分行',
    patterns: [{ reg: /^(621002)\d{13}$/g }],
  },
  {
    bankCode: '03010344',
    bankName: '交通银行香港分行',
    patterns: [{ reg: /^(620013)\d{10}$/g }],
  },
  {
    bankCode: '03010344',
    bankName: '交通银行香港分行',
    patterns: [{ reg: /^(621436)\d{13}$/g }],
  },
  {
    bankCode: '03010344',
    bankName: '交通银行香港分行',
    patterns: [{ reg: /^(625028)\d{10}$/g }],
  },
  {
    bankCode: '03010446',
    bankName: '交通银行澳门分行',
    patterns: [{ reg: /^(621335)\d{13}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(433680)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(442730)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(622998)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(968808)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(968809)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(622691)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(622692)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(622696)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(620082)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(621767)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(621768)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(621770)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(621772)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(621771)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(433670)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(622690)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(621769)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(623280)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(622999)\d{13}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(442729)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(968807)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(622698)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(433671)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(621773)\d{10}$/g }],
  },
  {
    bankCode: '03020000',
    bankName: '中信银行',
    patterns: [{ reg: /^(620527)\d{13}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(90030)\d{11}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大',
    patterns: [{ reg: /^(900301)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大',
    patterns: [{ reg: /^(900302)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大',
    patterns: [{ reg: /^(900303)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大',
    patterns: [{ reg: /^(900304)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大',
    patterns: [{ reg: /^(900305)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大',
    patterns: [{ reg: /^(900307)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大',
    patterns: [{ reg: /^(900308)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(622660)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(622661)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(622663)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(622664)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(622665)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(622666)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(622667)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(622669)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(622670)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(622671)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(622672)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(622673)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(622674)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(620085)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(621489)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(621492)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(620535)\d{13}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(621490)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(621491)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(623155)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(623156)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(623157)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(623158)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(623159)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(622161)\d{13}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大',
    patterns: [{ reg: /^(900300)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大',
    patterns: [{ reg: /^(900309)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(620518)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大',
    patterns: [{ reg: /^(900306)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(622662)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(622668)\d{10}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(303)\d{13}$/g }],
  },
  {
    bankCode: '03030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(623253)\d{10}$/g }],
  },
  {
    bankCode: '03040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(622630)\d{10}$/g }],
  },
  {
    bankCode: '03040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(622631)\d{10}$/g }],
  },
  {
    bankCode: '03040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(622632)\d{10}$/g }],
  },
  {
    bankCode: '03040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(622633)\d{10}$/g }],
  },
  {
    bankCode: '03040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(621222)\d{10}$/g }],
  },
  {
    bankCode: '03040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(623020)\d{10}$/g }],
  },
  {
    bankCode: '03040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(623021)\d{10}$/g }],
  },
  {
    bankCode: '03040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(623023)\d{10}$/g }],
  },
  {
    bankCode: '03040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(999999)\d{10}$/g }],
  },
  {
    bankCode: '03040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(620552)\d{10}$/g }],
  },
  {
    bankCode: '03040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(623292)\d{10}$/g }],
  },
  {
    bankCode: '03040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(623022)\d{10}$/g }],
  },
  {
    bankCode: '03050000',
    bankName: '民生银行',
    patterns: [{ reg: /^(415599)\d{10}$/g }],
  },
  {
    bankCode: '03050000',
    bankName: '民生银行',
    patterns: [{ reg: /^(421393)\d{10}$/g }],
  },
  {
    bankCode: '03050000',
    bankName: '民生银行',
    patterns: [{ reg: /^(421865)\d{10}$/g }],
  },
  {
    bankCode: '03050000',
    bankName: '民生银行',
    patterns: [{ reg: /^(427570)\d{10}$/g }],
  },
  {
    bankCode: '03050000',
    bankName: '民生银行',
    patterns: [{ reg: /^(472067)\d{10}$/g }],
  },
  {
    bankCode: '03050000',
    bankName: '民生银行',
    patterns: [{ reg: /^(472068)\d{10}$/g }],
  },
  {
    bankCode: '03050000',
    bankName: '民生银行',
    patterns: [{ reg: /^(622616)\d{10}$/g }],
  },
  {
    bankCode: '03050000',
    bankName: '民生银行',
    patterns: [{ reg: /^(622617)\d{10}$/g }],
  },
  {
    bankCode: '03050000',
    bankName: '民生银行',
    patterns: [{ reg: /^(622618)\d{10}$/g }],
  },
  {
    bankCode: '03050000',
    bankName: '民生银行',
    patterns: [{ reg: /^(622619)\d{10}$/g }],
  },
  {
    bankCode: '03050000',
    bankName: '民生银行',
    patterns: [{ reg: /^(622620)\d{10}$/g }],
  },
  {
    bankCode: '03050000',
    bankName: '民生银行',
    patterns: [{ reg: /^(427571)\d{10}$/g }],
  },
  {
    bankCode: '03050000',
    bankName: '民生银行',
    patterns: [{ reg: /^(621691)\d{10}$/g }],
  },
  {
    bankCode: '03050000',
    bankName: '民生银行',
    patterns: [{ reg: /^(900003)\d{10}$/g }],
  },
  {
    bankCode: '03050000',
    bankName: '民生银行',
    patterns: [{ reg: /^(623683)\d{10}$/g }],
  },
  {
    bankCode: '03050000',
    bankName: '民生银行',
    patterns: [{ reg: /^(621692)\d{10}$/g }],
  },
  {
    bankCode: '03050000',
    bankName: '民生银行',
    patterns: [{ reg: /^(622615)\d{10}$/g }],
  },
  {
    bankCode: '03050000',
    bankName: '民生银行',
    patterns: [{ reg: /^(622622)\d{10}$/g }],
  },
  {
    bankCode: '03050000',
    bankName: '民生银行',
    patterns: [{ reg: /^(623255)\d{10}$/g }],
  },
  {
    bankCode: '03050000',
    bankName: '民生银行',
    patterns: [{ reg: /^(623258)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(517636)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(421869)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(421871)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(556610)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(622600)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(622601)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(622603)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(356859)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(545392)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(464580)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(523952)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(553161)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(356858)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(356857)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(622623)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(625911)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(625912)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(356856)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(622621)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(545447)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(552288)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(464581)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(377153)\d{9}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(377152)\d{9}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(377158)\d{9}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(377155)\d{9}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(512466)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(545393)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(625188)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(528948)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(628258)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(622602)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(545431)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(407405)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(421870)\d{10}$/g }],
  },
  {
    bankCode: '03050001',
    bankName: '民生银行',
    patterns: [{ reg: /^(625913)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(520152)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(520382)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(685800)\d{13}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(9111)\d{15}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(406365)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(406366)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(428911)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(436768)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(436769)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(558894)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(487013)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(491032)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(491034)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(491035)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(491037)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(491038)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(548844)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(6858001)\d{12}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(6858009)\d{12}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广东发展银行',
    patterns: [{ reg: /^(685800)\d{12}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(622556)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(622559)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(622560)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(625071)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(625072)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(628260)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(622557)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(621462)\d{13}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(528931)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(625805)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(625806)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(625807)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(625808)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(625809)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(625810)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(620037)\d{13}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(552794)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(623506)\d{13}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(622558)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(623259)\d{13}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(62364873)\d{11}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(622890)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(491036)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(622568)\d{13}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(6858000)\d{12}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(622555)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(518364)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(628259)\d{10}$/g }],
  },
  {
    bankCode: '03060000',
    bankName: '广发银行股份有限公司',
    patterns: [{ reg: /^(625073)\d{10}$/g }],
  },
  {
    bankCode: '03060446',
    bankName: '"CHINA GUANGFA BANK,MACAU"',
    patterns: [{ reg: /^(623365)\d{10}$/g }],
  },
  {
    bankCode: '03060446',
    bankName: '"CHINA GUANGFA BANK,MACAU"',
    patterns: [{ reg: /^(623366)\d{10}$/g }],
  },
  {
    bankCode: '03070010',
    bankName: '平安银行（借记卡）',
    patterns: [{ reg: /^(412963)\d{10}$/g }],
  },
  {
    bankCode: '03070010',
    bankName: '平安银行（借记卡）',
    patterns: [{ reg: /^(415752)\d{10}$/g }],
  },
  {
    bankCode: '03070010',
    bankName: '平安银行（借记卡）',
    patterns: [{ reg: /^(415753)\d{10}$/g }],
  },
  {
    bankCode: '03070010',
    bankName: '平安银行（借记卡）',
    patterns: [{ reg: /^(622536)\d{10}$/g }],
  },
  {
    bankCode: '03070010',
    bankName: '平安银行（借记卡）',
    patterns: [{ reg: /^(622538)\d{10}$/g }],
  },
  {
    bankCode: '03070010',
    bankName: '平安银行（借记卡）',
    patterns: [{ reg: /^(622539)\d{10}$/g }],
  },
  {
    bankCode: '03070010',
    bankName: '平安银行（借记卡）',
    patterns: [{ reg: /^(622983)\d{10}$/g }],
  },
  {
    bankCode: '03070010',
    bankName: '平安银行（借记卡）',
    patterns: [{ reg: /^(620010)\d{10}$/g }],
  },
  {
    bankCode: '03070010',
    bankName: '平安银行（借记卡）',
    patterns: [{ reg: /^(412962)\d{10}$/g }],
  },
  {
    bankCode: '03070010',
    bankName: '平安银行（借记卡）',
    patterns: [{ reg: /^(622535)\d{10}$/g }],
  },
  {
    bankCode: '03070010',
    bankName: '平安银行（借记卡）',
    patterns: [{ reg: /^(998800)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(512425)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(521302)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(95555)\d{11}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(356886)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(356887)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(356888)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(356889)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(402658)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(410062)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(439188)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(439227)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(479228)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(479229)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(545619)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(545620)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(545621)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(545623)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(545948)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(552534)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(552587)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(622575)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(622576)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(622577)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(622578)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(622579)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(622580)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(622588)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(690755)\d{9}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(690755)\d{12}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(622609)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(621286)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: ' 招商',
    patterns: [{ reg: /^(955550)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: ' 招商',
    patterns: [{ reg: /^(955551)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: ' 招商',
    patterns: [{ reg: /^(955552)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: ' 招商',
    patterns: [{ reg: /^(955553)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: ' 招商',
    patterns: [{ reg: /^(955554)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: ' 招商',
    patterns: [{ reg: /^(955556)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: ' 招商',
    patterns: [{ reg: /^(955558)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: ' 招商',
    patterns: [{ reg: /^(955559)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(620520)\d{13}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(621483)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(621485)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(621486)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(545947)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(628290)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(356890)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(622581)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: ' 招商',
    patterns: [{ reg: /^(955557)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(623126)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(623136)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(625657)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(468203)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(622582)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: ' 招商',
    patterns: [{ reg: /^(955555)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(524011)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(356885)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(623563)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(621276)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(622598)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(623262)\d{10}$/g }],
  },
  {
    bankCode: '03080000',
    bankName: '招商银行',
    patterns: [{ reg: /^(62326536)\d{11}$/g }],
  },
  {
    bankCode: '03080010',
    bankName: '招商银行信用卡中心',
    patterns: [{ reg: /^(518710)\d{10}$/g }],
  },
  {
    bankCode: '03080010',
    bankName: '招商银行信用卡中心',
    patterns: [{ reg: /^(518718)\d{10}$/g }],
  },
  {
    bankCode: '03080010',
    bankName: '招商银行信用卡中心',
    patterns: [{ reg: /^(439225)\d{10}$/g }],
  },
  {
    bankCode: '03080010',
    bankName: '招商银行信用卡中心',
    patterns: [{ reg: /^(439226)\d{10}$/g }],
  },
  {
    bankCode: '03080010',
    bankName: '招商银行信用卡中心',
    patterns: [{ reg: /^(628262)\d{10}$/g }],
  },
  {
    bankCode: '03080010',
    bankName: '招商银行信用卡中心',
    patterns: [{ reg: /^(370286)\d{9}$/g }],
  },
  {
    bankCode: '03080010',
    bankName: '招商银行信用卡中心',
    patterns: [{ reg: /^(370285)\d{9}$/g }],
  },
  {
    bankCode: '03080010',
    bankName: '招商银行信用卡中心',
    patterns: [{ reg: /^(370289)\d{9}$/g }],
  },
  {
    bankCode: '03080010',
    bankName: '招商银行信用卡中心',
    patterns: [{ reg: /^(625802)\d{10}$/g }],
  },
  {
    bankCode: '03080010',
    bankName: '招商银行信用卡中心',
    patterns: [{ reg: /^(625803)\d{10}$/g }],
  },
  {
    bankCode: '03080010',
    bankName: '招商银行信用卡中心',
    patterns: [{ reg: /^(370287)\d{9}$/g }],
  },
  {
    bankCode: '03080010',
    bankName: '招商银行信用卡中心',
    patterns: [{ reg: /^(628362)\d{10}$/g }],
  },
  {
    bankCode: '03080344',
    bankName: '招商银行香港分行',
    patterns: [{ reg: /^(621299)\d{10}$/g }],
  },
  {
    bankCode: '03090000',
    bankName: '兴业银行',
    patterns: [{ reg: /^(90592)\d{11}$/g }],
  },
  {
    bankCode: '03090000',
    bankName: '兴业银行',
    patterns: [{ reg: /^(438589)\d{12}$/g }],
  },
  {
    bankCode: '03090000',
    bankName: '兴业银行',
    patterns: [{ reg: /^(966666)\d{12}$/g }],
  },
  {
    bankCode: '03090000',
    bankName: '兴业银行',
    patterns: [{ reg: /^(623287)\d{11}$/g }],
  },
  {
    bankCode: '03090000',
    bankName: '兴业银行',
    patterns: [{ reg: /^(438588)\d{12}$/g }],
  },
  {
    bankCode: '03090000',
    bankName: '兴业银行',
    patterns: [{ reg: /^(622908)\d{12}$/g }],
  },
  {
    bankCode: '03090002',
    bankName: '兴业银行',
    patterns: [{ reg: /^(622909)\d{12}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(524070)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(451289)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(451290)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(486493)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(486861)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(527414)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(622902)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(622922)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(628212)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(461982)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(528057)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(625960)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(625962)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(625963)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(548738)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(549633)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(625082)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(625083)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(625084)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(625086)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(625087)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(523036)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(625353)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(625356)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(622571)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(622572)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(622573)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(622591)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(622592)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(622593)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(486494)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(625961)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(622901)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(552398)\d{10}$/g }],
  },
  {
    bankCode: '03090010',
    bankName: '兴业银行',
    patterns: [{ reg: /^(625085)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(515672)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(517650)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(525998)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(84301)\d{11}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(356850)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(356852)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(404738)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(404739)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(84336)\d{11}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(84342)\d{11}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(456418)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(498451)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(622516)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(622517)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(622519)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(622520)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(622521)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(622522)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(622523)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(984301)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(622176)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(622177)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(622277)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(356851)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(84373)\d{11}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(84380)\d{11}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(84385)\d{11}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(84390)\d{11}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(87000)\d{11}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(87010)\d{11}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(87040)\d{11}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(622228)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(621390)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(625957)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(621351)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(621352)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(621791)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(621792)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(621793)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(621795)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(621796)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(622500)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(984303)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(628222)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(84361)\d{11}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(87050)\d{11}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(623250)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(623658)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(622518)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(625958)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(620530)\d{13}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(623559)\d{10}$/g }],
  },
  {
    bankCode: '03100000',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(87030)\d{11}$/g }],
  },
  {
    bankCode: '03100001',
    bankName: '浦东发展银行',
    patterns: [{ reg: /^(622276)\d{10}$/g }],
  },
  {
    bankCode: '03110000',
    bankName: '恒丰银行',
    patterns: [{ reg: /^(622384)\d{11}$/g }],
  },
  {
    bankCode: '03110000',
    bankName: '恒丰银行',
    patterns: [{ reg: /^(623078)\d{13}$/g }],
  },
  {
    bankCode: '03114560',
    bankName: '恒丰银行',
    patterns: [{ reg: /^(940034)\d{11}$/g }],
  },
  {
    bankCode: '03133930',
    bankName: '厦门市商业银行',
    patterns: [{ reg: /^(622393)\d{10}$/g }],
  },
  {
    bankCode: '03133930',
    bankName: '厦门市商业银行',
    patterns: [{ reg: /^(940023)\d{10}$/g }],
  },
  {
    bankCode: '03134530',
    bankName: '淄博商业银行',
    patterns: [{ reg: /^(622311)\d{11}$/g }],
  },
  {
    bankCode: '03134530',
    bankName: '淄博商业银行',
    patterns: [{ reg: /^(940057)\d{11}$/g }],
  },
  {
    bankCode: '03160000',
    bankName: '浙商银行',
    patterns: [{ reg: /^(621019)\d{13}$/g }],
  },
  {
    bankCode: '03160000',
    bankName: '浙商银行',
    patterns: [{ reg: /^(622309)\d{13}$/g }],
  },
  {
    bankCode: '03160000',
    bankName: '浙商银行',
    patterns: [{ reg: /^(62326528)\d{11}$/g }],
  },
  {
    bankCode: '03160001',
    bankName: '浙商银行',
    patterns: [{ reg: /^(625821)\d{10}$/g }],
  },
  {
    bankCode: '03160001',
    bankName: '浙商银行',
    patterns: [{ reg: /^(628324)\d{10}$/g }],
  },
  {
    bankCode: '03161100',
    bankName: '浙商银行天津分行',
    patterns: [{ reg: /^(6223091100)\d{9}$/g }],
  },
  {
    bankCode: '03162900',
    bankName: '浙商银行上海分行',
    patterns: [{ reg: /^(6223092900)\d{9}$/g }],
  },
  {
    bankCode: '03163310',
    bankName: '浙商银行营业部',
    patterns: [{ reg: /^(6223093310)\d{9}$/g }],
  },
  {
    bankCode: '03163320',
    bankName: '浙商银行宁波分行',
    patterns: [{ reg: /^(6223093320)\d{9}$/g }],
  },
  {
    bankCode: '03163330',
    bankName: '浙商银行温州分行',
    patterns: [{ reg: /^(6223093330)\d{9}$/g }],
  },
  {
    bankCode: '03163350',
    bankName: '浙商银行',
    patterns: [{ reg: /^(6223093350)\d{9}$/g }],
  },
  {
    bankCode: '03163370',
    bankName: '浙商银行绍兴分行',
    patterns: [{ reg: /^(6223093370)\d{9}$/g }],
  },
  {
    bankCode: '03163380',
    bankName: '浙商银行义乌分行',
    patterns: [{ reg: /^(6223093380)\d{9}$/g }],
  },
  {
    bankCode: '03166510',
    bankName: '浙商银行成都分行',
    patterns: [{ reg: /^(6223096510)\d{9}$/g }],
  },
  {
    bankCode: '03167910',
    bankName: '浙商银行西安分行',
    patterns: [{ reg: /^(6223097910)\d{9}$/g }],
  },
  {
    bankCode: '03170000',
    bankName: '渤海银行',
    patterns: [{ reg: /^(621268)\d{10}$/g }],
  },
  {
    bankCode: '03170000',
    bankName: '渤海银行',
    patterns: [{ reg: /^(622884)\d{10}$/g }],
  },
  {
    bankCode: '03170000',
    bankName: '渤海银行',
    patterns: [{ reg: /^(621453)\d{10}$/g }],
  },
  {
    bankCode: '03170000',
    bankName: '渤海银行',
    patterns: [{ reg: /^(622684)\d{10}$/g }],
  },
  {
    bankCode: '03170000',
    bankName: '渤海银行',
    patterns: [{ reg: /^(62053803)\d{11}$/g }],
  },
  {
    bankCode: '03170003',
    bankName: '渤海银行股份有限公司',
    patterns: [{ reg: /^(625122)\d{10}$/g }],
  },
  {
    bankCode: '03180000',
    bankName: '平安银行',
    patterns: [{ reg: /^(623269)\d{13}$/g }],
  },
  {
    bankCode: '03190001',
    bankName: '花旗银行(中国)有限公司',
    patterns: [{ reg: /^(621062)\d{10}$/g }],
  },
  {
    bankCode: '03190001',
    bankName: '花旗银行(中国)有限公司',
    patterns: [{ reg: /^(621063)\d{10}$/g }],
  },
  {
    bankCode: '03190002',
    bankName: '花旗中国',
    patterns: [{ reg: /^(625076)\d{10}$/g }],
  },
  {
    bankCode: '03190002',
    bankName: '花旗中国',
    patterns: [{ reg: /^(625077)\d{10}$/g }],
  },
  {
    bankCode: '03190003',
    bankName: '花旗中国',
    patterns: [{ reg: /^(625074)\d{10}$/g }],
  },
  {
    bankCode: '03190003',
    bankName: '花旗中国',
    patterns: [{ reg: /^(625075)\d{10}$/g }],
  },
  {
    bankCode: '03200000',
    bankName: '东亚银行中国有限公司',
    patterns: [{ reg: /^(622938)\d{13}$/g }],
  },
  {
    bankCode: '03200000',
    bankName: '东亚银行中国有限公司',
    patterns: [{ reg: /^(623031)\d{13}$/g }],
  },
  {
    bankCode: '03200000',
    bankName: '东亚银行中国有限公司',
    patterns: [{ reg: /^(622933)\d{13}$/g }],
  },
  {
    bankCode: '03200000',
    bankName: '东亚银行中国有限公司',
    patterns: [{ reg: /^(623625)\d{13}$/g }],
  },
  {
    bankCode: '03210000',
    bankName: '汇丰银(中国)有限公司',
    patterns: [{ reg: /^(622946)\d{10}$/g }],
  },
  {
    bankCode: '03210001',
    bankName: '汇丰银行（中国）',
    patterns: [{ reg: /^(625102)\d{10}$/g }],
  },
  {
    bankCode: '03220000',
    bankName: '渣打银行中国有限公司',
    patterns: [{ reg: /^(622942)\d{10}$/g }],
  },
  {
    bankCode: '03220000',
    bankName: '渣打银行中国有限公司',
    patterns: [{ reg: /^(622994)\d{10}$/g }],
  },
  {
    bankCode: '03220001',
    bankName: '渣打银行(中国)',
    patterns: [{ reg: /^(622584)\d{10}$/g }],
  },
  {
    bankCode: '03220001',
    bankName: '渣打银行(中国)',
    patterns: [{ reg: /^(622583)\d{10}$/g }],
  },
  {
    bankCode: '03240000',
    bankName: '星展银行',
    patterns: [{ reg: /^(621016)\d{13}$/g }],
  },
  {
    bankCode: '03240000',
    bankName: '星展银行',
    patterns: [{ reg: /^(621015)\d{13}$/g }],
  },
  {
    bankCode: '03240000',
    bankName: '星展银行',
    patterns: [{ reg: /^(623187)\d{13}$/g }],
  },
  {
    bankCode: '03260000',
    bankName: '恒生银行',
    patterns: [{ reg: /^(622951)\d{10}$/g }],
  },
  {
    bankCode: '03260000',
    bankName: '恒生银行',
    patterns: [{ reg: /^(622950)\d{10}$/g }],
  },
  {
    bankCode: '03270000',
    bankName: '友利银行(中国)有限公司',
    patterns: [{ reg: /^(623551)\d{13}$/g }],
  },
  {
    bankCode: '03270000',
    bankName: '友利银行(中国)有限公司',
    patterns: [{ reg: /^(621060)\d{13}$/g }],
  },
  {
    bankCode: '03280000',
    bankName: '新韩银行',
    patterns: [{ reg: /^(621072)\d{13}$/g }],
  },
  {
    bankCode: '03280000',
    bankName: '新韩银行',
    patterns: [{ reg: /^(623630)\d{13}$/g }],
  },
  {
    bankCode: '03290000',
    bankName: '韩亚银行（中国）',
    patterns: [{ reg: /^(621201)\d{10}$/g }],
  },
  {
    bankCode: '03290000',
    bankName: '韩亚银行（中国）',
    patterns: [{ reg: /^(623513)\d{10}$/g }],
  },
  {
    bankCode: '03300000',
    bankName: '华侨永亨银行（中国）',
    patterns: [{ reg: /^(621077)\d{10}$/g }],
  },
  {
    bankCode: '03300000',
    bankName: '华侨永亨银行（中国）',
    patterns: [{ reg: /^(621298)\d{12}$/g }],
  },
  {
    bankCode: '03320000',
    bankName: '南洋商业银行（中国）',
    patterns: [{ reg: /^(621213)\d{13}$/g }],
  },
  {
    bankCode: '03320000',
    bankName: '南洋商业银行（中国）',
    patterns: [{ reg: /^(621289)\d{13}$/g }],
  },
  {
    bankCode: '03320000',
    bankName: '南洋商业银行（中国）',
    patterns: [{ reg: /^(621290)\d{13}$/g }],
  },
  {
    bankCode: '03320000',
    bankName: '南洋商业银行（中国）',
    patterns: [{ reg: /^(621292)\d{13}$/g }],
  },
  {
    bankCode: '03320000',
    bankName: '南洋商业银行（中国）',
    patterns: [{ reg: /^(623555)\d{13}$/g }],
  },
  {
    bankCode: '03320000',
    bankName: '南洋商业银行（中国）',
    patterns: [{ reg: /^(621291)\d{13}$/g }],
  },
  {
    bankCode: '03330001',
    bankName: '法国兴业银行（中国）',
    patterns: [{ reg: /^(621245)\d{10}$/g }],
  },
  {
    bankCode: '03340000',
    bankName: '大华银行（中国）',
    patterns: [{ reg: /^(621328)\d{13}$/g }],
  },
  {
    bankCode: '03340000',
    bankName: '大华银行（中国）',
    patterns: [{ reg: /^(623176)\d{13}$/g }],
  },
  {
    bankCode: '03350000',
    bankName: '大新银行（中国）',
    patterns: [{ reg: /^(621277)\d{10}$/g }],
  },
  {
    bankCode: '03360000',
    bankName: '企业银行（中国）',
    patterns: [{ reg: /^(621651)\d{13}$/g }],
  },
  {
    bankCode: '03360000',
    bankName: '企业银行（中国）',
    patterns: [{ reg: /^(62326516)\d{11}$/g }],
  },
  {
    bankCode: '03370000',
    bankName: '华商银行',
    patterns: [{ reg: /^(623163)\d{13}$/g }],
  },
  {
    bankCode: '03380000',
    bankName: '中德住房储蓄银行',
    patterns: [{ reg: /^(623526)\d{13}$/g }],
  },
  {
    bankCode: '03390000',
    bankName: '富邦华一银行',
    patterns: [{ reg: /^(623565)\d{13}$/g }],
  },
  {
    bankCode: '03400000',
    bankName: '深圳前海微众银行',
    patterns: [{ reg: /^(623633)\d{13}$/g }],
  },
  {
    bankCode: '03400000',
    bankName: '深圳前海微众银行',
    patterns: [{ reg: /^(62326584)\d{11}$/g }],
  },
  {
    bankCode: '03420000',
    bankName: '天津金城银行',
    patterns: [{ reg: /^(623616)\d{12}$/g }],
  },
  {
    bankCode: '03430000',
    bankName: '上海华瑞银行股份有限公司',
    patterns: [{ reg: /^(623622)\d{13}$/g }],
  },
  {
    bankCode: '03440000',
    bankName: '温州民商',
    patterns: [{ reg: /^(623632)\d{13}$/g }],
  },
  {
    bankCode: '03450000',
    bankName: '玉山银行（中国）',
    patterns: [{ reg: /^(623661)\d{12}$/g }],
  },
  {
    bankCode: '03460000',
    bankName: '重庆富民银行',
    patterns: [{ reg: /^(627061)\d{13}$/g }],
  },
  {
    bankCode: '03480000',
    bankName: '安徽新安银行',
    patterns: [{ reg: /^(62707866)\d{10}$/g }],
  },
  {
    bankCode: '03480000',
    bankName: '安徽新安银行',
    patterns: [{ reg: /^(62707877)\d{10}$/g }],
  },
  {
    bankCode: '03480000',
    bankName: '安徽新安银行',
    patterns: [{ reg: /^(62707888)\d{10}$/g }],
  },
  {
    bankCode: '03480000',
    bankName: '安徽新安银行',
    patterns: [{ reg: /^(62707899)\d{10}$/g }],
  },
  {
    bankCode: '03490000',
    bankName: '福建华通银行',
    patterns: [{ reg: /^(627076)\d{13}$/g }],
  },
  {
    bankCode: '03500000',
    bankName: '江苏苏宁银行',
    patterns: [{ reg: /^(62364305)\d{11}$/g }],
  },
  {
    bankCode: '03510000',
    bankName: '威海蓝海银行',
    patterns: [{ reg: /^(62364306)\d{11}$/g }],
  },
  {
    bankCode: '03520000',
    bankName: '辽宁振兴银行',
    patterns: [{ reg: /^(62364307)\d{11}$/g }],
  },
  {
    bankCode: '03530000',
    bankName: '吉林亿联银行',
    patterns: [{ reg: /^(62364312)\d{11}$/g }],
  },
  {
    bankCode: '03540000',
    bankName: '梅州客商银行',
    patterns: [{ reg: /^(62364308)\d{11}$/g }],
  },
  {
    bankCode: '03550000',
    bankName: '北京中关村银行',
    patterns: [{ reg: /^(62364310)\d{11}$/g }],
  },
  {
    bankCode: '03560000',
    bankName: '武汉众邦银行',
    patterns: [{ reg: /^(62364309)\d{11}$/g }],
  },
  {
    bankCode: '03570000',
    bankName: '中信百信银行',
    patterns: [{ reg: /^(62364316)\d{11}$/g }],
  },
  {
    bankCode: '03580000',
    bankName: '四川新网银行',
    patterns: [{ reg: /^(62360066)\d{11}$/g }],
  },
  {
    bankCode: '04010000',
    bankName: '上海银行',
    patterns: [{ reg: /^(621005)\d{12}$/g }],
  },
  {
    bankCode: '04010000',
    bankName: '上海银行',
    patterns: [{ reg: /^(623183)\d{12}$/g }],
  },
  {
    bankCode: '04010000',
    bankName: '上海银行',
    patterns: [{ reg: /^(623185)\d{12}$/g }],
  },
  {
    bankCode: '04012900',
    bankName: '上海银行',
    patterns: [{ reg: /^(622278)\d{12}$/g }],
  },
  {
    bankCode: '04012900',
    bankName: '上海银行',
    patterns: [{ reg: /^(622279)\d{12}$/g }],
  },
  {
    bankCode: '04012900',
    bankName: '上海银行',
    patterns: [{ reg: /^(622892)\d{12}$/g }],
  },
  {
    bankCode: '04012900',
    bankName: '上海银行',
    patterns: [{ reg: /^(622985)\d{12}$/g }],
  },
  {
    bankCode: '04012900',
    bankName: '上海银行',
    patterns: [{ reg: /^(622987)\d{12}$/g }],
  },
  {
    bankCode: '04012900',
    bankName: '上海银行',
    patterns: [{ reg: /^(622172)\d{12}$/g }],
  },
  {
    bankCode: '04012900',
    bankName: '上海银行',
    patterns: [{ reg: /^(621050)\d{12}$/g }],
  },
  {
    bankCode: '04012900',
    bankName: '上海银行',
    patterns: [{ reg: /^(622267)\d{12}$/g }],
  },
  {
    bankCode: '04012900',
    bankName: '上海银行',
    patterns: [{ reg: /^(622468)\d{12}$/g }],
  },
  {
    bankCode: '04012900',
    bankName: '上海银行',
    patterns: [{ reg: /^(621243)\d{12}$/g }],
  },
  {
    bankCode: '04012900',
    bankName: '上海银行',
    patterns: [{ reg: /^(940021)\d{12}$/g }],
  },
  {
    bankCode: '04012900',
    bankName: '上海银行',
    patterns: [{ reg: /^(620522)\d{12}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(519498)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(520131)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(524031)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(356827)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(356828)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(356829)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(402673)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(402674)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(622268)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(622269)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(438600)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(486466)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(548838)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(622149)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(628230)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(356830)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(625099)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(625953)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(625350)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(625352)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(519961)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(625839)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(622148)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(625180)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(622300)\d{10}$/g }],
  },
  {
    bankCode: '04012902',
    bankName: '上海银行',
    patterns: [{ reg: /^(625351)\d{10}$/g }],
  },
  {
    bankCode: '04023930',
    bankName: '厦门银行股份有限公司',
    patterns: [{ reg: /^(6886592)\d{11}$/g }],
  },
  {
    bankCode: '04023930',
    bankName: '厦门银行股份有限公司',
    patterns: [{ reg: /^(621600)\d{13}$/g }],
  },
  {
    bankCode: '04023930',
    bankName: '厦门银行股份有限公司',
    patterns: [{ reg: /^(623019)\d{13}$/g }],
  },
  {
    bankCode: '04023930',
    bankName: '厦门银行股份有限公司',
    patterns: [{ reg: /^(623514)\d{13}$/g }],
  },
  {
    bankCode: '04023930',
    bankName: '厦门银行股份有限公司',
    patterns: [{ reg: /^(623663)\d{13}$/g }],
  },
  {
    bankCode: '04031000',
    bankName: '北京银行',
    patterns: [{ reg: /^(422161)\d{10}$/g }],
  },
  {
    bankCode: '04031000',
    bankName: '北京银行',
    patterns: [{ reg: /^(621030)\d{10}$/g }],
  },
  {
    bankCode: '04031000',
    bankName: '北京银行',
    patterns: [{ reg: /^(621420)\d{10}$/g }],
  },
  {
    bankCode: '04031000',
    bankName: '北京银行',
    patterns: [{ reg: /^(621468)\d{10}$/g }],
  },
  {
    bankCode: '04031000',
    bankName: '北京银行',
    patterns: [{ reg: /^(623111)\d{10}$/g }],
  },
  {
    bankCode: '04031000',
    bankName: '北京银行',
    patterns: [{ reg: /^(421317)\d{10}$/g }],
  },
  {
    bankCode: '04031000',
    bankName: '北京银行',
    patterns: [{ reg: /^(422160)\d{10}$/g }],
  },
  {
    bankCode: '04031000',
    bankName: '北京银行',
    patterns: [{ reg: /^(602969)\d{10}$/g }],
  },
  {
    bankCode: '04031000',
    bankName: '北京银行',
    patterns: [{ reg: /^(623561)\d{13}$/g }],
  },
  {
    bankCode: '04031000',
    bankName: '北京银行',
    patterns: [{ reg: /^(623562)\d{13}$/g }],
  },
  {
    bankCode: '04031000',
    bankName: '北京银行',
    patterns: [{ reg: /^(623283)\d{13}$/g }],
  },
  {
    bankCode: '04044560',
    bankName: '烟台银行',
    patterns: [{ reg: /^(622886)\d{10}$/g }],
  },
  {
    bankCode: '04044560',
    bankName: '烟台银行',
    patterns: [{ reg: /^(623533)\d{13}$/g }],
  },
  {
    bankCode: '04044560',
    bankName: '烟台银行',
    patterns: [{ reg: /^(62326580)\d{11}$/g }],
  },
  {
    bankCode: '04053910',
    bankName: '福州商业银行',
    patterns: [{ reg: /^(940026)\d{12}$/g }],
  },
  {
    bankCode: '04053910',
    bankName: '福建海峡银行股份有限公司',
    patterns: [{ reg: /^(620043)\d{12}$/g }],
  },
  {
    bankCode: '04053910',
    bankName: '福建海峡银行股份有限公司',
    patterns: [{ reg: /^(621267)\d{12}$/g }],
  },
  {
    bankCode: '04053910',
    bankName: '福建海峡银行股份有限公司',
    patterns: [{ reg: /^(623063)\d{12}$/g }],
  },
  {
    bankCode: '04053910',
    bankName: '福建海峡银行股份有限公司',
    patterns: [{ reg: /^(621664)\d{12}$/g }],
  },
  {
    bankCode: '04053910',
    bankName: '福州商业银行',
    patterns: [{ reg: /^(622388)\d{10}$/g }],
  },
  {
    bankCode: '04053910',
    bankName: '福州商业银行',
    patterns: [{ reg: /^(98350820)\d{10}$/g }],
  },
  {
    bankCode: '04053919',
    bankName: '福建海峡银行',
    patterns: [{ reg: /^(628360)\d{10}$/g }],
  },
  {
    bankCode: '04053919',
    bankName: '福建海峡银行',
    patterns: [{ reg: /^(622695)\d{10}$/g }],
  },
  {
    bankCode: '04062410',
    bankName: '吉林银行',
    patterns: [{ reg: /^(622865)\d{13}$/g }],
  },
  {
    bankCode: '04062410',
    bankName: '吉林银行',
    patterns: [{ reg: /^(940012)\d{10}$/g }],
  },
  {
    bankCode: '04062418',
    bankName: '吉林银行',
    patterns: [{ reg: /^(622178)\d{10}$/g }],
  },
  {
    bankCode: '04062418',
    bankName: '吉林银行',
    patterns: [{ reg: /^(628358)\d{10}$/g }],
  },
  {
    bankCode: '04062418',
    bankName: '吉林银行',
    patterns: [{ reg: /^(622179)\d{10}$/g }],
  },
  {
    bankCode: '04062419',
    bankName: '吉林银行',
    patterns: [{ reg: /^(623131)\d{13}$/g }],
  },
  {
    bankCode: '04073140',
    bankName: '镇江市商业银行',
    patterns: [{ reg: /^(622394)\d{10}$/g }],
  },
  {
    bankCode: '04073140',
    bankName: '镇江市商业银行',
    patterns: [{ reg: /^(940025)\d{10}$/g }],
  },
  {
    bankCode: '04083320',
    bankName: '宁波银行',
    patterns: [{ reg: /^(622281)\d{10}$/g }],
  },
  {
    bankCode: '04083320',
    bankName: '宁波银行',
    patterns: [{ reg: /^(940022)\d{10}$/g }],
  },
  {
    bankCode: '04083320',
    bankName: '宁波市商业银行',
    patterns: [{ reg: /^(622316499)\d{7}$/g }],
  },
  {
    bankCode: '04083320',
    bankName: '宁波银行',
    patterns: [{ reg: /^(621279)\d{10}$/g }],
  },
  {
    bankCode: '04083320',
    bankName: '宁波银行',
    patterns: [{ reg: /^(621418)\d{13}$/g }],
  },
  {
    bankCode: '04083320',
    bankName: '宁波银行',
    patterns: [{ reg: /^(623252)\d{13}$/g }],
  },
  {
    bankCode: '04083320',
    bankName: '宁波银行',
    patterns: [{ reg: /^(620533)\d{13}$/g }],
  },
  {
    bankCode: '04083320',
    bankName: '宁波银行',
    patterns: [{ reg: /^(622316)\d{10}$/g }],
  },
  {
    bankCode: '04094510',
    bankName: '齐鲁银行',
    patterns: [{ reg: /^(940008)\d{13}$/g }],
  },
  {
    bankCode: '04094510',
    bankName: '齐鲁银行',
    patterns: [{ reg: /^(622379)\d{13}$/g }],
  },
  {
    bankCode: '04094510',
    bankName: '齐鲁银行',
    patterns: [{ reg: /^(62326575)\d{11}$/g }],
  },
  {
    bankCode: '04100000',
    bankName: '平安银行',
    patterns: [{ reg: /^(621626)\d{13}$/g }],
  },
  {
    bankCode: '04100000',
    bankName: '平安银行',
    patterns: [{ reg: /^(623058)\d{13}$/g }],
  },
  {
    bankCode: '04105840',
    bankName: '平安银行',
    patterns: [{ reg: /^(602907)\d{10}$/g }],
  },
  {
    bankCode: '04105840',
    bankName: '平安银行',
    patterns: [{ reg: /^(622986)\d{10}$/g }],
  },
  {
    bankCode: '04105840',
    bankName: '平安银行',
    patterns: [{ reg: /^(622298)\d{10}$/g }],
  },
  {
    bankCode: '04105840',
    bankName: '平安银行',
    patterns: [{ reg: /^(622989)\d{10}$/g }],
  },
  {
    bankCode: '04115010',
    bankName: '焦作中旅银行',
    patterns: [{ reg: /^(622338)\d{13}$/g }],
  },
  {
    bankCode: '04115010',
    bankName: '焦作中旅银行',
    patterns: [{ reg: /^(623205)\d{13}$/g }],
  },
  {
    bankCode: '04115010',
    bankName: '焦作中旅银行',
    patterns: [{ reg: /^(623511)\d{13}$/g }],
  },
  {
    bankCode: '04115010',
    bankName: '焦作中旅银行',
    patterns: [{ reg: /^(940032)\d{10}$/g }],
  },
  {
    bankCode: '04123330',
    bankName: '温州银行',
    patterns: [{ reg: /^(621977)\d{10}$/g }],
  },
  {
    bankCode: '04123330',
    bankName: '温州银行',
    patterns: [{ reg: /^(623112)\d{13}$/g }],
  },
  {
    bankCode: '04123330',
    bankName: '温州银行',
    patterns: [{ reg: /^(623578)\d{13}$/g }],
  },
  {
    bankCode: '04123330',
    bankName: '温州银行',
    patterns: [{ reg: /^(62326531)\d{11}$/g }],
  },
  {
    bankCode: '04135810',
    bankName: '广州银行股份有限公司',
    patterns: [{ reg: /^(603445)\d{13}$/g }],
  },
  {
    bankCode: '04135810',
    bankName: '广州银行股份有限公司',
    patterns: [{ reg: /^(622467)\d{13}$/g }],
  },
  {
    bankCode: '04135810',
    bankName: '广州银行股份有限公司',
    patterns: [{ reg: /^(621463)\d{13}$/g }],
  },
  {
    bankCode: '04135810',
    bankName: '广州银行股份有限公司',
    patterns: [{ reg: /^(940016)\d{13}$/g }],
  },
  {
    bankCode: '04145210',
    bankName: '汉口银行',
    patterns: [{ reg: /^(990027)\d{12}$/g }],
  },
  {
    bankCode: '04145210',
    bankName: '汉口银行',
    patterns: [{ reg: /^(622325)\d{10}$/g }],
  },
  {
    bankCode: '04145210',
    bankName: '汉口银行',
    patterns: [{ reg: /^(623029)\d{10}$/g }],
  },
  {
    bankCode: '04145210',
    bankName: '汉口银行',
    patterns: [{ reg: /^(623105)\d{10}$/g }],
  },
  {
    bankCode: '04145210',
    bankName: '汉口银行',
    patterns: [{ reg: /^(62326510)\d{8}$/g }],
  },
  {
    bankCode: '04162640',
    bankName: '齐齐哈尔商业银行',
    patterns: [{ reg: /^(622475)\d{10}$/g }],
  },
  {
    bankCode: '04170000',
    bankName: '盛京银行',
    patterns: [{ reg: /^(621244)\d{10}$/g }],
  },
  {
    bankCode: '04170001',
    bankName: '盛京银行',
    patterns: [{ reg: /^(623081)\d{10}$/g }],
  },
  {
    bankCode: '04170001',
    bankName: '盛京银行',
    patterns: [{ reg: /^(623108)\d{10}$/g }],
  },
  {
    bankCode: '04172210',
    bankName: '盛京银行',
    patterns: [{ reg: /^(566666)\d{12}$/g }],
  },
  {
    bankCode: '04172210',
    bankName: '盛京银行',
    patterns: [{ reg: /^(940039)\d{13}$/g }],
  },
  {
    bankCode: '04172210',
    bankName: '盛京银行',
    patterns: [{ reg: /^(622955)\d{10}$/g }],
  },
  {
    bankCode: '04172210',
    bankName: '盛京银行',
    patterns: [{ reg: /^(622455)\d{13}$/g }],
  },
  {
    bankCode: '04172211',
    bankName: '盛京银行',
    patterns: [{ reg: /^(628285)\d{10}$/g }],
  },
  {
    bankCode: '04172211',
    bankName: '盛京银行',
    patterns: [{ reg: /^(625811)\d{10}$/g }],
  },
  {
    bankCode: '04172211',
    bankName: '盛京银行',
    patterns: [{ reg: /^(622466)\d{10}$/g }],
  },
  {
    bankCode: '04184930',
    bankName: '洛阳银行',
    patterns: [{ reg: /^(622420)\d{10}$/g }],
  },
  {
    bankCode: '04184930',
    bankName: '洛阳市商业银行',
    patterns: [{ reg: /^(622420)\d{11}$/g }],
  },
  {
    bankCode: '04184930',
    bankName: '洛阳市商业银行',
    patterns: [{ reg: /^(940041)\d{11}$/g }],
  },
  {
    bankCode: '04184930',
    bankName: '洛阳银行',
    patterns: [{ reg: /^(623118)\d{13}$/g }],
  },
  {
    bankCode: '04192310',
    bankName: '辽阳银行股份有限公司',
    patterns: [{ reg: /^(622399)\d{11}$/g }],
  },
  {
    bankCode: '04192310',
    bankName: '辽阳银行股份有限公司',
    patterns: [{ reg: /^(940043)\d{11}$/g }],
  },
  {
    bankCode: '04192310',
    bankName: '辽阳银行股份有限公司',
    patterns: [{ reg: /^(623151)\d{13}$/g }],
  },
  {
    bankCode: '04192310',
    bankName: '辽阳银行股份有限公司',
    patterns: [{ reg: /^(628309)\d{10}$/g }],
  },
  {
    bankCode: '04202220',
    bankName: '大连银行',
    patterns: [{ reg: /^(603708)\d{11}$/g }],
  },
  {
    bankCode: '04202220',
    bankName: '大连银行',
    patterns: [{ reg: /^(622993)\d{13}$/g }],
  },
  {
    bankCode: '04202220',
    bankName: '大连银行',
    patterns: [{ reg: /^(623069)\d{13}$/g }],
  },
  {
    bankCode: '04202220',
    bankName: '大连银行',
    patterns: [{ reg: /^(623172)\d{13}$/g }],
  },
  {
    bankCode: '04202220',
    bankName: '大连银行',
    patterns: [{ reg: /^(623173)\d{13}$/g }],
  },
  {
    bankCode: '04202220',
    bankName: '大连银行',
    patterns: [{ reg: /^(623070)\d{13}$/g }],
  },
  {
    bankCode: '04202221',
    bankName: '大连银行',
    patterns: [{ reg: /^(622385)\d{10}$/g }],
  },
  {
    bankCode: '04202221',
    bankName: '大连银行',
    patterns: [{ reg: /^(628299)\d{10}$/g }],
  },
  {
    bankCode: '04202221',
    bankName: '大连银行',
    patterns: [{ reg: /^(622383)\d{10}$/g }],
  },
  {
    bankCode: '04213050',
    bankName: '苏州市商业银行',
    patterns: [{ reg: /^(603506)\d{13}$/g }],
  },
  {
    bankCode: '04221210',
    bankName: '河北银行股份有限公司',
    patterns: [{ reg: /^(622498)\d{13}$/g }],
  },
  {
    bankCode: '04221210',
    bankName: '河北银行股份有限公司',
    patterns: [{ reg: /^(940046)\d{13}$/g }],
  },
  {
    bankCode: '04221210',
    bankName: '河北银行股份有限公司',
    patterns: [{ reg: /^(623000)\d{13}$/g }],
  },
  {
    bankCode: '04221210',
    bankName: '河北银行股份有限公司',
    patterns: [{ reg: /^(622499)\d{13}$/g }],
  },
  {
    bankCode: '04221219',
    bankName: '河北银行',
    patterns: [{ reg: /^(623582)\d{13}$/g }],
  },
  {
    bankCode: '04221219',
    bankName: '河北银行',
    patterns: [{ reg: /^(62326568)\d{11}$/g }],
  },
  {
    bankCode: '04233310',
    bankName: '杭州商业银行',
    patterns: [{ reg: /^(603367)\d{12}$/g }],
  },
  {
    bankCode: '04233310',
    bankName: '杭州商业银行',
    patterns: [{ reg: /^(622878)\d{12}$/g }],
  },
  {
    bankCode: '04233310',
    bankName: '杭州商业银行',
    patterns: [{ reg: /^(623061)\d{12}$/g }],
  },
  {
    bankCode: '04233310',
    bankName: '杭州商业银行',
    patterns: [{ reg: /^(623209)\d{12}$/g }],
  },
  {
    bankCode: '04233310',
    bankName: '杭州商业银行',
    patterns: [{ reg: /^(62326513)\d{10}$/g }],
  },
  {
    bankCode: '04233310',
    bankName: '杭州商业银行',
    patterns: [{ reg: /^(62326527)\d{11}$/g }],
  },
  {
    bankCode: '04240001',
    bankName: '南京银行',
    patterns: [{ reg: /^(622303)\d{10}$/g }],
  },
  {
    bankCode: '04240001',
    bankName: '南京银行',
    patterns: [{ reg: /^(622596)\d{10}$/g }],
  },
  {
    bankCode: '04240001',
    bankName: '南京银行',
    patterns: [{ reg: /^(622595)\d{10}$/g }],
  },
  {
    bankCode: '04240001',
    bankName: '南京银行',
    patterns: [{ reg: /^(628242)\d{10}$/g }],
  },
  {
    bankCode: '04243010',
    bankName: '南京银行',
    patterns: [{ reg: /^(622305)\d{10}$/g }],
  },
  {
    bankCode: '04243010',
    bankName: '南京银行',
    patterns: [{ reg: /^(621259)\d{10}$/g }],
  },
  {
    bankCode: '04243010',
    bankName: '南京银行',
    patterns: [{ reg: /^(623270)\d{10}$/g }],
  },
  {
    bankCode: '04256020',
    bankName: '东莞市商业银行',
    patterns: [{ reg: /^(622333)\d{10}$/g }],
  },
  {
    bankCode: '04256020',
    bankName: '东莞市商业银行',
    patterns: [{ reg: /^(621439)\d{13}$/g }],
  },
  {
    bankCode: '04256020',
    bankName: '东莞市商业银行',
    patterns: [{ reg: /^(623010)\d{13}$/g }],
  },
  {
    bankCode: '04256020',
    bankName: '东莞市商业银行',
    patterns: [{ reg: /^(940050)\d{10}$/g }],
  },
  {
    bankCode: '04256020',
    bankName: '东莞市商业银行',
    patterns: [{ reg: /^(623278)\d{13}$/g }],
  },
  {
    bankCode: '04263380',
    bankName: '金华银行股份有限公司',
    patterns: [{ reg: /^(622449)\d{10}$/g }],
  },
  {
    bankCode: '04263380',
    bankName: '金华银行股份有限公司',
    patterns: [{ reg: /^(622450)\d{10}$/g }],
  },
  {
    bankCode: '04263380',
    bankName: '金华商业银行',
    patterns: [{ reg: /^(628204)\d{10}$/g }],
  },
  {
    bankCode: '04263380',
    bankName: '金华银行股份有限公司',
    patterns: [{ reg: /^(940051)\d{10}$/g }],
  },
  {
    bankCode: '04263380',
    bankName: '金华银行股份有限公司',
    patterns: [{ reg: /^(623067)\d{10}$/g }],
  },
  {
    bankCode: '04270001',
    bankName: '乌鲁木齐银行',
    patterns: [{ reg: /^(622476)\d{10}$/g }],
  },
  {
    bankCode: '04270001',
    bankName: '乌鲁木齐银行',
    patterns: [{ reg: /^(621751)\d{13}$/g }],
  },
  {
    bankCode: '04270001',
    bankName: '乌鲁木齐银行',
    patterns: [{ reg: /^(628278)\d{10}$/g }],
  },
  {
    bankCode: '04270001',
    bankName: '乌鲁木齐银行',
    patterns: [{ reg: /^(625135)\d{10}$/g }],
  },
  {
    bankCode: '04270001',
    bankName: '乌鲁木齐银行',
    patterns: [{ reg: /^(625502)\d{10}$/g }],
  },
  {
    bankCode: '04270001',
    bankName: '乌鲁木齐银行',
    patterns: [{ reg: /^(625503)\d{10}$/g }],
  },
  {
    bankCode: '04270001',
    bankName: '乌鲁木齐银行',
    patterns: [{ reg: /^(625155)\d{10}$/g }],
  },
  {
    bankCode: '04278810',
    bankName: '乌鲁木齐银行',
    patterns: [{ reg: /^(940001)\d{13}$/g }],
  },
  {
    bankCode: '04278810',
    bankName: '乌鲁木齐银行',
    patterns: [{ reg: /^(622143)\d{13}$/g }],
  },
  {
    bankCode: '04278810',
    bankName: '乌鲁木齐银行',
    patterns: [{ reg: /^(621754)\d{13}$/g }],
  },
  {
    bankCode: '04283370',
    bankName: '绍兴商业银行',
    patterns: [{ reg: /^(622486)\d{10}$/g }],
  },
  {
    bankCode: '04283370',
    bankName: '绍兴银行股份有限公司',
    patterns: [{ reg: /^(603602)\d{12}$/g }],
  },
  {
    bankCode: '04283371',
    bankName: '绍兴银行',
    patterns: [{ reg: /^(623026)\d{10}$/g }],
  },
  {
    bankCode: '04283371',
    bankName: '绍兴银行',
    patterns: [{ reg: /^(623086)\d{10}$/g }],
  },
  {
    bankCode: '04283371',
    bankName: '绍兴银行',
    patterns: [{ reg: /^(62326535)\d{11}$/g }],
  },
  {
    bankCode: '04283379',
    bankName: '绍兴银行',
    patterns: [{ reg: /^(628291)\d{10}$/g }],
  },
  {
    bankCode: '04296510',
    bankName: '成都商业银行',
    patterns: [{ reg: /^(622996)\d{13}$/g }],
  },
  {
    bankCode: '04296510',
    bankName: '成都商业银行',
    patterns: [{ reg: /^(622997)\d{13}$/g }],
  },
  {
    bankCode: '04296510',
    bankName: '成都商业银行',
    patterns: [{ reg: /^(622152)\d{13}$/g }],
  },
  {
    bankCode: '04296510',
    bankName: '成都商业银行',
    patterns: [{ reg: /^(622153)\d{13}$/g }],
  },
  {
    bankCode: '04296510',
    bankName: '成都商业银行',
    patterns: [{ reg: /^(622154)\d{13}$/g }],
  },
  {
    bankCode: '04296510',
    bankName: '成都商业银行',
    patterns: [{ reg: /^(940027)\d{13}$/g }],
  },
  {
    bankCode: '04296510',
    bankName: '成都商业银行',
    patterns: [{ reg: /^(621482)\d{13}$/g }],
  },
  {
    bankCode: '04296510',
    bankName: '成都商业银行',
    patterns: [{ reg: /^(621532)\d{13}$/g }],
  },
  {
    bankCode: '04296510',
    bankName: '成都商业银行',
    patterns: [{ reg: /^(622135)\d{13}$/g }],
  },
  {
    bankCode: '04302240',
    bankName: '抚顺银行股份有限公司',
    patterns: [{ reg: /^(940053)\d{12}$/g }],
  },
  {
    bankCode: '04302240',
    bankName: '抚顺银行股份有限公司',
    patterns: [{ reg: /^(622442)\d{13}$/g }],
  },
  {
    bankCode: '04302240',
    bankName: '抚顺银行股份有限公司',
    patterns: [{ reg: /^(622442)\d{11}$/g }],
  },
  {
    bankCode: '04302248',
    bankName: '抚顺银行',
    patterns: [{ reg: /^(623099)\d{13}$/g }],
  },
  {
    bankCode: '04302248',
    bankName: '抚顺银行',
    patterns: [{ reg: /^(62326555)\d{11}$/g }],
  },
  {
    bankCode: '04302249',
    bankName: '抚顺银行',
    patterns: [{ reg: /^(628302)\d{10}$/g }],
  },
  {
    bankCode: '04314730',
    bankName: '临商银行',
    patterns: [{ reg: /^(622359)\d{13}$/g }],
  },
  {
    bankCode: '04314730',
    bankName: '临商银行',
    patterns: [{ reg: /^(940066)\d{13}$/g }],
  },
  {
    bankCode: '04314730',
    bankName: '临商银行',
    patterns: [{ reg: /^(623007)\d{13}$/g }],
  },
  {
    bankCode: '04325210',
    bankName: '宜昌市商业银行',
    patterns: [{ reg: /^(940055)\d{11}$/g }],
  },
  {
    bankCode: '04325261',
    bankName: '宜昌市商业银行',
    patterns: [{ reg: /^(622397)\d{10}$/g }],
  },
  {
    bankCode: '04332350',
    bankName: '葫芦岛市商业银行',
    patterns: [{ reg: /^(622398)\d{10}$/g }],
  },
  {
    bankCode: '04332350',
    bankName: '葫芦岛市商业银行',
    patterns: [{ reg: /^(940054)\d{10}$/g }],
  },
  {
    bankCode: '04332369',
    bankName: '葫芦岛银行',
    patterns: [{ reg: /^(623598)\d{10}$/g }],
  },
  {
    bankCode: '04341100',
    bankName: '天津银行',
    patterns: [{ reg: /^(6091201)\d{11}$/g }],
  },
  {
    bankCode: '04341100',
    bankName: '天津市商业银行',
    patterns: [{ reg: /^(940015)\d{12}$/g }],
  },
  {
    bankCode: '04341100',
    bankName: '天津银行',
    patterns: [{ reg: /^(622331)\d{12}$/g }],
  },
  {
    bankCode: '04341100',
    bankName: '天津银行',
    patterns: [{ reg: /^(621452)\d{12}$/g }],
  },
  {
    bankCode: '04341100',
    bankName: '天津银行',
    patterns: [{ reg: /^(623574)\d{12}$/g }],
  },
  {
    bankCode: '04341100',
    bankName: '天津银行',
    patterns: [{ reg: /^(623554)\d{12}$/g }],
  },
  {
    bankCode: '04341101',
    bankName: '天津银行',
    patterns: [{ reg: /^(622426)\d{10}$/g }],
  },
  {
    bankCode: '04341101',
    bankName: '天津银行',
    patterns: [{ reg: /^(625995)\d{10}$/g }],
  },
  {
    bankCode: '04341101',
    bankName: '天津银行',
    patterns: [{ reg: /^(628205)\d{10}$/g }],
  },
  {
    bankCode: '04354910',
    bankName: '郑州银行股份有限公司',
    patterns: [{ reg: /^(96828)\d{11}$/g }],
  },
  {
    bankCode: '04354910',
    bankName: '郑州商业银行',
    patterns: [{ reg: /^(940056)\d{11}$/g }],
  },
  {
    bankCode: '04354910',
    bankName: '郑州银行股份有限公司',
    patterns: [{ reg: /^(623531)\d{13}$/g }],
  },
  {
    bankCode: '04354910',
    bankName: '郑州银行股份有限公司',
    patterns: [{ reg: /^(622421)\d{13}$/g }],
  },
  {
    bankCode: '04354910',
    bankName: '郑州银行股份有限公司',
    patterns: [{ reg: /^(62326540)\d{11}$/g }],
  },
  {
    bankCode: '04360010',
    bankName: '宁夏银行',
    patterns: [{ reg: /^(622428)\d{10}$/g }],
  },
  {
    bankCode: '04360010',
    bankName: '宁夏银行',
    patterns: [{ reg: /^(621417)\d{13}$/g }],
  },
  {
    bankCode: '04360010',
    bankName: '宁夏银行',
    patterns: [{ reg: /^(625529)\d{10}$/g }],
  },
  {
    bankCode: '04360010',
    bankName: '宁夏银行',
    patterns: [{ reg: /^(623089)\d{13}$/g }],
  },
  {
    bankCode: '04360010',
    bankName: '宁夏银行',
    patterns: [{ reg: /^(625335)\d{10}$/g }],
  },
  {
    bankCode: '04360010',
    bankName: '宁夏银行',
    patterns: [{ reg: /^(628214)\d{10}$/g }],
  },
  {
    bankCode: '04360010',
    bankName: '宁夏银行',
    patterns: [{ reg: /^(623200)\d{13}$/g }],
  },
  {
    bankCode: '04360010',
    bankName: '宁夏银行',
    patterns: [{ reg: /^(62326574)\d{11}$/g }],
  },
  {
    bankCode: '04368710',
    bankName: '宁夏银行',
    patterns: [{ reg: /^(622429)\d{13}$/g }],
  },
  {
    bankCode: '04368710',
    bankName: '宁夏银行',
    patterns: [{ reg: /^(940045)\d{13}$/g }],
  },
  {
    bankCode: '04368710',
    bankName: '宁夏银行',
    patterns: [{ reg: /^(621529)\d{13}$/g }],
  },
  {
    bankCode: '04375850',
    bankName: '珠海华润银行股份有限公司',
    patterns: [{ reg: /^(622363)\d{13}$/g }],
  },
  {
    bankCode: '04375850',
    bankName: '珠海华润银行股份有限公司',
    patterns: [{ reg: /^(940048)\d{13}$/g }],
  },
  {
    bankCode: '04375850',
    bankName: '珠海华润银行股份有限公司',
    patterns: [{ reg: /^(621455)\d{13}$/g }],
  },
  {
    bankCode: '04384530',
    bankName: '齐商银行',
    patterns: [{ reg: /^(623119)\d{13}$/g }],
  },
  {
    bankCode: '04392270',
    bankName: '锦州市商业银行',
    patterns: [{ reg: /^(940003)\d{11}$/g }],
  },
  {
    bankCode: '04392270',
    bankName: '锦州银行股份有限公司',
    patterns: [{ reg: /^(622990)\d{11}$/g }],
  },
  {
    bankCode: '04392270',
    bankName: '锦州银行股份有限公司',
    patterns: [{ reg: /^(623568)\d{13}$/g }],
  },
  {
    bankCode: '04403600',
    bankName: '徽商银行',
    patterns: [{ reg: /^(603601)\d{11}$/g }],
  },
  {
    bankCode: '04403600',
    bankName: '徽商银行',
    patterns: [{ reg: /^(622877)\d{13}$/g }],
  },
  {
    bankCode: '04403600',
    bankName: '徽商银行',
    patterns: [{ reg: /^(622879)\d{13}$/g }],
  },
  {
    bankCode: '04403600',
    bankName: '徽商银行',
    patterns: [{ reg: /^(623291)\d{13}$/g }],
  },
  {
    bankCode: '04403601',
    bankName: '徽商银行',
    patterns: [{ reg: /^(621775)\d{13}$/g }],
  },
  {
    bankCode: '04403601',
    bankName: '徽商银行',
    patterns: [{ reg: /^(623203)\d{13}$/g }],
  },
  {
    bankCode: '04403620',
    bankName: '徽商银行芜湖分行',
    patterns: [{ reg: /^(622137)\d{11}$/g }],
  },
  {
    bankCode: '04403650',
    bankName: '徽商银行马鞍山分行',
    patterns: [{ reg: /^(622327)\d{11}$/g }],
  },
  {
    bankCode: '04403660',
    bankName: '徽商银行淮北分行',
    patterns: [{ reg: /^(622340)\d{11}$/g }],
  },
  {
    bankCode: '04403680',
    bankName: '徽商银行安庆分行',
    patterns: [{ reg: /^(622366)\d{11}$/g }],
  },
  {
    bankCode: '04416900',
    bankName: '重庆银行',
    patterns: [{ reg: /^(9896)\d{12}$/g }],
  },
  {
    bankCode: '04416900',
    bankName: '重庆银行',
    patterns: [{ reg: /^(940018)\d{10}$/g }],
  },
  {
    bankCode: '04416900',
    bankName: '重庆银行',
    patterns: [{ reg: /^(622134)\d{10}$/g }],
  },
  {
    bankCode: '04416900',
    bankName: '重庆银行',
    patterns: [{ reg: /^(623016)\d{10}$/g }],
  },
  {
    bankCode: '04416900',
    bankName: '重庆银行',
    patterns: [{ reg: /^(623096)\d{13}$/g }],
  },
  {
    bankCode: '04422610',
    bankName: '哈尔滨银行',
    patterns: [{ reg: /^(622425)\d{11}$/g }],
  },
  {
    bankCode: '04422610',
    bankName: '哈尔滨银行',
    patterns: [{ reg: /^(622425)\d{13}$/g }],
  },
  {
    bankCode: '04422610',
    bankName: '哈尔滨银行',
    patterns: [{ reg: /^(940049)\d{12}$/g }],
  },
  {
    bankCode: '04422610',
    bankName: '哈尔滨银行',
    patterns: [{ reg: /^(62326501)\d{11}$/g }],
  },
  {
    bankCode: '04422610',
    bankName: '哈尔滨银行',
    patterns: [{ reg: /^(621577)\d{13}$/g }],
  },
  {
    bankCode: '04437010',
    bankName: '贵阳银行股份有限公司',
    patterns: [{ reg: /^(888)\d{13}$/g }],
  },
  {
    bankCode: '04437010',
    bankName: '贵阳银行股份有限公司',
    patterns: [{ reg: /^(622133)\d{13}$/g }],
  },
  {
    bankCode: '04437010',
    bankName: '贵阳银行股份有限公司',
    patterns: [{ reg: /^(62326519)\d{11}$/g }],
  },
  {
    bankCode: '04437010',
    bankName: '贵阳银行股份有限公司',
    patterns: [{ reg: /^(621552)\d{13}$/g }],
  },
  {
    bankCode: '04437010',
    bankName: '贵阳银行股份有限公司',
    patterns: [{ reg: /^(622170)\d{13}$/g }],
  },
  {
    bankCode: '04437010',
    bankName: '贵阳银行股份有限公司',
    patterns: [{ reg: /^(621735)\d{13}$/g }],
  },
  {
    bankCode: '04447910',
    bankName: '西安银行股份有限公司',
    patterns: [{ reg: /^(622136)\d{12}$/g }],
  },
  {
    bankCode: '04447910',
    bankName: '西安银行股份有限公司',
    patterns: [{ reg: /^(622981)\d{12}$/g }],
  },
  {
    bankCode: '04447910',
    bankName: '西安银行股份有限公司',
    patterns: [{ reg: /^(623165)\d{12}$/g }],
  },
  {
    bankCode: '04447910',
    bankName: '西安银行股份有限公司',
    patterns: [{ reg: /^(623277)\d{12}$/g }],
  },
  {
    bankCode: '04453020',
    bankName: '无锡市商业银行',
    patterns: [{ reg: /^(60326500)\d{8}$/g }],
  },
  {
    bankCode: '04453020',
    bankName: '无锡市商业银行',
    patterns: [{ reg: /^(60326513)\d{10}$/g }],
  },
  {
    bankCode: '04453020',
    bankName: '无锡市商业银行',
    patterns: [{ reg: /^(622485)\d{12}$/g }],
  },
  {
    bankCode: '04462260',
    bankName: '丹东银行股份有限公司',
    patterns: [{ reg: /^(622415)\d{10}$/g }],
  },
  {
    bankCode: '04462260',
    bankName: '丹东银行股份有限公司',
    patterns: [{ reg: /^(940060)\d{10}$/g }],
  },
  {
    bankCode: '04462262',
    bankName: '丹东银行',
    patterns: [{ reg: /^(623098)\d{13}$/g }],
  },
  {
    bankCode: '04462262',
    bankName: '丹东银行',
    patterns: [{ reg: /^(62326533)\d{11}$/g }],
  },
  {
    bankCode: '04462269',
    bankName: '丹东银行',
    patterns: [{ reg: /^(628329)\d{10}$/g }],
  },
  {
    bankCode: '04462269',
    bankName: '丹东银行',
    patterns: [{ reg: /^(625190)\d{10}$/g }],
  },
  {
    bankCode: '04478210',
    bankName: '兰州银行股份有限公司',
    patterns: [{ reg: /^(622139)\d{10}$/g }],
  },
  {
    bankCode: '04478210',
    bankName: '兰州银行股份有限公司',
    patterns: [{ reg: /^(621242)\d{13}$/g }],
  },
  {
    bankCode: '04478210',
    bankName: '兰州市商业银行',
    patterns: [{ reg: /^(940040)\d{10}$/g }],
  },
  {
    bankCode: '04478210',
    bankName: '兰州银行',
    patterns: [{ reg: /^(621538)\d{13}$/g }],
  },
  {
    bankCode: '04478210',
    bankName: '兰州银行股份有限公司',
    patterns: [{ reg: /^(621496)\d{13}$/g }],
  },
  {
    bankCode: '04478210',
    bankName: '兰州银行股份有限公司',
    patterns: [{ reg: /^(623129)\d{13}$/g }],
  },
  {
    bankCode: '04478210',
    bankName: '兰州银行股份有限公司',
    patterns: [{ reg: /^(623541)\d{13}$/g }],
  },
  {
    bankCode: '04478210',
    bankName: '兰州银行股份有限公司',
    patterns: [{ reg: /^(623275)\d{13}$/g }],
  },
  {
    bankCode: '04484210',
    bankName: '江西银行',
    patterns: [{ reg: /^(622275)\d{10}$/g }],
  },
  {
    bankCode: '04484210',
    bankName: '江西银行',
    patterns: [{ reg: /^(940006)\d{11}$/g }],
  },
  {
    bankCode: '04484210',
    bankName: '江西银行',
    patterns: [{ reg: /^(621269)\d{10}$/g }],
  },
  {
    bankCode: '04484210',
    bankName: '江西银行',
    patterns: [{ reg: /^(62326522)\d{8}$/g }],
  },
  {
    bankCode: '04484210',
    bankName: '江西银行',
    patterns: [{ reg: /^(621359)\d{12}$/g }],
  },
  {
    bankCode: '04491610',
    bankName: '太原市商业银行',
    patterns: [{ reg: /^(622465)\d{11}$/g }],
  },
  {
    bankCode: '04491610',
    bankName: '太原市商业银行',
    patterns: [{ reg: /^(940031)\d{11}$/g }],
  },
  {
    bankCode: '04491610',
    bankName: '晋商银行',
    patterns: [{ reg: /^(623179)\d{13}$/g }],
  },
  {
    bankCode: '04491610',
    bankName: '晋商银行',
    patterns: [{ reg: /^(621216)\d{13}$/g }],
  },
  {
    bankCode: '04491610',
    bankName: '晋商银行',
    patterns: [{ reg: /^(62326538)\d{11}$/g }],
  },
  {
    bankCode: '04504520',
    bankName: '青岛银行',
    patterns: [{ reg: /^(622146)\d{10}$/g }],
  },
  {
    bankCode: '04504520',
    bankName: '青岛银行',
    patterns: [{ reg: /^(621252)\d{10}$/g }],
  },
  {
    bankCode: '04504520',
    bankName: '青岛银行',
    patterns: [{ reg: /^(940061)\d{10}$/g }],
  },
  {
    bankCode: '04504520',
    bankName: '青岛银行',
    patterns: [{ reg: /^(623170)\d{13}$/g }],
  },
  {
    bankCode: '04504520',
    bankName: '青岛银行',
    patterns: [{ reg: /^(621419)\d{13}$/g }],
  },
  {
    bankCode: '04504520',
    bankName: '青岛银行',
    patterns: [{ reg: /^(620551)\d{13}$/g }],
  },
  {
    bankCode: '04512420',
    bankName: '吉林银行',
    patterns: [{ reg: /^(622440)\d{10}$/g }],
  },
  {
    bankCode: '04512420',
    bankName: '吉林银行',
    patterns: [{ reg: /^(940047)\d{10}$/g }],
  },
  {
    bankCode: '04523060',
    bankName: '南通商业银行',
    patterns: [{ reg: /^(69580)\d{13}$/g }],
  },
  {
    bankCode: '04523060',
    bankName: '南通商业银行',
    patterns: [{ reg: /^(622418)\d{10}$/g }],
  },
  {
    bankCode: '04523060',
    bankName: '南通商业银行',
    patterns: [{ reg: /^(940017)\d{12}$/g }],
  },
  {
    bankCode: '04544240',
    bankName: '九江银行股份有限公司',
    patterns: [{ reg: /^(622162)\d{13}$/g }],
  },
  {
    bankCode: '04544240',
    bankName: '九江银行股份有限公司',
    patterns: [{ reg: /^(622307)\d{13}$/g }],
  },
  {
    bankCode: '04544240',
    bankName: '九江银行股份有限公司',
    patterns: [{ reg: /^(623146)\d{13}$/g }],
  },
  {
    bankCode: '04554770',
    bankName: '日照银行',
    patterns: [{ reg: /^(940065)\d{13}$/g }],
  },
  {
    bankCode: '04554770',
    bankName: '日照银行',
    patterns: [{ reg: /^(623077)\d{13}$/g }],
  },
  {
    bankCode: '04554770',
    bankName: '日照银行',
    patterns: [{ reg: /^(622857)\d{13}$/g }],
  },
  {
    bankCode: '04562230',
    bankName: '鞍山银行',
    patterns: [{ reg: /^(622413)\d{10}$/g }],
  },
  {
    bankCode: '04562230',
    bankName: '鞍山银行',
    patterns: [{ reg: /^(940002)\d{10}$/g }],
  },
  {
    bankCode: '04562239',
    bankName: '鞍山银行',
    patterns: [{ reg: /^(623188)\d{10}$/g }],
  },
  {
    bankCode: '04571260',
    bankName: '秦皇岛银行股份有限公司',
    patterns: [{ reg: /^(621237)\d{13}$/g }],
  },
  {
    bankCode: '04571260',
    bankName: '秦皇岛银行股份有限公司',
    patterns: [{ reg: /^(94004602)\d{11}$/g }],
  },
  {
    bankCode: '04571260',
    bankName: '秦皇岛银行股份有限公司',
    patterns: [{ reg: /^(62249802)\d{11}$/g }],
  },
  {
    bankCode: '04571261',
    bankName: '秦皇岛银行股份有限公司',
    patterns: [{ reg: /^(623003)\d{13}$/g }],
  },
  {
    bankCode: '04571269',
    bankName: '秦皇岛银行',
    patterns: [{ reg: /^(628357)\d{10}$/g }],
  },
  {
    bankCode: '04588510',
    bankName: '青海银行',
    patterns: [{ reg: /^(622310)\d{11}$/g }],
  },
  {
    bankCode: '04588510',
    bankName: '青海银行',
    patterns: [{ reg: /^(940068)\d{11}$/g }],
  },
  {
    bankCode: '04588510',
    bankName: '青海银行',
    patterns: [{ reg: /^(623599)\d{11}$/g }],
  },
  {
    bankCode: '04588510',
    bankName: '青海银行',
    patterns: [{ reg: /^(623670)\d{11}$/g }],
  },
  {
    bankCode: '04593450',
    bankName: '台州银行',
    patterns: [{ reg: /^(625001)\d{10}$/g }],
  },
  {
    bankCode: '04593450',
    bankName: '台州银行',
    patterns: [{ reg: /^(622321)\d{10}$/g }],
  },
  {
    bankCode: '04593451',
    bankName: '台州银行',
    patterns: [{ reg: /^(622427)\d{10}$/g }],
  },
  {
    bankCode: '04593451',
    bankName: '台州银行',
    patterns: [{ reg: /^(628273)\d{10}$/g }],
  },
  {
    bankCode: '04593451',
    bankName: '台州银行',
    patterns: [{ reg: /^(623039)\d{13}$/g }],
  },
  {
    bankCode: '04593451',
    bankName: '台州银行',
    patterns: [{ reg: /^(940069)\d{11}$/g }],
  },
  {
    bankCode: '04603110',
    bankName: '盐城商行',
    patterns: [{ reg: /^(940070)\d{10}$/g }],
  },
  {
    bankCode: '04615510',
    bankName: '长沙银行股份有限公司',
    patterns: [{ reg: /^(694301)\d{12}$/g }],
  },
  {
    bankCode: '04615510',
    bankName: '长沙银行股份有限公司',
    patterns: [{ reg: /^(622368)\d{13}$/g }],
  },
  {
    bankCode: '04615510',
    bankName: '长沙银行股份有限公司',
    patterns: [{ reg: /^(940071)\d{13}$/g }],
  },
  {
    bankCode: '04615510',
    bankName: '长沙银行股份有限公司',
    patterns: [{ reg: /^(621446)\d{13}$/g }],
  },
  {
    bankCode: '04615511',
    bankName: '长沙银行股份有限公司',
    patterns: [{ reg: /^(622898)\d{10}$/g }],
  },
  {
    bankCode: '04615511',
    bankName: '长沙银行股份有限公司',
    patterns: [{ reg: /^(622900)\d{10}$/g }],
  },
  {
    bankCode: '04615511',
    bankName: '长沙银行股份有限公司',
    patterns: [{ reg: /^(628281)\d{10}$/g }],
  },
  {
    bankCode: '04615511',
    bankName: '长沙银行股份有限公司',
    patterns: [{ reg: /^(628282)\d{10}$/g }],
  },
  {
    bankCode: '04615511',
    bankName: '长沙银行股份有限公司',
    patterns: [{ reg: /^(628283)\d{10}$/g }],
  },
  {
    bankCode: '04615511',
    bankName: '长沙银行股份有限公司',
    patterns: [{ reg: /^(622806)\d{10}$/g }],
  },
  {
    bankCode: '04615511',
    bankName: '长沙银行股份有限公司',
    patterns: [{ reg: /^(621739)\d{13}$/g }],
  },
  {
    bankCode: '04615511',
    bankName: '长沙银行股份有限公司',
    patterns: [{ reg: /^(620519)\d{13}$/g }],
  },
  {
    bankCode: '04615511',
    bankName: '长沙银行股份有限公司',
    patterns: [{ reg: /^(625901)\d{10}$/g }],
  },
  {
    bankCode: '04624580',
    bankName: '潍坊银行',
    patterns: [{ reg: /^(622391)\d{10}$/g }],
  },
  {
    bankCode: '04624580',
    bankName: '潍坊银行',
    patterns: [{ reg: /^(940072)\d{10}$/g }],
  },
  {
    bankCode: '04624580',
    bankName: '潍坊银行',
    patterns: [{ reg: /^(62326529)\d{11}$/g }],
  },
  {
    bankCode: '04634280',
    bankName: '赣州银行股份有限公司',
    patterns: [{ reg: /^(622967)\d{13}$/g }],
  },
  {
    bankCode: '04634280',
    bankName: '赣州银行股份有限公司',
    patterns: [{ reg: /^(940073)\d{13}$/g }],
  },
  {
    bankCode: '04634280',
    bankName: '赣州银行股份有限公司',
    patterns: [{ reg: /^(623127)\d{13}$/g }],
  },
  {
    bankCode: '04643970',
    bankName: '泉州银行',
    patterns: [{ reg: /^(683970)\d{12}$/g }],
  },
  {
    bankCode: '04643970',
    bankName: '泉州银行',
    patterns: [{ reg: /^(622370)\d{13}$/g }],
  },
  {
    bankCode: '04643970',
    bankName: '泉州银行',
    patterns: [{ reg: /^(621437)\d{13}$/g }],
  },
  {
    bankCode: '04643970',
    bankName: '泉州银行',
    patterns: [{ reg: /^(628319)\d{10}$/g }],
  },
  {
    bankCode: '04643970',
    bankName: '泉州银行',
    patterns: [{ reg: /^(940074)\d{12}$/g }],
  },
  {
    bankCode: '04652280',
    bankName: '营口银行股份有限公司',
    patterns: [{ reg: /^(622400)\d{11}$/g }],
  },
  {
    bankCode: '04652280',
    bankName: '营口银行股份有限公司',
    patterns: [{ reg: /^(623177)\d{13}$/g }],
  },
  {
    bankCode: '04652280',
    bankName: '营口银行股份有限公司',
    patterns: [{ reg: /^(62326582)\d{11}$/g }],
  },
  {
    bankCode: '04667310',
    bankName: '昆明商业银行',
    patterns: [{ reg: /^(990871)\d{12}$/g }],
  },
  {
    bankCode: '04667310',
    bankName: '昆明商业银行',
    patterns: [{ reg: /^(622308)\d{11}$/g }],
  },
  {
    bankCode: '04667310',
    bankName: '昆明商业银行',
    patterns: [{ reg: /^(621415)\d{13}$/g }],
  },
  {
    bankCode: '04672290',
    bankName: '阜新市商业银行',
    patterns: [{ reg: /^(622126)\d{12}$/g }],
  },
  {
    bankCode: '04672299',
    bankName: '阜新银行',
    patterns: [{ reg: /^(623166)\d{12}$/g }],
  },
  {
    bankCode: '04672299',
    bankName: '阜新银行',
    patterns: [{ reg: /^(62326552)\d{11}$/g }],
  },
  {
    bankCode: '04703350',
    bankName: '嘉兴银行',
    patterns: [{ reg: /^(622132)\d{10}$/g }],
  },
  {
    bankCode: '04721460',
    bankName: '廊坊银行',
    patterns: [{ reg: /^(622140)\d{10}$/g }],
  },
  {
    bankCode: '04721460',
    bankName: '廊坊银行',
    patterns: [{ reg: /^(621340)\d{10}$/g }],
  },
  {
    bankCode: '04721460',
    bankName: '廊坊银行',
    patterns: [{ reg: /^(621341)\d{10}$/g }],
  },
  {
    bankCode: '04721460',
    bankName: '廊坊银行',
    patterns: [{ reg: /^(623073)\d{10}$/g }],
  },
  {
    bankCode: '04733450',
    bankName: '泰隆城市信用社',
    patterns: [{ reg: /^(622141)\d{10}$/g }],
  },
  {
    bankCode: '04733450',
    bankName: '泰隆城市信用社',
    patterns: [{ reg: /^(621480)\d{13}$/g }],
  },
  {
    bankCode: '04741910',
    bankName: '内蒙古银行',
    patterns: [{ reg: /^(621633)\d{13}$/g }],
  },
  {
    bankCode: '04741910',
    bankName: '内蒙古银行',
    patterns: [{ reg: /^(623057)\d{13}$/g }],
  },
  {
    bankCode: '04741910',
    bankName: '内蒙古银行',
    patterns: [{ reg: /^(62326525)\d{11}$/g }],
  },
  {
    bankCode: '04741910',
    bankName: '呼市商业银行',
    patterns: [{ reg: /^(622147)\d{13}$/g }],
  },
  {
    bankCode: '04753360',
    bankName: '湖州市商业银行',
    patterns: [{ reg: /^(622301)\d{13}$/g }],
  },
  {
    bankCode: '04753360',
    bankName: '湖州市商业银行',
    patterns: [{ reg: /^(623171)\d{13}$/g }],
  },
  {
    bankCode: '04761430',
    bankName: '沧州银行股份有限公司',
    patterns: [{ reg: /^(62249804)\d{11}$/g }],
  },
  {
    bankCode: '04761430',
    bankName: '沧州银行股份有限公司',
    patterns: [{ reg: /^(94004604)\d{11}$/g }],
  },
  {
    bankCode: '04761430',
    bankName: '沧州银行股份有限公司',
    patterns: [{ reg: /^(621266)\d{13}$/g }],
  },
  {
    bankCode: '04761431',
    bankName: '沧州银行',
    patterns: [{ reg: /^(621422)\d{13}$/g }],
  },
  {
    bankCode: '04761431',
    bankName: '沧州银行',
    patterns: [{ reg: /^(62326559)\d{11}$/g }],
  },
  {
    bankCode: '04761432',
    bankName: '沧州银行',
    patterns: [{ reg: /^(628395)\d{10}$/g }],
  },
  {
    bankCode: '04786110',
    bankName: '南宁市商业银行',
    patterns: [{ reg: /^(622335)\d{10}$/g }],
  },
  {
    bankCode: '04786110',
    bankName: '南宁市商业银行',
    patterns: [{ reg: /^(623001)\d{10}$/g }],
  },
  {
    bankCode: '04791920',
    bankName: '包商银行',
    patterns: [{ reg: /^(622336)\d{11}$/g }],
  },
  {
    bankCode: '04791920',
    bankName: '包商银行',
    patterns: [{ reg: /^(621760)\d{11}$/g }],
  },
  {
    bankCode: '04791920',
    bankName: '包商银行',
    patterns: [{ reg: /^(623273)\d{11}$/g }],
  },
  {
    bankCode: '04791920',
    bankName: '包商银行',
    patterns: [{ reg: /^(623592)\d{13}$/g }],
  },
  {
    bankCode: '04791920',
    bankName: '包商银行',
    patterns: [{ reg: /^(623631)\d{13}$/g }],
  },
  {
    bankCode: '04791921',
    bankName: '包商银行',
    patterns: [{ reg: /^(622165)\d{10}$/g }],
  },
  {
    bankCode: '04791921',
    bankName: '包商银行',
    patterns: [{ reg: /^(622315)\d{10}$/g }],
  },
  {
    bankCode: '04791921',
    bankName: '包商银行',
    patterns: [{ reg: /^(628295)\d{10}$/g }],
  },
  {
    bankCode: '04791921',
    bankName: '包商银行',
    patterns: [{ reg: /^(623210)\d{10}$/g }],
  },
  {
    bankCode: '04791921',
    bankName: '包商银行',
    patterns: [{ reg: /^(625359)\d{10}$/g }],
  },
  {
    bankCode: '04791921',
    bankName: '包商银行',
    patterns: [{ reg: /^(625950)\d{10}$/g }],
  },
  {
    bankCode: '04803070',
    bankName: '连云港市商业银行',
    patterns: [{ reg: /^(622337)\d{10}$/g }],
  },
  {
    bankCode: '04814650',
    bankName: '威海商业银行',
    patterns: [{ reg: /^(622411)\d{10}$/g }],
  },
  {
    bankCode: '04814650',
    bankName: '威海商业银行',
    patterns: [{ reg: /^(623102)\d{13}$/g }],
  },
  {
    bankCode: '04836560',
    bankName: '攀枝花市商业银行',
    patterns: [{ reg: /^(622342)\d{13}$/g }],
  },
  {
    bankCode: '04836560',
    bankName: '攀枝花市商业银行',
    patterns: [{ reg: /^(623048)\d{13}$/g }],
  },
  {
    bankCode: '04856590',
    bankName: '绵阳市商业银行',
    patterns: [{ reg: /^(622367)\d{13}$/g }],
  },
  {
    bankCode: '04866570',
    bankName: '泸州市商业银行',
    patterns: [{ reg: /^(622392)\d{13}$/g }],
  },
  {
    bankCode: '04866570',
    bankName: '泸州市商业银行',
    patterns: [{ reg: /^(623085)\d{13}$/g }],
  },
  {
    bankCode: '04871620',
    bankName: '大同银行',
    patterns: [{ reg: /^(622925)\d{13}$/g }],
  },
  {
    bankCode: '04871620',
    bankName: '大同银行',
    patterns: [{ reg: /^(622395)\d{13}$/g }],
  },
  {
    bankCode: '04895910',
    bankName: '广东南粤银行',
    patterns: [{ reg: /^(622448)\d{10}$/g }],
  },
  {
    bankCode: '04895910',
    bankName: '广东南粤银行',
    patterns: [{ reg: /^(623595)\d{13}$/g }],
  },
  {
    bankCode: '04895910',
    bankName: '广东南粤银行',
    patterns: [{ reg: /^(62326571)\d{11}$/g }],
  },
  {
    bankCode: '04901380',
    bankName: '张家口银行',
    patterns: [{ reg: /^(622982)\d{13}$/g }],
  },
  {
    bankCode: '04901381',
    bankName: '张家口银行',
    patterns: [{ reg: /^(621413)\d{13}$/g }],
  },
  {
    bankCode: '04916170',
    bankName: '桂林银行',
    patterns: [{ reg: /^(622856)\d{11}$/g }],
  },
  {
    bankCode: '04916170',
    bankName: '桂林银行',
    patterns: [{ reg: /^(621456)\d{11}$/g }],
  },
  {
    bankCode: '04916170',
    bankName: '桂林银行',
    patterns: [{ reg: /^(621562)\d{13}$/g }],
  },
  {
    bankCode: '04916170',
    bankName: '桂林银行',
    patterns: [{ reg: /^(623221)\d{11}$/g }],
  },
  {
    bankCode: '04916170',
    bankName: '桂林银行',
    patterns: [{ reg: /^(62326545)\d{11}$/g }],
  },
  {
    bankCode: '04922600',
    bankName: '龙江银行',
    patterns: [{ reg: /^(621588)\d{13}$/g }],
  },
  {
    bankCode: '04922600',
    bankName: '龙江银行',
    patterns: [{ reg: /^(621037)\d{13}$/g }],
  },
  {
    bankCode: '04922600',
    bankName: '龙江银行',
    patterns: [{ reg: /^(621097)\d{13}$/g }],
  },
  {
    bankCode: '04922600',
    bankName: '龙江银行',
    patterns: [{ reg: /^(622860)\d{10}$/g }],
  },
  {
    bankCode: '04922600',
    bankName: '龙江银行',
    patterns: [{ reg: /^(622644)\d{13}$/g }],
  },
  {
    bankCode: '04922600',
    bankName: '龙江银行',
    patterns: [{ reg: /^(623032)\d{13}$/g }],
  },
  {
    bankCode: '04922600',
    bankName: '龙江银行',
    patterns: [{ reg: /^(62326503)\d{11}$/g }],
  },
  {
    bankCode: '04922600',
    bankName: '龙江银行',
    patterns: [{ reg: /^(623216)\d{13}$/g }],
  },
  {
    bankCode: '04922600',
    bankName: '龙江银行',
    patterns: [{ reg: /^(623518)\d{13}$/g }],
  },
  {
    bankCode: '04933160',
    bankName: '江苏长江商业银行',
    patterns: [{ reg: /^(622870)\d{10}$/g }],
  },
  {
    bankCode: '04933160',
    bankName: '江苏长江商业银行',
    patterns: [{ reg: /^(623150)\d{10}$/g }],
  },
  {
    bankCode: '04943030',
    bankName: '徐州市商业银行',
    patterns: [{ reg: /^(622866)\d{10}$/g }],
  },
  {
    bankCode: '04956140',
    bankName: '柳州银行股份有限公司',
    patterns: [{ reg: /^(622881)\d{10}$/g }],
  },
  {
    bankCode: '04956140',
    bankName: '柳州银行股份有限公司',
    patterns: [{ reg: /^(622291)\d{12}$/g }],
  },
  {
    bankCode: '04956140',
    bankName: '柳州银行股份有限公司',
    patterns: [{ reg: /^(621412)\d{12}$/g }],
  },
  {
    bankCode: '04956140',
    bankName: '柳州银行股份有限公司',
    patterns: [{ reg: /^(622292)\d{12}$/g }],
  },
  {
    bankCode: '04956140',
    bankName: '柳州银行股份有限公司',
    patterns: [{ reg: /^(620118)\d{10}$/g }],
  },
  {
    bankCode: '04956140',
    bankName: '柳州银行股份有限公司',
    patterns: [{ reg: /^(622880)\d{10}$/g }],
  },
  {
    bankCode: '04966730',
    bankName: '四川天府银行',
    patterns: [{ reg: /^(622897)\d{13}$/g }],
  },
  {
    bankCode: '04966730',
    bankName: '四川天府银行',
    patterns: [{ reg: /^(623072)\d{13}$/g }],
  },
  {
    bankCode: '04966730',
    bankName: '四川天府银行',
    patterns: [{ reg: /^(623285)\d{13}$/g }],
  },
  {
    bankCode: '04974634',
    bankName: '莱芜银行',
    patterns: [{ reg: /^(622864)\d{10}$/g }],
  },
  {
    bankCode: '04974634',
    bankName: '莱商银行',
    patterns: [{ reg: /^(628279)\d{10}$/g }],
  },
  {
    bankCode: '04974790',
    bankName: '莱商银行',
    patterns: [{ reg: /^(621403)\d{13}$/g }],
  },
  {
    bankCode: '04974790',
    bankName: '莱商银行',
    patterns: [{ reg: /^(62326526)\d{11}$/g }],
  },
  {
    bankCode: '04986580',
    bankName: '长城华西银行',
    patterns: [{ reg: /^(622561)\d{13}$/g }],
  },
  {
    bankCode: '04986580',
    bankName: '长城华西银行',
    patterns: [{ reg: /^(622563)\d{13}$/g }],
  },
  {
    bankCode: '04986580',
    bankName: '长城华西银行',
    patterns: [{ reg: /^(622562)\d{13}$/g }],
  },
  {
    bankCode: '04986580',
    bankName: '长城华西银行',
    patterns: [{ reg: /^(623264)\d{13}$/g }],
  },
  {
    bankCode: '04986580',
    bankName: '长城华西银行',
    patterns: [{ reg: /^(623137)\d{13}$/g }],
  },
  {
    bankCode: '04991240',
    bankName: '唐山银行',
    patterns: [{ reg: /^(622167)\d{13}$/g }],
  },
  {
    bankCode: '04991240',
    bankName: '唐山银行',
    patterns: [{ reg: /^(623193)\d{13}$/g }],
  },
  {
    bankCode: '04991240',
    bankName: '唐山银行',
    patterns: [{ reg: /^(62326558)\d{11}$/g }],
  },
  {
    bankCode: '05027360',
    bankName: '曲靖市商业银行',
    patterns: [{ reg: /^(622777)\d{10}$/g }],
  },
  {
    bankCode: '05027361',
    bankName: '曲靖市商业银行',
    patterns: [{ reg: /^(621497)\d{10}$/g }],
  },
  {
    bankCode: '05031680',
    bankName: '晋城银行股份有限公司',
    patterns: [{ reg: /^(622532)\d{13}$/g }],
  },
  {
    bankCode: '05031680',
    bankName: '晋城银行股份有限公司',
    patterns: [{ reg: /^(623197)\d{13}$/g }],
  },
  {
    bankCode: '05056020',
    bankName: '东莞商行',
    patterns: [{ reg: /^(622888)\d{10}$/g }],
  },
  {
    bankCode: '05056020',
    bankName: '东莞商行',
    patterns: [{ reg: /^(628398)\d{10}$/g }],
  },
  {
    bankCode: '05063330',
    bankName: '温州银行',
    patterns: [{ reg: /^(622899)\d{10}$/g }],
  },
  {
    bankCode: '05063330',
    bankName: '温州银行',
    patterns: [{ reg: /^(625988)\d{10}$/g }],
  },
  {
    bankCode: '05063330',
    bankName: '温州银行',
    patterns: [{ reg: /^(628255)\d{10}$/g }],
  },
  {
    bankCode: '05063330',
    bankName: '温州银行',
    patterns: [{ reg: /^(622868)\d{10}$/g }],
  },
  {
    bankCode: '05075210',
    bankName: '汉口银行',
    patterns: [{ reg: /^(622566)\d{10}$/g }],
  },
  {
    bankCode: '05075210',
    bankName: '汉口银行',
    patterns: [{ reg: /^(622567)\d{10}$/g }],
  },
  {
    bankCode: '05075210',
    bankName: '汉口银行',
    patterns: [{ reg: /^(628200)\d{10}$/g }],
  },
  {
    bankCode: '05075210',
    bankName: '汉口银行',
    patterns: [{ reg: /^(622625)\d{10}$/g }],
  },
  {
    bankCode: '05075210',
    bankName: '汉口银行',
    patterns: [{ reg: /^(622626)\d{10}$/g }],
  },
  {
    bankCode: '05075210',
    bankName: '汉口银行',
    patterns: [{ reg: /^(625946)\d{10}$/g }],
  },
  {
    bankCode: '05075210',
    bankName: '汉口银行',
    patterns: [{ reg: /^(62560600)\d{8}$/g }],
  },
  {
    bankCode: '05075210',
    bankName: '汉口银行',
    patterns: [{ reg: /^(62565800)\d{8}$/g }],
  },
  {
    bankCode: '05083000',
    bankName: '江苏银行',
    patterns: [{ reg: /^(504923)\d{10}$/g }],
  },
  {
    bankCode: '05083000',
    bankName: '江苏银行',
    patterns: [{ reg: /^(622131)\d{13}$/g }],
  },
  {
    bankCode: '05083000',
    bankName: '江苏银行',
    patterns: [{ reg: /^(622173)\d{10}$/g }],
  },
  {
    bankCode: '05083000',
    bankName: '江苏银行',
    patterns: [{ reg: /^(621076)\d{13}$/g }],
  },
  {
    bankCode: '05083000',
    bankName: '江苏银行',
    patterns: [{ reg: /^(622173)\d{13}$/g }],
  },
  {
    bankCode: '05083000',
    bankName: '江苏银行',
    patterns: [{ reg: /^(621579)\d{13}$/g }],
  },
  {
    bankCode: '05083000',
    bankName: '江苏银行',
    patterns: [{ reg: /^(622876)\d{13}$/g }],
  },
  {
    bankCode: '05083000',
    bankName: '江苏银行',
    patterns: [{ reg: /^(622873)\d{13}$/g }],
  },
  {
    bankCode: '05083000',
    bankName: '江苏银行',
    patterns: [{ reg: /^(622422)\d{10}$/g }],
  },
  {
    bankCode: '05083000',
    bankName: '江苏银行',
    patterns: [{ reg: /^(940076)\d{10}$/g }],
  },
  {
    bankCode: '05083000',
    bankName: '江苏银行',
    patterns: [{ reg: /^(623279)\d{13}$/g }],
  },
  {
    bankCode: '05083000',
    bankName: '江苏银行',
    patterns: [{ reg: /^(622447)\d{10}$/g }],
  },
  {
    bankCode: '05105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(435744)\d{10}$/g }],
  },
  {
    bankCode: '05105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(528020)\d{10}$/g }],
  },
  {
    bankCode: '05105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(622525)\d{10}$/g }],
  },
  {
    bankCode: '05105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(998801)\d{10}$/g }],
  },
  {
    bankCode: '05105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(998802)\d{10}$/g }],
  },
  {
    bankCode: '05105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(622156)\d{10}$/g }],
  },
  {
    bankCode: '05105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(483536)\d{10}$/g }],
  },
  {
    bankCode: '05105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(356869)\d{10}$/g }],
  },
  {
    bankCode: '05105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(622157)\d{10}$/g }],
  },
  {
    bankCode: '05105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(531659)\d{10}$/g }],
  },
  {
    bankCode: '05105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(625360)\d{10}$/g }],
  },
  {
    bankCode: '05105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(625361)\d{10}$/g }],
  },
  {
    bankCode: '05105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(435745)\d{10}$/g }],
  },
  {
    bankCode: '05105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(356868)\d{10}$/g }],
  },
  {
    bankCode: '05105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(628296)\d{10}$/g }],
  },
  {
    bankCode: '05105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(625825)\d{10}$/g }],
  },
  {
    bankCode: '05105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(622526)\d{10}$/g }],
  },
  {
    bankCode: '05105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(622155)\d{10}$/g }],
  },
  {
    bankCode: '05105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(526855)\d{10}$/g }],
  },
  {
    bankCode: '05105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(625823)\d{10}$/g }],
  },
  {
    bankCode: '05121660',
    bankName: '长治银行股份有限公司',
    patterns: [{ reg: /^(622962)\d{11}$/g }],
  },
  {
    bankCode: '05121660',
    bankName: '长治银行股份有限公司',
    patterns: [{ reg: /^(623509)\d{13}$/g }],
  },
  {
    bankCode: '05131410',
    bankName: '承德市商业银行',
    patterns: [{ reg: /^(622936)\d{13}$/g }],
  },
  {
    bankCode: '05131419',
    bankName: '承德银行',
    patterns: [{ reg: /^(623060)\d{13}$/g }],
  },
  {
    bankCode: '05131419',
    bankName: '承德银行',
    patterns: [{ reg: /^(62326515)\d{11}$/g }],
  },
  {
    bankCode: '05154680',
    bankName: '德州银行',
    patterns: [{ reg: /^(622937)\d{13}$/g }],
  },
  {
    bankCode: '05154680',
    bankName: '德州银行',
    patterns: [{ reg: /^(623101)\d{13}$/g }],
  },
  {
    bankCode: '05171270',
    bankName: '邯郸银行',
    patterns: [{ reg: /^(622960)\d{12}$/g }],
  },
  {
    bankCode: '05171270',
    bankName: '邯郸银行',
    patterns: [{ reg: /^(623523)\d{12}$/g }],
  },
  {
    bankCode: '05171270',
    bankName: '邯郸银行',
    patterns: [{ reg: /^(623653)\d{12}$/g }],
  },
  {
    bankCode: '05213000',
    bankName: '江苏银行',
    patterns: [{ reg: /^(628210)\d{10}$/g }],
  },
  {
    bankCode: '05213000',
    bankName: '江苏银行',
    patterns: [{ reg: /^(625902)\d{10}$/g }],
  },
  {
    bankCode: '05213000',
    bankName: '江苏银行',
    patterns: [{ reg: /^(622283)\d{10}$/g }],
  },
  {
    bankCode: '05213000',
    bankName: '江苏银行',
    patterns: [{ reg: /^(62844805)\d{8}$/g }],
  },
  {
    bankCode: '05238333',
    bankName: '平凉市城市信用社',
    patterns: [{ reg: /^(621010)\d{10}$/g }],
  },
  {
    bankCode: '05247410',
    bankName: '云南红塔银行',
    patterns: [{ reg: /^(628351)\d{10}$/g }],
  },
  {
    bankCode: '05247410',
    bankName: '云南红塔银行',
    patterns: [{ reg: /^(623135)\d{13}$/g }],
  },
  {
    bankCode: '05247410',
    bankName: '云南红塔银行',
    patterns: [{ reg: /^(622980)\d{13}$/g }],
  },
  {
    bankCode: '05253450',
    bankName: '浙江民泰商业银行',
    patterns: [{ reg: /^(621088)\d{13}$/g }],
  },
  {
    bankCode: '05253450',
    bankName: '浙江民泰商业银行',
    patterns: [{ reg: /^(621726)\d{13}$/g }],
  },
  {
    bankCode: '05253450',
    bankName: '浙江民泰商业银行',
    patterns: [{ reg: /^(620517)\d{13}$/g }],
  },
  {
    bankCode: '05253454',
    bankName: '浙江民泰商业银行',
    patterns: [{ reg: /^(622740)\d{10}$/g }],
  },
  {
    bankCode: '05253454',
    bankName: '浙江民泰商业银行',
    patterns: [{ reg: /^(625036)\d{10}$/g }],
  },
  {
    bankCode: '05264330',
    bankName: '上饶市商业银行',
    patterns: [{ reg: /^(621014)\d{10}$/g }],
  },
  {
    bankCode: '05274550',
    bankName: '东营银行',
    patterns: [{ reg: /^(621004)\d{12}$/g }],
  },
  {
    bankCode: '05274550',
    bankName: '东营银行',
    patterns: [{ reg: /^(623130)\d{12}$/g }],
  },
  {
    bankCode: '05284630',
    bankName: '泰安银行',
    patterns: [{ reg: /^(622972)\d{13}$/g }],
  },
  {
    bankCode: '05284630',
    bankName: '泰安银行',
    patterns: [{ reg: /^(623196)\d{13}$/g }],
  },
  {
    bankCode: '05303380',
    bankName: '浙江稠州商业银行',
    patterns: [{ reg: /^(623083)\d{13}$/g }],
  },
  {
    bankCode: '05303380',
    bankName: '浙江稠州商业银行',
    patterns: [{ reg: /^(621028)\d{10}$/g }],
  },
  {
    bankCode: '05303387',
    bankName: '浙江稠州商业银行',
    patterns: [{ reg: /^(628250)\d{10}$/g }],
  },
  {
    bankCode: '05311930',
    bankName: '乌海银行股份有限公司',
    patterns: [{ reg: /^(622973)\d{13}$/g }],
  },
  {
    bankCode: '05311930',
    bankName: '乌海银行股份有限公司',
    patterns: [{ reg: /^(623153)\d{13}$/g }],
  },
  {
    bankCode: '05326550',
    bankName: '自贡银行',
    patterns: [{ reg: /^(621070)\d{13}$/g }],
  },
  {
    bankCode: '05326550',
    bankName: '自贡银行',
    patterns: [{ reg: /^(623121)\d{13}$/g }],
  },
  {
    bankCode: '05332740',
    bankName: '龙江银行股份有限公司',
    patterns: [{ reg: /^(622977)\d{13}$/g }],
  },
  {
    bankCode: '05342050',
    bankName: '鄂尔多斯银行股份有限公司',
    patterns: [{ reg: /^(622978)\d{13}$/g }],
  },
  {
    bankCode: '05342050',
    bankName: '鄂尔多斯银行',
    patterns: [{ reg: /^(628253)\d{10}$/g }],
  },
  {
    bankCode: '05342050',
    bankName: '鄂尔多斯银行股份有限公司',
    patterns: [{ reg: /^(623093)\d{13}$/g }],
  },
  {
    bankCode: '05342050',
    bankName: '鄂尔多斯银行股份有限公司',
    patterns: [{ reg: /^(628378)\d{10}$/g }],
  },
  {
    bankCode: '05342050',
    bankName: '鄂尔多斯银行股份有限公司',
    patterns: [{ reg: /^(62364302)\d{8}$/g }],
  },
  {
    bankCode: '05342050',
    bankName: '鄂尔多斯银行股份有限公司',
    patterns: [{ reg: /^(62364303)\d{11}$/g }],
  },
  {
    bankCode: '05374610',
    bankName: '济宁市商业银行',
    patterns: [{ reg: /^(621200)\d{13}$/g }],
  },
  {
    bankCode: '05374610',
    bankName: '济宁银行股份有限公司',
    patterns: [{ reg: /^(623116)\d{13}$/g }],
  },
  {
    bankCode: '05392330',
    bankName: '铁岭银行',
    patterns: [{ reg: /^(621038)\d{13}$/g }],
  },
  {
    bankCode: '05392339',
    bankName: '铁岭银行',
    patterns: [{ reg: /^(623180)\d{13}$/g }],
  },
  {
    bankCode: '05406650',
    bankName: '乐山市商业银行',
    patterns: [{ reg: /^(621086)\d{13}$/g }],
  },
  {
    bankCode: '05406650',
    bankName: '乐山市商业银行',
    patterns: [{ reg: /^(621498)\d{13}$/g }],
  },
  {
    bankCode: '05406650',
    bankName: '乐山市商业银行',
    patterns: [{ reg: /^(623290)\d{13}$/g }],
  },
  {
    bankCode: '05417900',
    bankName: '长安银行',
    patterns: [{ reg: /^(621448)\d{13}$/g }],
  },
  {
    bankCode: '05417900',
    bankName: '长安银行',
    patterns: [{ reg: /^(621551)\d{13}$/g }],
  },
  {
    bankCode: '05417900',
    bankName: '长安银行',
    patterns: [{ reg: /^(621296)\d{13}$/g }],
  },
  {
    bankCode: '05417901',
    bankName: '长安银行',
    patterns: [{ reg: /^(628385)\d{10}$/g }],
  },
  {
    bankCode: '05417930',
    bankName: '宝鸡商行',
    patterns: [{ reg: /^(621044)\d{13}$/g }],
  },
  {
    bankCode: '05426900',
    bankName: '重庆三峡银行',
    patterns: [{ reg: /^(622945)\d{10}$/g }],
  },
  {
    bankCode: '05426900',
    bankName: '重庆三峡银行',
    patterns: [{ reg: /^(621755)\d{10}$/g }],
  },
  {
    bankCode: '05438720',
    bankName: '石嘴山银行',
    patterns: [{ reg: /^(623120)\d{13}$/g }],
  },
  {
    bankCode: '05438720',
    bankName: '石嘴山银行',
    patterns: [{ reg: /^(622940)\d{13}$/g }],
  },
  {
    bankCode: '05438729',
    bankName: '石嘴山银行',
    patterns: [{ reg: /^(628355)\d{10}$/g }],
  },
  {
    bankCode: '05442320',
    bankName: '盘锦银行',
    patterns: [{ reg: /^(621089)\d{13}$/g }],
  },
  {
    bankCode: '05442329',
    bankName: '盘锦银行',
    patterns: [{ reg: /^(623161)\d{13}$/g }],
  },
  {
    bankCode: '05478820',
    bankName: '昆仑银行股份有限公司',
    patterns: [{ reg: /^(621029)\d{13}$/g }],
  },
  {
    bankCode: '05478820',
    bankName: '昆仑银行股份有限公司',
    patterns: [{ reg: /^(621766)\d{13}$/g }],
  },
  {
    bankCode: '05478820',
    bankName: '昆仑银行股份有限公司',
    patterns: [{ reg: /^(623139)\d{13}$/g }],
  },
  {
    bankCode: '05484950',
    bankName: '平顶山银行股份有限公司',
    patterns: [{ reg: /^(623152)\d{13}$/g }],
  },
  {
    bankCode: '05484950',
    bankName: '平顶山银行股份有限公司',
    patterns: [{ reg: /^(621071)\d{13}$/g }],
  },
  {
    bankCode: '05484959',
    bankName: '平顶山银行',
    patterns: [{ reg: /^(628339)\d{10}$/g }],
  },
  {
    bankCode: '05492340',
    bankName: '朝阳银行',
    patterns: [{ reg: /^(621515)\d{13}$/g }],
  },
  {
    bankCode: '05492340',
    bankName: '朝阳银行',
    patterns: [{ reg: /^(621074)\d{13}$/g }],
  },
  {
    bankCode: '05492341',
    bankName: '朝阳银行',
    patterns: [{ reg: /^(623030)\d{13}$/g }],
  },
  {
    bankCode: '05503320',
    bankName: '宁波东海银行',
    patterns: [{ reg: /^(621345)\d{12}$/g }],
  },
  {
    bankCode: '05503320',
    bankName: '宁波东海银行',
    patterns: [{ reg: /^(623167)\d{12}$/g }],
  },
  {
    bankCode: '05516620',
    bankName: '遂宁银行',
    patterns: [{ reg: /^(621090)\d{13}$/g }],
  },
  {
    bankCode: '05516629',
    bankName: '遂宁银行',
    patterns: [{ reg: /^(623178)\d{13}$/g }],
  },
  {
    bankCode: '05521340',
    bankName: '保定银行',
    patterns: [{ reg: /^(621091)\d{13}$/g }],
  },
  {
    bankCode: '05521379',
    bankName: '保定银行',
    patterns: [{ reg: /^(623168)\d{13}$/g }],
  },
  {
    bankCode: '05541310',
    bankName: '邢台银行股份有限公司',
    patterns: [{ reg: /^(621238)\d{13}$/g }],
  },
  {
    bankCode: '05541311',
    bankName: '邢台银行',
    patterns: [{ reg: /^(628325)\d{10}$/g }],
  },
  {
    bankCode: '05556840',
    bankName: '凉山州商业银行',
    patterns: [{ reg: /^(621057)\d{13}$/g }],
  },
  {
    bankCode: '05556859',
    bankName: '凉山州商业银行',
    patterns: [{ reg: /^(623199)\d{13}$/g }],
  },
  {
    bankCode: '05565040',
    bankName: '漯河银行',
    patterns: [{ reg: /^(628303)\d{10}$/g }],
  },
  {
    bankCode: '05576750',
    bankName: '达州银行',
    patterns: [{ reg: /^(621233)\d{13}$/g }],
  },
  {
    bankCode: '05576750',
    bankName: '达州银行',
    patterns: [{ reg: /^(623588)\d{13}$/g }],
  },
  {
    bankCode: '05591750',
    bankName: '晋中银行',
    patterns: [{ reg: /^(621223)\d{13}$/g }],
  },
  {
    bankCode: '05591750',
    bankName: '晋中银行',
    patterns: [{ reg: /^(621780)\d{13}$/g }],
  },
  {
    bankCode: '05605129',
    bankName: '驻马店银行',
    patterns: [{ reg: /^(628389)\d{10}$/g }],
  },
  {
    bankCode: '05611480',
    bankName: '衡水银行',
    patterns: [{ reg: /^(621239)\d{13}$/g }],
  },
  {
    bankCode: '05611481',
    bankName: '衡水银行',
    patterns: [{ reg: /^(623068)\d{13}$/g }],
  },
  {
    bankCode: '05611499',
    bankName: '衡水银行',
    patterns: [{ reg: /^(628380)\d{10}$/g }],
  },
  {
    bankCode: '05625081',
    bankName: '周口银行',
    patterns: [{ reg: /^(628315)\d{10}$/g }],
  },
  {
    bankCode: '05631650',
    bankName: '阳泉市商业银行',
    patterns: [{ reg: /^(621272)\d{10}$/g }],
  },
  {
    bankCode: '05631650',
    bankName: '阳泉市商业银行',
    patterns: [{ reg: /^(621738)\d{10}$/g }],
  },
  {
    bankCode: '05646710',
    bankName: '宜宾市商业银行',
    patterns: [{ reg: /^(621273)\d{13}$/g }],
  },
  {
    bankCode: '05646710',
    bankName: '宜宾市商业银行',
    patterns: [{ reg: /^(623079)\d{13}$/g }],
  },
  {
    bankCode: '05658880',
    bankName: '库尔勒银行',
    patterns: [{ reg: /^(621263)\d{12}$/g }],
  },
  {
    bankCode: '05666770',
    bankName: '雅安市商业银行',
    patterns: [{ reg: /^(621325)\d{13}$/g }],
  },
  {
    bankCode: '05666770',
    bankName: '雅安市商业银行',
    patterns: [{ reg: /^(623084)\d{13}$/g }],
  },
  {
    bankCode: '05695151',
    bankName: '信阳银行',
    patterns: [{ reg: /^(628331)\d{10}$/g }],
  },
  {
    bankCode: '05705500',
    bankName: '华融湘江银行',
    patterns: [{ reg: /^(621366)\d{13}$/g }],
  },
  {
    bankCode: '05705500',
    bankName: '华融湘江银行',
    patterns: [{ reg: /^(621388)\d{13}$/g }],
  },
  {
    bankCode: '05722280',
    bankName: '营口沿海银行',
    patterns: [{ reg: /^(621348)\d{13}$/g }],
  },
  {
    bankCode: '05722289',
    bankName: '营口沿海银行',
    patterns: [{ reg: /^(620063)\d{13}$/g }],
  },
  {
    bankCode: '05734220',
    bankName: '景德镇商业银行',
    patterns: [{ reg: /^(623080)\d{12}$/g }],
  },
  {
    bankCode: '05748840',
    bankName: '哈密市商业银行',
    patterns: [{ reg: /^(621360)\d{13}$/g }],
  },
  {
    bankCode: '05748844',
    bankName: '哈密市商业银行',
    patterns: [{ reg: /^(623566)\d{13}$/g }],
  },
  {
    bankCode: '05755200',
    bankName: '湖北银行',
    patterns: [{ reg: /^(622396)\d{11}$/g }],
  },
  {
    bankCode: '05755200',
    bankName: '湖北银行',
    patterns: [{ reg: /^(622511)\d{11}$/g }],
  },
  {
    bankCode: '05755200',
    bankName: '湖北银行',
    patterns: [{ reg: /^(621217)\d{12}$/g }],
  },
  {
    bankCode: '05755200',
    bankName: '湖北银行',
    patterns: [{ reg: /^(622959)\d{13}$/g }],
  },
  {
    bankCode: '05755200',
    bankName: '湖北银行',
    patterns: [{ reg: /^(621270)\d{12}$/g }],
  },
  {
    bankCode: '05755201',
    bankName: '湖北银行',
    patterns: [{ reg: /^(623076)\d{13}$/g }],
  },
  {
    bankCode: '05755202',
    bankName: '湖北银行',
    patterns: [{ reg: /^(625850)\d{10}$/g }],
  },
  {
    bankCode: '05755202',
    bankName: '湖北银行',
    patterns: [{ reg: /^(628340)\d{10}$/g }],
  },
  {
    bankCode: '05767700',
    bankName: '西藏银行',
    patterns: [{ reg: /^(621391)\d{13}$/g }],
  },
  {
    bankCode: '05778981',
    bankName: '新疆汇和银行',
    patterns: [{ reg: /^(621339)\d{13}$/g }],
  },
  {
    bankCode: '05778981',
    bankName: '新疆汇和银行',
    patterns: [{ reg: /^(62326530)\d{11}$/g }],
  },
  {
    bankCode: '05785800',
    bankName: '广东华兴银行',
    patterns: [{ reg: /^(621625)\d{13}$/g }],
  },
  {
    bankCode: '05785800',
    bankName: '广东华兴银行',
    patterns: [{ reg: /^(621469)\d{13}$/g }],
  },
  {
    bankCode: '05785800',
    bankName: '广东华兴银行',
    patterns: [{ reg: /^(623113)\d{13}$/g }],
  },
  {
    bankCode: '05785800',
    bankName: '广东华兴银行',
    patterns: [{ reg: /^(623688)\d{13}$/g }],
  },
  {
    bankCode: '05785800',
    bankName: '广东华兴银行',
    patterns: [{ reg: /^(623611)\d{13}$/g }],
  },
  {
    bankCode: '05785800',
    bankName: '广东华兴银行',
    patterns: [{ reg: /^(623627)\d{13}$/g }],
  },
  {
    bankCode: '05785800',
    bankName: '广东华兴银行',
    patterns: [{ reg: /^(623665)\d{13}$/g }],
  },
  {
    bankCode: '05785800',
    bankName: '广东华兴银行',
    patterns: [{ reg: /^(623293)\d{13}$/g }],
  },
  {
    bankCode: '05803320',
    bankName: '宁波通商银行',
    patterns: [{ reg: /^(621655)\d{13}$/g }],
  },
  {
    bankCode: '05803320',
    bankName: '宁波通商银行',
    patterns: [{ reg: /^(623537)\d{13}$/g }],
  },
  {
    bankCode: '05818200',
    bankName: '甘肃银行',
    patterns: [{ reg: /^(623182)\d{13}$/g }],
  },
  {
    bankCode: '05818200',
    bankName: '甘肃银行',
    patterns: [{ reg: /^(621636)\d{13}$/g }],
  },
  {
    bankCode: '05818200',
    bankName: '甘肃银行',
    patterns: [{ reg: /^(62326523)\d{11}$/g }],
  },
  {
    bankCode: '05818202',
    bankName: '甘肃银行',
    patterns: [{ reg: /^(628356)\d{10}$/g }],
  },
  {
    bankCode: '05818202',
    bankName: '甘肃银行',
    patterns: [{ reg: /^(625201)\d{10}$/g }],
  },
  {
    bankCode: '05824540',
    bankName: '枣庄银行',
    patterns: [{ reg: /^(623087)\d{13}$/g }],
  },
  {
    bankCode: '05832250',
    bankName: '本溪市商业银行',
    patterns: [{ reg: /^(623577)\d{13}$/g }],
  },
  {
    bankCode: '05832250',
    bankName: '本溪市商业银行',
    patterns: [{ reg: /^(621696)\d{13}$/g }],
  },
  {
    bankCode: '05847000',
    bankName: '贵州银行',
    patterns: [{ reg: /^(622508)\d{10}$/g }],
  },
  {
    bankCode: '05847000',
    bankName: '贵州银行',
    patterns: [{ reg: /^(622939)\d{11}$/g }],
  },
  {
    bankCode: '05847000',
    bankName: '贵州银行',
    patterns: [{ reg: /^(621460)\d{13}$/g }],
  },
  {
    bankCode: '05847000',
    bankName: '贵州银行',
    patterns: [{ reg: /^(621591)\d{10}$/g }],
  },
  {
    bankCode: '05847000',
    bankName: '贵州银行',
    patterns: [{ reg: /^(622961)\d{10}$/g }],
  },
  {
    bankCode: '05853050',
    bankName: '苏州银行',
    patterns: [{ reg: /^(622855)\d{13}$/g }],
  },
  {
    bankCode: '05853050',
    bankName: '苏州银行',
    patterns: [{ reg: /^(623521)\d{13}$/g }],
  },
  {
    bankCode: '05853050',
    bankName: '苏州银行',
    patterns: [{ reg: /^(621461)\d{13}$/g }],
  },
  {
    bankCode: '05853050',
    bankName: '苏州银行',
    patterns: [{ reg: /^(62326542)\d{11}$/g }],
  },
  {
    bankCode: '05864910',
    bankName: '中原银行',
    patterns: [{ reg: /^(622441)\d{10}$/g }],
  },
  {
    bankCode: '05864910',
    bankName: '中原银行',
    patterns: [{ reg: /^(621075)\d{13}$/g }],
  },
  {
    bankCode: '05864910',
    bankName: '中原银行',
    patterns: [{ reg: /^(621271)\d{13}$/g }],
  },
  {
    bankCode: '05864910',
    bankName: '中原银行',
    patterns: [{ reg: /^(622979)\d{13}$/g }],
  },
  {
    bankCode: '05864910',
    bankName: '中原银行',
    patterns: [{ reg: /^(621035)\d{13}$/g }],
  },
  {
    bankCode: '05864910',
    bankName: '中原银行',
    patterns: [{ reg: /^(621337)\d{13}$/g }],
  },
  {
    bankCode: '05864910',
    bankName: '中原银行',
    patterns: [{ reg: /^(621221)\d{13}$/g }],
  },
  {
    bankCode: '05864910',
    bankName: '中原银行',
    patterns: [{ reg: /^(621753)\d{13}$/g }],
  },
  {
    bankCode: '05864910',
    bankName: '中原银行',
    patterns: [{ reg: /^(621748)\d{13}$/g }],
  },
  {
    bankCode: '05864910',
    bankName: '中原银行',
    patterns: [{ reg: /^(621601)\d{13}$/g }],
  },
  {
    bankCode: '05864910',
    bankName: '中原银行',
    patterns: [{ reg: /^(623138)\d{13}$/g }],
  },
  {
    bankCode: '05864910',
    bankName: '中原银行',
    patterns: [{ reg: /^(623160)\d{13}$/g }],
  },
  {
    bankCode: '05864910',
    bankName: '中原银行',
    patterns: [{ reg: /^(623037)\d{13}$/g }],
  },
  {
    bankCode: '05864910',
    bankName: '中原银行',
    patterns: [{ reg: /^(623505)\d{10}$/g }],
  },
  {
    bankCode: '05864910',
    bankName: '中原银行',
    patterns: [{ reg: /^(623660)\d{10}$/g }],
  },
  {
    bankCode: '05864910',
    bankName: '中原银行',
    patterns: [{ reg: /^(6224217)\d{12}$/g }],
  },
  {
    bankCode: '05864910',
    bankName: '中原银行',
    patterns: [{ reg: /^(62326565)\d{11}$/g }],
  },
  {
    bankCode: '05864910',
    bankName: '中原银行',
    patterns: [{ reg: /^(621327)\d{13}$/g }],
  },
  {
    bankCode: '05864910',
    bankName: '中原银行',
    patterns: [{ reg: /^(621235)\d{12}$/g }],
  },
  {
    bankCode: '05870000',
    bankName: '厦门国际银行',
    patterns: [{ reg: /^(623623)\d{10}$/g }],
  },
  {
    bankCode: '05886400',
    bankName: '海南银行',
    patterns: [{ reg: /^(623621)\d{13}$/g }],
  },
  {
    bankCode: '05890000',
    bankName: '邯郸银行',
    patterns: [{ reg: /^(628377)\d{10}$/g }],
  },
  {
    bankCode: '05900000',
    bankName: '新疆银行',
    patterns: [{ reg: /^(623667)\d{12}$/g }],
  },
  {
    bankCode: '05910000',
    bankName: '湖南三湘银行',
    patterns: [{ reg: /^(62364300)\d{11}$/g }],
  },
  {
    bankCode: '06105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(627066)\d{10}$/g }],
  },
  {
    bankCode: '06105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(627067)\d{10}$/g }],
  },
  {
    bankCode: '06105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(627069)\d{10}$/g }],
  },
  {
    bankCode: '06105840',
    bankName: '平安银行股份有限公司',
    patterns: [{ reg: /^(627068)\d{10}$/g }],
  },
  {
    bankCode: '14012900',
    bankName: '上海农商银行',
    patterns: [{ reg: /^(940013)\d{10}$/g }],
  },
  {
    bankCode: '14012900',
    bankName: '上海农商银行',
    patterns: [{ reg: /^(621495)\d{10}$/g }],
  },
  {
    bankCode: '14012900',
    bankName: '上海农商银行',
    patterns: [{ reg: /^(621688)\d{13}$/g }],
  },
  {
    bankCode: '14012900',
    bankName: '上海农商银行',
    patterns: [{ reg: /^(623162)\d{13}$/g }],
  },
  {
    bankCode: '14012900',
    bankName: '上海农商银行',
    patterns: [{ reg: /^(623552)\d{13}$/g }],
  },
  {
    bankCode: '14012900',
    bankName: '上海农商银行',
    patterns: [{ reg: /^(622478)\d{10}$/g }],
  },
  {
    bankCode: '14012900',
    bankName: '上海农商银行',
    patterns: [{ reg: /^(62326508)\d{11}$/g }],
  },
  {
    bankCode: '14023052',
    bankName: '昆山农信社',
    patterns: [{ reg: /^(622443)\d{13}$/g }],
  },
  {
    bankCode: '14023052',
    bankName: '昆山农信社',
    patterns: [{ reg: /^(940029)\d{13}$/g }],
  },
  {
    bankCode: '14023052',
    bankName: '昆山农信社',
    patterns: [{ reg: /^(623132)\d{13}$/g }],
  },
  {
    bankCode: '14030001',
    bankName: '常熟市农村商业银行',
    patterns: [{ reg: /^(622462)\d{10}$/g }],
  },
  {
    bankCode: '14030001',
    bankName: '常熟市农村商业银行',
    patterns: [{ reg: /^(628272)\d{10}$/g }],
  },
  {
    bankCode: '14030001',
    bankName: '常熟市农村商业银行',
    patterns: [{ reg: /^(625101)\d{10}$/g }],
  },
  {
    bankCode: '14033055',
    bankName: '常熟农村商业银行',
    patterns: [{ reg: /^(603694)\d{13}$/g }],
  },
  {
    bankCode: '14033055',
    bankName: '常熟农村商业银行',
    patterns: [{ reg: /^(9400301)\d{12}$/g }],
  },
  {
    bankCode: '14033055',
    bankName: '常熟农村商业银行',
    patterns: [{ reg: /^(623071)\d{13}$/g }],
  },
  {
    bankCode: '14033055',
    bankName: '常熟农村商业银行',
    patterns: [{ reg: /^(622323)\d{13}$/g }],
  },
  {
    bankCode: '14045840',
    bankName: '深圳农村商业银行',
    patterns: [{ reg: /^(622129)\d{10}$/g }],
  },
  {
    bankCode: '14045840',
    bankName: '深圳农村商业银行',
    patterns: [{ reg: /^(623035)\d{10}$/g }],
  },
  {
    bankCode: '14045840',
    bankName: '深圳农村商业银行',
    patterns: [{ reg: /^(622128)\d{10}$/g }],
  },
  {
    bankCode: '14045840',
    bankName: '深圳农村商业银行',
    patterns: [{ reg: /^(623186)\d{10}$/g }],
  },
  {
    bankCode: '14045840',
    bankName: '深圳农村商业银行',
    patterns: [{ reg: /^(623296)\d{10}$/g }],
  },
  {
    bankCode: '14055810',
    bankName: '广州市农信社',
    patterns: [{ reg: /^(622439)\d{12}$/g }],
  },
  {
    bankCode: '14055810',
    bankName: '广州市农信社',
    patterns: [{ reg: /^(909810)\d{12}$/g }],
  },
  {
    bankCode: '14055810',
    bankName: '广州市农信社',
    patterns: [{ reg: /^(940035)\d{12}$/g }],
  },
  {
    bankCode: '14055810',
    bankName: '广州农村商业银行',
    patterns: [{ reg: /^(621522)\d{12}$/g }],
  },
  {
    bankCode: '14055810',
    bankName: '广州农村商业银行股份有限公司',
    patterns: [{ reg: /^(623257)\d{12}$/g }],
  },
  {
    bankCode: '14075882',
    bankName: '广东南海农村商业银行',
    patterns: [{ reg: /^(940037)\d{12}$/g }],
  },
  {
    bankCode: '14075882',
    bankName: '广东南海农村商业银行',
    patterns: [{ reg: /^(622271)\d{12}$/g }],
  },
  {
    bankCode: '14085883',
    bankName: '广东顺德农村商业银行',
    patterns: [{ reg: /^(622322)\d{10}$/g }],
  },
  {
    bankCode: '14085883',
    bankName: '广东顺德农村商业银行',
    patterns: [{ reg: /^(940038)\d{10}$/g }],
  },
  {
    bankCode: '14085883',
    bankName: '广东顺德农村商业银行',
    patterns: [{ reg: /^(985262)\d{10}$/g }],
  },
  {
    bankCode: '14097310',
    bankName: '昆明农联社',
    patterns: [{ reg: /^(622369)\d{10}$/g }],
  },
  {
    bankCode: '14097310',
    bankName: '昆明农联社',
    patterns: [{ reg: /^(621017)\d{13}$/g }],
  },
  {
    bankCode: '14097310',
    bankName: '昆明农联社',
    patterns: [{ reg: /^(940042)\d{12}$/g }],
  },
  {
    bankCode: '14097310',
    bankName: '昆明农联社',
    patterns: [{ reg: /^(623190)\d{13}$/g }],
  },
  {
    bankCode: '14097310',
    bankName: '昆明农联社',
    patterns: [{ reg: /^(018572)\d{12}$/g }],
  },
  {
    bankCode: '14105200',
    bankName: '湖北农信社',
    patterns: [{ reg: /^(622412)\d{10}$/g }],
  },
  {
    bankCode: '14105200',
    bankName: '湖北农信社',
    patterns: [{ reg: /^(621013)\d{10}$/g }],
  },
  {
    bankCode: '14105200',
    bankName: '湖北农信',
    patterns: [{ reg: /^(621523)\d{10}$/g }],
  },
  {
    bankCode: '14105200',
    bankName: '湖北农信社',
    patterns: [{ reg: /^(623055)\d{10}$/g }],
  },
  {
    bankCode: '14105200',
    bankName: '湖北农信社',
    patterns: [{ reg: /^(625889)\d{10}$/g }],
  },
  {
    bankCode: '14105200',
    bankName: '湖北农信社',
    patterns: [{ reg: /^(628254)\d{10}$/g }],
  },
  {
    bankCode: '14105200',
    bankName: '湖北农信社',
    patterns: [{ reg: /^(623276)\d{10}$/g }],
  },
  {
    bankCode: '14105210',
    bankName: '武汉农信',
    patterns: [{ reg: /^(940044)\d{11}$/g }],
  },
  {
    bankCode: '14113030',
    bankName: '徐州市郊农村信用合作联社',
    patterns: [{ reg: /^(622312)\d{10}$/g }],
  },
  {
    bankCode: '14113030',
    bankName: '徐州市郊农村信用合作联社',
    patterns: [{ reg: /^(940005)\d{10}$/g }],
  },
  {
    bankCode: '14123020',
    bankName: '江阴市农村商业银行',
    patterns: [{ reg: /^(622481)\d{10}$/g }],
  },
  {
    bankCode: '14123020',
    bankName: '江阴农村商业银行',
    patterns: [{ reg: /^(628381)\d{10}$/g }],
  },
  {
    bankCode: '14123020',
    bankName: '江阴市农村商业银行',
    patterns: [{ reg: /^(62844810)\d{8}$/g }],
  },
  {
    bankCode: '14123022',
    bankName: '江阴农村商业银行',
    patterns: [{ reg: /^(622341)\d{10}$/g }],
  },
  {
    bankCode: '14123022',
    bankName: '江阴农村商业银行',
    patterns: [{ reg: /^(623115)\d{10}$/g }],
  },
  {
    bankCode: '14123022',
    bankName: '江阴农村商业银行',
    patterns: [{ reg: /^(940058)\d{10}$/g }],
  },
  {
    bankCode: '14123022',
    bankName: '江阴农村商业银行',
    patterns: [{ reg: /^(62326583)\d{11}$/g }],
  },
  {
    bankCode: '14136530',
    bankName: '重庆农村商业银行股份有限公司',
    patterns: [{ reg: /^(940020)\d{10}$/g }],
  },
  {
    bankCode: '14136900',
    bankName: '重庆农村商业银行',
    patterns: [{ reg: /^(621528)\d{10}$/g }],
  },
  {
    bankCode: '14136900',
    bankName: '重庆农村商业银行',
    patterns: [{ reg: /^(621465)\d{10}$/g }],
  },
  {
    bankCode: '14136900',
    bankName: '重庆农村商业银行',
    patterns: [{ reg: /^(622867)\d{10}$/g }],
  },
  {
    bankCode: '14136900',
    bankName: '重庆农村商业银行',
    patterns: [{ reg: /^(622885)\d{10}$/g }],
  },
  {
    bankCode: '14136900',
    bankName: '重庆农村商业银行',
    patterns: [{ reg: /^(621258)\d{10}$/g }],
  },
  {
    bankCode: '14144500',
    bankName: '山东农村信用联合社',
    patterns: [{ reg: /^(900205)\d{10}$/g }],
  },
  {
    bankCode: '14144500',
    bankName: '山东农村信用联合社',
    patterns: [{ reg: /^(622319)\d{10}$/g }],
  },
  {
    bankCode: '14144500',
    bankName: '山东省农村信用社联合社',
    patterns: [{ reg: /^(621521)\d{10}$/g }],
  },
  {
    bankCode: '14144500',
    bankName: '山东省农村信用社联合社',
    patterns: [{ reg: /^(621690)\d{10}$/g }],
  },
  {
    bankCode: '14144500',
    bankName: '山东省农村信用社联合社',
    patterns: [{ reg: /^(622320)\d{10}$/g }],
  },
  {
    bankCode: '14144500',
    bankName: '山东农村信用联合社',
    patterns: [{ reg: /^(900105)\d{10}$/g }],
  },
  {
    bankCode: '14144501',
    bankName: '山东省农村信用社联合社',
    patterns: [{ reg: /^(628375)\d{10}$/g }],
  },
  {
    bankCode: '14144520',
    bankName: '青岛农信',
    patterns: [{ reg: /^(62231902)\d{8}$/g }],
  },
  {
    bankCode: '14144520',
    bankName: '青岛农信',
    patterns: [{ reg: /^(90010502)\d{8}$/g }],
  },
  {
    bankCode: '14144520',
    bankName: '青岛农信',
    patterns: [{ reg: /^(90020502)\d{8}$/g }],
  },
  {
    bankCode: '14156020',
    bankName: '东莞农村信用合作社',
    patterns: [{ reg: /^(622328)\d{13}$/g }],
  },
  {
    bankCode: '14156020',
    bankName: '东莞农村信用合作社',
    patterns: [{ reg: /^(94006205)\d{11}$/g }],
  },
  {
    bankCode: '14156020',
    bankName: '东莞农村商业银行',
    patterns: [{ reg: /^(625288)\d{10}$/g }],
  },
  {
    bankCode: '14156020',
    bankName: '东莞农村商业银行',
    patterns: [{ reg: /^(623038)\d{13}$/g }],
  },
  {
    bankCode: '14156020',
    bankName: '东莞农村商业银行',
    patterns: [{ reg: /^(625888)\d{10}$/g }],
  },
  {
    bankCode: '14156020',
    bankName: '东莞农村信用合作社',
    patterns: [{ reg: /^(940062)\d{13}$/g }],
  },
  {
    bankCode: '14156020',
    bankName: '东莞农村商业银行',
    patterns: [{ reg: /^(628298)\d{10}$/g }],
  },
  {
    bankCode: '14156020',
    bankName: '东莞农村商业银行',
    patterns: [{ reg: /^(62326561)\d{11}$/g }],
  },
  {
    bankCode: '14163056',
    bankName: '张家港农村商业银行',
    patterns: [{ reg: /^(622332)\d{11}$/g }],
  },
  {
    bankCode: '14163056',
    bankName: '张家港农村商业银行',
    patterns: [{ reg: /^(940063)\d{11}$/g }],
  },
  {
    bankCode: '14163056',
    bankName: '张家港农村商业银行',
    patterns: [{ reg: /^(623123)\d{11}$/g }],
  },
  {
    bankCode: '14163056',
    bankName: '张家港农村商业银行',
    patterns: [{ reg: /^(62326576)\d{9}$/g }],
  },
  {
    bankCode: '14173900',
    bankName: '福建省农村信用社联合社',
    patterns: [{ reg: /^(622127)\d{13}$/g }],
  },
  {
    bankCode: '14173900',
    bankName: '福建省农村信用社联合社',
    patterns: [{ reg: /^(622184)\d{13}$/g }],
  },
  {
    bankCode: '14173900',
    bankName: '福建省农村信用社联合社',
    patterns: [{ reg: /^(621701)\d{13}$/g }],
  },
  {
    bankCode: '14173900',
    bankName: '福建省农村信用社联合社',
    patterns: [{ reg: /^(621251)\d{13}$/g }],
  },
  {
    bankCode: '14173900',
    bankName: '福建省农村信用社联合社',
    patterns: [{ reg: /^(621589)\d{13}$/g }],
  },
  {
    bankCode: '14173900',
    bankName: '福建省农村信用社联合社',
    patterns: [{ reg: /^(623036)\d{13}$/g }],
  },
  {
    bankCode: '14173900',
    bankName: '福建省农村信用社联合社',
    patterns: [{ reg: /^(62326562)\d{11}$/g }],
  },
  {
    bankCode: '14181000',
    bankName: '北京农村商业银行',
    patterns: [{ reg: /^(622138)\d{13}$/g }],
  },
  {
    bankCode: '14181000',
    bankName: '北京农村商业银行',
    patterns: [{ reg: /^(621066)\d{13}$/g }],
  },
  {
    bankCode: '14181000',
    bankName: '北京农村商业银行',
    patterns: [{ reg: /^(621068)\d{13}$/g }],
  },
  {
    bankCode: '14181000',
    bankName: '北京农村商业银行',
    patterns: [{ reg: /^(621560)\d{13}$/g }],
  },
  {
    bankCode: '14181000',
    bankName: '北京农村商业银行',
    patterns: [{ reg: /^(621067)\d{13}$/g }],
  },
  {
    bankCode: '14181000',
    bankName: '北京农村商业银行',
    patterns: [{ reg: /^(620088)\d{13}$/g }],
  },
  {
    bankCode: '14181000',
    bankName: '北京农村商业银行',
    patterns: [{ reg: /^(62326520)\d{11}$/g }],
  },
  {
    bankCode: '14181001',
    bankName: '北京农商行',
    patterns: [{ reg: /^(625186)\d{10}$/g }],
  },
  {
    bankCode: '14181001',
    bankName: '北京农商行',
    patterns: [{ reg: /^(625526)\d{10}$/g }],
  },
  {
    bankCode: '14181001',
    bankName: '北京农商行',
    patterns: [{ reg: /^(628336)\d{10}$/g }],
  },
  {
    bankCode: '14191100',
    bankName: '天津农村商业银行',
    patterns: [{ reg: /^(622531)\d{13}$/g }],
  },
  {
    bankCode: '14191100',
    bankName: '天津农村商业银行',
    patterns: [{ reg: /^(623103)\d{13}$/g }],
  },
  {
    bankCode: '14191100',
    bankName: '天津农村商业银行',
    patterns: [{ reg: /^(622329)\d{13}$/g }],
  },
  {
    bankCode: '14203320',
    bankName: '宁波鄞州农村商业银行',
    patterns: [{ reg: /^(621024)\d{10}$/g }],
  },
  {
    bankCode: '14203320',
    bankName: '宁波鄞州农村商业银行',
    patterns: [{ reg: /^(623539)\d{13}$/g }],
  },
  {
    bankCode: '14203320',
    bankName: '宁波鄞州农村商业银行',
    patterns: [{ reg: /^(622339)\d{10}$/g }],
  },
  {
    bankCode: '14203323',
    bankName: '宁波鄞州农村商业银行',
    patterns: [{ reg: /^(622389)\d{10}$/g }],
  },
  {
    bankCode: '14203323',
    bankName: '宁波鄞州农村商业银行',
    patterns: [{ reg: /^(622289)\d{10}$/g }],
  },
  {
    bankCode: '14203323',
    bankName: '鄞州农村合作银行',
    patterns: [{ reg: /^(622339025)\d{7}$/g }],
  },
  {
    bankCode: '14203323',
    bankName: '宁波鄞州农村商业银行',
    patterns: [{ reg: /^(620500)\d{10}$/g }],
  },
  {
    bankCode: '14203323',
    bankName: '宁波鄞州农村商业银行',
    patterns: [{ reg: /^(628300)\d{10}$/g }],
  },
  {
    bankCode: '14215881',
    bankName: '佛山市三水区农村信用合作社',
    patterns: [{ reg: /^(622343)\d{13}$/g }],
  },
  {
    bankCode: '14226510',
    bankName: '成都农村商业银行股份有限公司',
    patterns: [{ reg: /^(622345)\d{13}$/g }],
  },
  {
    bankCode: '14226510',
    bankName: '成都农村商业银行',
    patterns: [{ reg: /^(625516)\d{10}$/g }],
  },
  {
    bankCode: '14226510',
    bankName: '成都农村商业银行',
    patterns: [{ reg: /^(621516)\d{13}$/g }],
  },
  {
    bankCode: '14226510',
    bankName: '成都农村商业银行股份有限公司',
    patterns: [{ reg: /^(62326573)\d{11}$/g }],
  },
  {
    bankCode: '14243000',
    bankName: '江苏农信社',
    patterns: [{ reg: /^(622452)\d{13}$/g }],
  },
  {
    bankCode: '14243000',
    bankName: '江苏农信社',
    patterns: [{ reg: /^(622324)\d{13}$/g }],
  },
  {
    bankCode: '14243000',
    bankName: '江苏省农村信用社联合社',
    patterns: [{ reg: /^(621578)\d{13}$/g }],
  },
  {
    bankCode: '14243001',
    bankName: '江苏省农村信用社联合社',
    patterns: [{ reg: /^(623066)\d{13}$/g }],
  },
  {
    bankCode: '14243001',
    bankName: '江苏省农村信用社联合社',
    patterns: [{ reg: /^(623267)\d{13}$/g }],
  },
  {
    bankCode: '14283054',
    bankName: '吴江农商行',
    patterns: [{ reg: /^(622488)\d{10}$/g }],
  },
  {
    bankCode: '14283054',
    bankName: '吴江农商行',
    patterns: [{ reg: /^(622648)\d{10}$/g }],
  },
  {
    bankCode: '14283054',
    bankName: '吴江农商行',
    patterns: [{ reg: /^(623110)\d{10}$/g }],
  },
  {
    bankCode: '14283054',
    bankName: '吴江农商行',
    patterns: [{ reg: /^(628248)\d{10}$/g }],
  },
  {
    bankCode: '14293300',
    bankName: '浙江省农村信用社联合社',
    patterns: [{ reg: /^(622858)\d{13}$/g }],
  },
  {
    bankCode: '14293300',
    bankName: '浙江省农村信用社联合社',
    patterns: [{ reg: /^(621058)\d{13}$/g }],
  },
  {
    bankCode: '14293300',
    bankName: '浙江省农村信用社联合社',
    patterns: [{ reg: /^(621527)\d{13}$/g }],
  },
  {
    bankCode: '14293300',
    bankName: '浙江省农村信用社联合社',
    patterns: [{ reg: /^(623091)\d{13}$/g }],
  },
  {
    bankCode: '14293300',
    bankName: '浙江省农村信用社联合社',
    patterns: [{ reg: /^(621537)\d{13}$/g }],
  },
  {
    bankCode: '14293300',
    bankName: '浙江省农村信用社联合社',
    patterns: [{ reg: /^(621736)\d{13}$/g }],
  },
  {
    bankCode: '14293301',
    bankName: '浙江省农村信用社联合社',
    patterns: [{ reg: /^(628280)\d{10}$/g }],
  },
  {
    bankCode: '14293301',
    bankName: '浙江省农村信用社联合社',
    patterns: [{ reg: /^(622288)\d{10}$/g }],
  },
  {
    bankCode: '14293301',
    bankName: '浙江省农村信用社联合社',
    patterns: [{ reg: /^(622686)\d{10}$/g }],
  },
  {
    bankCode: '14293310',
    bankName: '浙江农信杭州办事处',
    patterns: [{ reg: /^(623540)\d{13}$/g }],
  },
  {
    bankCode: '14315850',
    bankName: '珠海农村商业银行',
    patterns: [{ reg: /^(622859)\d{13}$/g }],
  },
  {
    bankCode: '14333050',
    bankName: '太仓农村商业银行',
    patterns: [{ reg: /^(625182)\d{10}$/g }],
  },
  {
    bankCode: '14333050',
    bankName: '太仓农村商业银行',
    patterns: [{ reg: /^(628247)\d{10}$/g }],
  },
  {
    bankCode: '14333051',
    bankName: '太仓农村商业银行',
    patterns: [{ reg: /^(622869)\d{13}$/g }],
  },
  {
    bankCode: '14333051',
    bankName: '太仓农村商业银行',
    patterns: [{ reg: /^(623075)\d{13}$/g }],
  },
  {
    bankCode: '14341770',
    bankName: '尧都区农村信用合作社联社',
    patterns: [{ reg: /^(622882)\d{13}$/g }],
  },
  {
    bankCode: '14367000',
    bankName: '贵州省农村信用社联合社',
    patterns: [{ reg: /^(622893)\d{13}$/g }],
  },
  {
    bankCode: '14367000',
    bankName: '贵州省农村信用社联合社',
    patterns: [{ reg: /^(621590)\d{13}$/g }],
  },
  {
    bankCode: '14367000',
    bankName: '贵州省农村信用社联合社',
    patterns: [{ reg: /^(621779)\d{13}$/g }],
  },
  {
    bankCode: '14373020',
    bankName: '无锡农村商业银行',
    patterns: [{ reg: /^(622895)\d{10}$/g }],
  },
  {
    bankCode: '14373020',
    bankName: '无锡农村商业银行',
    patterns: [{ reg: /^(623125)\d{10}$/g }],
  },
  {
    bankCode: '14385500',
    bankName: '湖南省农村信用社联合社',
    patterns: [{ reg: /^(621539)\d{13}$/g }],
  },
  {
    bankCode: '14385500',
    bankName: '湖南省农村信用社联合社',
    patterns: [{ reg: /^(621519)\d{13}$/g }],
  },
  {
    bankCode: '14385500',
    bankName: '湖南省农村信用社联合社',
    patterns: [{ reg: /^(623090)\d{13}$/g }],
  },
  {
    bankCode: '14385500',
    bankName: '湖南省农村信用社联合社',
    patterns: [{ reg: /^(622169)\d{13}$/g }],
  },
  {
    bankCode: '14394200',
    bankName: '江西农信联合社',
    patterns: [{ reg: /^(622681)\d{13}$/g }],
  },
  {
    bankCode: '14394200',
    bankName: '江西农信联合社',
    patterns: [{ reg: /^(622682)\d{13}$/g }],
  },
  {
    bankCode: '14394200',
    bankName: '江西农信联合社',
    patterns: [{ reg: /^(622683)\d{13}$/g }],
  },
  {
    bankCode: '14394200',
    bankName: '江西农信联合社',
    patterns: [{ reg: /^(621592)\d{10}$/g }],
  },
  {
    bankCode: '14404900',
    bankName: '河南省农村信用社联合社',
    patterns: [{ reg: /^(622991)\d{12}$/g }],
  },
  {
    bankCode: '14404900',
    bankName: '河南省农村信用社联合社',
    patterns: [{ reg: /^(623013)\d{12}$/g }],
  },
  {
    bankCode: '14404900',
    bankName: '河南省农村信用社联合社',
    patterns: [{ reg: /^(621585)\d{12}$/g }],
  },
  {
    bankCode: '14404900',
    bankName: '河南省农村信用社联合社',
    patterns: [{ reg: /^(623059)\d{12}$/g }],
  },
  {
    bankCode: '14411200',
    bankName: '河北省农村信用社联合社',
    patterns: [{ reg: /^(622358)\d{13}$/g }],
  },
  {
    bankCode: '14411200',
    bankName: '河北省农村信用社联合社',
    patterns: [{ reg: /^(621021)\d{13}$/g }],
  },
  {
    bankCode: '14411200',
    bankName: '河北省农村信用社联合社',
    patterns: [{ reg: /^(623501)\d{13}$/g }],
  },
  {
    bankCode: '14411200',
    bankName: '河北省农村信用社联合社',
    patterns: [{ reg: /^(623025)\d{13}$/g }],
  },
  {
    bankCode: '14411200',
    bankName: '河北省农村信用社联合社',
    patterns: [{ reg: /^(62326566)\d{11}$/g }],
  },
  {
    bankCode: '14427900',
    bankName: '陕西省农村信用社联合社',
    patterns: [{ reg: /^(622506)\d{13}$/g }],
  },
  {
    bankCode: '14427900',
    bankName: '陕西省农村信用社联合社',
    patterns: [{ reg: /^(621566)\d{13}$/g }],
  },
  {
    bankCode: '14427900',
    bankName: '陕西省农村信用社联合社',
    patterns: [{ reg: /^(623027)\d{13}$/g }],
  },
  {
    bankCode: '14427900',
    bankName: '陕西省农村信用社联合社',
    patterns: [{ reg: /^(623028)\d{13}$/g }],
  },
  {
    bankCode: '14427901',
    bankName: '陕西省农村信用社联合社',
    patterns: [{ reg: /^(628323)\d{10}$/g }],
  },
  {
    bankCode: '14436100',
    bankName: '广西农村信用社联合社',
    patterns: [{ reg: /^(623133)\d{13}$/g }],
  },
  {
    bankCode: '14436100',
    bankName: '广西农村信用社联合社',
    patterns: [{ reg: /^(622992)\d{13}$/g }],
  },
  {
    bankCode: '14436101',
    bankName: '广西壮族自治区农村信用社联合社',
    patterns: [{ reg: /^(628330)\d{10}$/g }],
  },
  {
    bankCode: '14436101',
    bankName: '广西壮族自治区农村信用社联合社',
    patterns: [{ reg: /^(625121)\d{10}$/g }],
  },
  {
    bankCode: '14448800',
    bankName: '新疆维吾尔自治区农村信用社联合',
    patterns: [{ reg: /^(621008)\d{10}$/g }],
  },
  {
    bankCode: '14448800',
    bankName: '新疆农村信用社联合社',
    patterns: [{ reg: /^(621525)\d{10}$/g }],
  },
  {
    bankCode: '14448800',
    bankName: '新疆维吾尔自治区农村信用社联合',
    patterns: [{ reg: /^(621287)\d{10}$/g }],
  },
  {
    bankCode: '14448802',
    bankName: '新疆维吾尔自治区农村信用社联合',
    patterns: [{ reg: /^(628277)\d{10}$/g }],
  },
  {
    bankCode: '14452400',
    bankName: '吉林农信联合社',
    patterns: [{ reg: /^(622935)\d{13}$/g }],
  },
  {
    bankCode: '14452400',
    bankName: '吉林农信联合社',
    patterns: [{ reg: /^(621531)\d{13}$/g }],
  },
  {
    bankCode: '14452402',
    bankName: '吉林省农村信用社联合社',
    patterns: [{ reg: /^(623181)\d{13}$/g }],
  },
  {
    bankCode: '14452404',
    bankName: '吉林省农村信用联合社',
    patterns: [{ reg: /^(623618)\d{13}$/g }],
  },
  {
    bankCode: '14468700',
    bankName: '黄河农村商业银行',
    patterns: [{ reg: /^(622947)\d{13}$/g }],
  },
  {
    bankCode: '14468700',
    bankName: '黄河农村商业银行',
    patterns: [{ reg: /^(621561)\d{13}$/g }],
  },
  {
    bankCode: '14468700',
    bankName: '黄河农村商业银行',
    patterns: [{ reg: /^(623095)\d{13}$/g }],
  },
  {
    bankCode: '14468702',
    bankName: '宁夏黄河农村商业银行',
    patterns: [{ reg: /^(625150)\d{10}$/g }],
  },
  {
    bankCode: '14468702',
    bankName: '宁夏黄河农村商业银行',
    patterns: [{ reg: /^(628326)\d{10}$/g }],
  },
  {
    bankCode: '14473600',
    bankName: '安徽省农村信用社联合社',
    patterns: [{ reg: /^(622953)\d{13}$/g }],
  },
  {
    bankCode: '14473600',
    bankName: '安徽省农村信用社联合社',
    patterns: [{ reg: /^(621526)\d{13}$/g }],
  },
  {
    bankCode: '14473601',
    bankName: '安徽省农村信用社联合社',
    patterns: [{ reg: /^(628387)\d{10}$/g }],
  },
  {
    bankCode: '14473601',
    bankName: '安徽省农村信用社联合社',
    patterns: [{ reg: /^(625225)\d{10}$/g }],
  },
  {
    bankCode: '14473601',
    bankName: '安徽省农村信用社联合社',
    patterns: [{ reg: /^(625226)\d{10}$/g }],
  },
  {
    bankCode: '14486400',
    bankName: '海南省农村信用社联合社',
    patterns: [{ reg: /^(621036)\d{13}$/g }],
  },
  {
    bankCode: '14486400',
    bankName: '海南省农村信用社联合社',
    patterns: [{ reg: /^(621536)\d{13}$/g }],
  },
  {
    bankCode: '14486400',
    bankName: '海南省农村信用社联合社',
    patterns: [{ reg: /^(621458)\d{13}$/g }],
  },
  {
    bankCode: '14498500',
    bankName: '青海省农村信用社联合社',
    patterns: [{ reg: /^(621065)\d{10}$/g }],
  },
  {
    bankCode: '14498500',
    bankName: '青海省农村信用社联合社',
    patterns: [{ reg: /^(623017)\d{10}$/g }],
  },
  {
    bankCode: '14498500',
    bankName: '青海省农村信用社联合社',
    patterns: [{ reg: /^(623213)\d{10}$/g }],
  },
  {
    bankCode: '14498500',
    bankName: '青海省农村信用社联合社',
    patterns: [{ reg: /^(621517)\d{10}$/g }],
  },
  {
    bankCode: '14498501',
    bankName: '青海省农村信用社联合社',
    patterns: [{ reg: /^(628289)\d{10}$/g }],
  },
  {
    bankCode: '14505800',
    bankName: '广东省农村信用社联合社',
    patterns: [{ reg: /^(622470)\d{13}$/g }],
  },
  {
    bankCode: '14505800',
    bankName: '广东省农村信用社联合社',
    patterns: [{ reg: /^(622477)\d{13}$/g }],
  },
  {
    bankCode: '14505800',
    bankName: '广东省农村信用社联合社',
    patterns: [{ reg: /^(622509)\d{13}$/g }],
  },
  {
    bankCode: '14505800',
    bankName: '广东省农村信用社联合社',
    patterns: [{ reg: /^(622510)\d{13}$/g }],
  },
  {
    bankCode: '14505800',
    bankName: '广东省农村信用社联合社',
    patterns: [{ reg: /^(622302)\d{10}$/g }],
  },
  {
    bankCode: '14505800',
    bankName: '广东省农村信用社联合社',
    patterns: [{ reg: /^(622362)\d{13}$/g }],
  },
  {
    bankCode: '14505800',
    bankName: '农信社',
    patterns: [{ reg: /^(621018106)\d{10}$/g }],
  },
  {
    bankCode: '14505800',
    bankName: '农信社',
    patterns: [{ reg: /^(621018107)\d{10}$/g }],
  },
  {
    bankCode: '14505800',
    bankName: '农信社',
    patterns: [{ reg: /^(621018109)\d{10}$/g }],
  },
  {
    bankCode: '14505800',
    bankName: '农信社',
    patterns: [{ reg: /^(621018111)\d{10}$/g }],
  },
  {
    bankCode: '14505800',
    bankName: '农信社',
    patterns: [{ reg: /^(621018112)\d{10}$/g }],
  },
  {
    bankCode: '14505800',
    bankName: '农信社',
    patterns: [{ reg: /^(621018136)\d{10}$/g }],
  },
  {
    bankCode: '14505800',
    bankName: '农信社',
    patterns: [{ reg: /^(621018147)\d{10}$/g }],
  },
  {
    bankCode: '14505800',
    bankName: '农信社',
    patterns: [{ reg: /^(6210188)\d{12}$/g }],
  },
  {
    bankCode: '14505800',
    bankName: '广东省农村信用社联合社',
    patterns: [{ reg: /^(621518)\d{13}$/g }],
  },
  {
    bankCode: '14505800',
    bankName: '广东省农村信用社联合社',
    patterns: [{ reg: /^(621728)\d{13}$/g }],
  },
  {
    bankCode: '14505800',
    bankName: '农信社',
    patterns: [{ reg: /^(621018110)\d{10}$/g }],
  },
  {
    bankCode: '14505800',
    bankName: '广东省农村信用社联合社',
    patterns: [{ reg: /^(621018)\d{13}$/g }],
  },
  {
    bankCode: '14505800',
    bankName: '农信社',
    patterns: [{ reg: /^(621018108)\d{10}$/g }],
  },
  {
    bankCode: '14505800',
    bankName: '农信社',
    patterns: [{ reg: /^(621018193)\d{10}$/g }],
  },
  {
    bankCode: '14511900',
    bankName: '内蒙古自治区农村信用联合社',
    patterns: [{ reg: /^(622976)\d{13}$/g }],
  },
  {
    bankCode: '14511900',
    bankName: '内蒙古自治区农村信用联合社',
    patterns: [{ reg: /^(621533)\d{13}$/g }],
  },
  {
    bankCode: '14511900',
    bankName: '内蒙古自治区农村信用联合社',
    patterns: [{ reg: /^(621362)\d{13}$/g }],
  },
  {
    bankCode: '14511900',
    bankName: '内蒙古自治区农村信用联合社',
    patterns: [{ reg: /^(621737)\d{13}$/g }],
  },
  {
    bankCode: '14526500',
    bankName: '四川省农村信用社联合社',
    patterns: [{ reg: /^(621033)\d{13}$/g }],
  },
  {
    bankCode: '14526500',
    bankName: '四川省农村信用社联合社',
    patterns: [{ reg: /^(621530)\d{13}$/g }],
  },
  {
    bankCode: '14526500',
    bankName: '四川省农村信用社联合社',
    patterns: [{ reg: /^(621457)\d{13}$/g }],
  },
  {
    bankCode: '14526500',
    bankName: '四川省农村信用社联合社',
    patterns: [{ reg: /^(621459)\d{13}$/g }],
  },
  {
    bankCode: '14526500',
    bankName: '四川省农村信用社联合社',
    patterns: [{ reg: /^(623201)\d{13}$/g }],
  },
  {
    bankCode: '14526500',
    bankName: '四川省农村信用社联合社',
    patterns: [{ reg: /^(623256)\d{13}$/g }],
  },
  {
    bankCode: '14526500',
    bankName: '四川省农村信用社联合社',
    patterns: [{ reg: /^(621099)\d{13}$/g }],
  },
  {
    bankCode: '14526501',
    bankName: '四川省农村信用社联合社',
    patterns: [{ reg: /^(628297)\d{10}$/g }],
  },
  {
    bankCode: '14526501',
    bankName: '四川省农村信用社联合社',
    patterns: [{ reg: /^(625097)\d{10}$/g }],
  },
  {
    bankCode: '14538200',
    bankName: '甘肃省农村信用社联合社',
    patterns: [{ reg: /^(621520)\d{13}$/g }],
  },
  {
    bankCode: '14538200',
    bankName: '甘肃省农村信用社联合社',
    patterns: [{ reg: /^(623065)\d{13}$/g }],
  },
  {
    bankCode: '14538200',
    bankName: '甘肃省农村信用社联合社',
    patterns: [{ reg: /^(621061)\d{13}$/g }],
  },
  {
    bankCode: '14538200',
    bankName: '甘肃省农村信用社联合社',
    patterns: [{ reg: /^(62326539)\d{11}$/g }],
  },
  {
    bankCode: '14538202',
    bankName: '甘肃省农村信用社联合社',
    patterns: [{ reg: /^(628332)\d{10}$/g }],
  },
  {
    bankCode: '14538202',
    bankName: '甘肃省农村信用社联合社',
    patterns: [{ reg: /^(625183)\d{10}$/g }],
  },
  {
    bankCode: '14542200',
    bankName: '辽宁省农村信用社联合社',
    patterns: [{ reg: /^(621026)\d{13}$/g }],
  },
  {
    bankCode: '14542200',
    bankName: '辽宁省农村信用社联合社',
    patterns: [{ reg: /^(621449)\d{13}$/g }],
  },
  {
    bankCode: '14542201',
    bankName: '辽宁省农村信用社联合社',
    patterns: [{ reg: /^(628399)\d{10}$/g }],
  },
  {
    bankCode: '14551600',
    bankName: '山西省农村信用社联合社',
    patterns: [{ reg: /^(622968)\d{13}$/g }],
  },
  {
    bankCode: '14551600',
    bankName: '山西省农村信用社',
    patterns: [{ reg: /^(621280)\d{13}$/g }],
  },
  {
    bankCode: '14551600',
    bankName: '山西省农村信用社联合社',
    patterns: [{ reg: /^(621580)\d{13}$/g }],
  },
  {
    bankCode: '14551600',
    bankName: '山西省农村信用社联合社',
    patterns: [{ reg: /^(623051)\d{13}$/g }],
  },
  {
    bankCode: '14561100',
    bankName: '天津滨海农村商业银行',
    patterns: [{ reg: /^(623109)\d{13}$/g }],
  },
  {
    bankCode: '14561100',
    bankName: '天津滨海农村商业银行',
    patterns: [{ reg: /^(621073)\d{13}$/g }],
  },
  {
    bankCode: '14572600',
    bankName: '黑龙江省农村信用社联合社',
    patterns: [{ reg: /^(621228)\d{13}$/g }],
  },
  {
    bankCode: '14572600',
    bankName: '黑龙江省农村信用社联合社',
    patterns: [{ reg: /^(621557)\d{13}$/g }],
  },
  {
    bankCode: '14572600',
    bankName: '黑龙江省农村信用社联合社',
    patterns: [{ reg: /^(623516)\d{13}$/g }],
  },
  {
    bankCode: '14572600',
    bankName: '黑龙江省农村信用社联合社',
    patterns: [{ reg: /^(62326502)\d{11}$/g }],
  },
  {
    bankCode: '14595210',
    bankName: '武汉农村商业银行',
    patterns: [{ reg: /^(621361)\d{13}$/g }],
  },
  {
    bankCode: '14595210',
    bankName: '武汉农村商业银行',
    patterns: [{ reg: /^(623033)\d{13}$/g }],
  },
  {
    bankCode: '14595210',
    bankName: '武汉农村商业银行',
    patterns: [{ reg: /^(623207)\d{13}$/g }],
  },
  {
    bankCode: '14603040',
    bankName: '江南农村商业银行',
    patterns: [{ reg: /^(622891)\d{13}$/g }],
  },
  {
    bankCode: '14603040',
    bankName: '江南农村商业银行',
    patterns: [{ reg: /^(621363)\d{13}$/g }],
  },
  {
    bankCode: '14603040',
    bankName: '江南农村商业银行',
    patterns: [{ reg: /^(623189)\d{13}$/g }],
  },
  {
    bankCode: '14603040',
    bankName: '江南农村商业银行',
    patterns: [{ reg: /^(623576)\d{13}$/g }],
  },
  {
    bankCode: '14616410',
    bankName: '海口联合农村商业银行',
    patterns: [{ reg: /^(623510)\d{13}$/g }],
  },
  {
    bankCode: '14620000',
    bankName: '大连农商行',
    patterns: [{ reg: /^(623603)\d{13}$/g }],
  },
  {
    bankCode: '14620000',
    bankName: '大连农商行',
    patterns: [{ reg: /^(621449082)\d{10}$/g }],
  },
  {
    bankCode: '14630000',
    bankName: '海口农村商业银行',
    patterns: [{ reg: /^(623673)\d{13}$/g }],
  },
  {
    bankCode: '14636410',
    bankName: '海口农村商业银行',
    patterns: [{ reg: /^(625126)\d{10}$/g }],
  },
  {
    bankCode: '14636410',
    bankName: '海口农村商业银行',
    patterns: [{ reg: /^(628320)\d{10}$/g }],
  },
  {
    bankCode: '14660000',
    bankName: '陕西秦农农村商业银行',
    patterns: [{ reg: /^(623628)\d{13}$/g }],
  },
  {
    bankCode: '14690000',
    bankName: '哈尔滨农村商业银行',
    patterns: [{ reg: /^(623659)\d{13}$/g }],
  },
  {
    bankCode: '14710000',
    bankName: '吉林九台农村商业银行',
    patterns: [{ reg: /^(627070)\d{13}$/g }],
  },
  {
    bankCode: '14720000',
    bankName: '长春发展农村商业银行',
    patterns: [{ reg: /^(623662)\d{13}$/g }],
  },
  {
    bankCode: '14730000',
    bankName: '长春农村商业银行',
    patterns: [{ reg: /^(627060)\d{13}$/g }],
  },
  {
    bankCode: '15003363',
    bankName: '安吉交银村镇银行',
    patterns: [{ reg: /^(621056802)\d{10}$/g }],
  },
  {
    bankCode: '15004526',
    bankName: '青岛崂山交银村镇银行',
    patterns: [{ reg: /^(621056805)\d{10}$/g }],
  },
  {
    bankCode: '15006518',
    bankName: '大邑交银兴民村镇银行',
    patterns: [{ reg: /^(621056801)\d{10}$/g }],
  },
  {
    bankCode: '15009028',
    bankName: '石河子交银村镇银行',
    patterns: [{ reg: /^(621056803)\d{10}$/g }],
  },
  {
    bankCode: '15013162',
    bankName: '江苏靖江润丰村镇银行',
    patterns: [{ reg: /^(623503001)\d{7}$/g }],
  },
  {
    bankCode: '15015363',
    bankName: '湖北嘉鱼吴江村镇银行',
    patterns: [{ reg: /^(622995)\d{10}$/g }],
  },
  {
    bankCode: '15024521',
    bankName: '青岛即墨惠民村镇银行',
    patterns: [{ reg: /^(6229756114)\d{9}$/g }],
  },
  {
    bankCode: '15024521',
    bankName: '青岛即墨惠民村镇银行',
    patterns: [{ reg: /^(622975682)\d{10}$/g }],
  },
  {
    bankCode: '15025371',
    bankName: '湖北仙桃京都村镇银行',
    patterns: [{ reg: /^(6229756115)\d{9}$/g }],
  },
  {
    bankCode: '15025371',
    bankName: '湖北仙桃京都村镇银行',
    patterns: [{ reg: /^(622975681)\d{10}$/g }],
  },
  {
    bankCode: '15033142',
    bankName: '句容苏南村镇银行',
    patterns: [{ reg: /^(62105903)\d{8}$/g }],
  },
  {
    bankCode: '15033142',
    bankName: '句容苏南村镇银行',
    patterns: [{ reg: /^(62105913)\d{8}$/g }],
  },
  {
    bankCode: '15033161',
    bankName: '兴化苏南村镇银行',
    patterns: [{ reg: /^(62105916)\d{8}$/g }],
  },
  {
    bankCode: '15033161',
    bankName: '兴化苏南村镇银行',
    patterns: [{ reg: /^(62105906)\d{8}$/g }],
  },
  {
    bankCode: '15036410',
    bankName: '海口苏南村镇银行',
    patterns: [{ reg: /^(62105915)\d{8}$/g }],
  },
  {
    bankCode: '15036410',
    bankName: '海口苏南村镇银行',
    patterns: [{ reg: /^(62105905)\d{8}$/g }],
  },
  {
    bankCode: '15036512',
    bankName: '双流诚民村镇银行',
    patterns: [{ reg: /^(62105901)\d{8}$/g }],
  },
  {
    bankCode: '15036512',
    bankName: '双流诚民村镇银行',
    patterns: [{ reg: /^(62105911)\d{8}$/g }],
  },
  {
    bankCode: '15036753',
    bankName: '宣汉诚民村镇银行',
    patterns: [{ reg: /^(62105900)\d{8}$/g }],
  },
  {
    bankCode: '15036753',
    bankName: '宣汉诚民村镇银行',
    patterns: [{ reg: /^(62105902)\d{8}$/g }],
  },
  {
    bankCode: '15043914',
    bankName: '福建闽清瑞狮村镇银行',
    patterns: [{ reg: /^(62359701)\d{11}$/g }],
  },
  {
    bankCode: '15043942',
    bankName: '福建仙游瑞狮村镇银行',
    patterns: [{ reg: /^(62355603)\d{11}$/g }],
  },
  {
    bankCode: '15044014',
    bankName: '福建建阳瑞狮村镇银行',
    patterns: [{ reg: /^(62355602)\d{11}$/g }],
  },
  {
    bankCode: '15044015',
    bankName: '福建建瓯瑞狮村镇银行',
    patterns: [{ reg: /^(621053)\d{13}$/g }],
  },
  {
    bankCode: '15044053',
    bankName: '福建永定瑞狮村镇银行',
    patterns: [{ reg: /^(62355601)\d{11}$/g }],
  },
  {
    bankCode: '15047915',
    bankName: '陕西户县海丝村镇银行',
    patterns: [{ reg: /^(62359704)\d{11}$/g }],
  },
  {
    bankCode: '15047917',
    bankName: '陕西临潼海丝村镇银行',
    patterns: [{ reg: /^(62359703)\d{11}$/g }],
  },
  {
    bankCode: '15047952',
    bankName: '陕西三原海丝村镇银行',
    patterns: [{ reg: /^(62359702)\d{11}$/g }],
  },
  {
    bankCode: '15053021',
    bankName: '无锡滨湖兴福村镇银行',
    patterns: [{ reg: /^(621260119)\d{10}$/g }],
  },
  {
    bankCode: '15053042',
    bankName: '常州金坛兴福村镇银行',
    patterns: [{ reg: /^(621260103)\d{10}$/g }],
  },
  {
    bankCode: '15053081',
    bankName: '淮安淮阴兴福村镇银行',
    patterns: [{ reg: /^(621260121)\d{10}$/g }],
  },
  {
    bankCode: '15053082',
    bankName: '淮安清河兴福村镇银行',
    patterns: [{ reg: /^(621260123)\d{10}$/g }],
  },
  {
    bankCode: '15053084',
    bankName: '淮安清浦兴福村镇银行',
    patterns: [{ reg: /^(621260105)\d{10}$/g }],
  },
  {
    bankCode: '15053112',
    bankName: '盐城滨海兴福村镇银行',
    patterns: [{ reg: /^(621260117)\d{10}$/g }],
  },
  {
    bankCode: '15053121',
    bankName: '扬州高邮兴福村镇银行',
    patterns: [{ reg: /^(621260113)\d{10}$/g }],
  },
  {
    bankCode: '15053166',
    bankName: '泰州高港兴福村镇银行',
    patterns: [{ reg: /^(621260107)\d{10}$/g }],
  },
  {
    bankCode: '15053185',
    bankName: '宿迁宿城兴福村镇银行',
    patterns: [{ reg: /^(621260108)\d{10}$/g }],
  },
  {
    bankCode: '15054935',
    bankName: '嵩县兴福村镇银行',
    patterns: [{ reg: /^(621260109)\d{10}$/g }],
  },
  {
    bankCode: '15054936',
    bankName: '汝阳兴福村镇银行',
    patterns: [{ reg: /^(621260111)\d{10}$/g }],
  },
  {
    bankCode: '15054937',
    bankName: '宜阳兴福村镇银行',
    patterns: [{ reg: /^(621260112)\d{10}$/g }],
  },
  {
    bankCode: '15054938',
    bankName: '洛宁兴福村镇银行',
    patterns: [{ reg: /^(621260115)\d{10}$/g }],
  },
  {
    bankCode: '15054963',
    bankName: '汤阴兴福村镇银行',
    patterns: [{ reg: /^(621260106)\d{10}$/g }],
  },
  {
    bankCode: '15054965',
    bankName: '内黄兴福村镇银行',
    patterns: [{ reg: /^(621260110)\d{10}$/g }],
  },
  {
    bankCode: '15055262',
    bankName: '当阳兴福村镇银行',
    patterns: [{ reg: /^(621260116)\d{10}$/g }],
  },
  {
    bankCode: '15055267',
    bankName: '秭归兴福村镇银行',
    patterns: [{ reg: /^(621260122)\d{10}$/g }],
  },
  {
    bankCode: '15055268',
    bankName: '长阳兴福村镇银行',
    patterns: [{ reg: /^(621260120)\d{10}$/g }],
  },
  {
    bankCode: '15055411',
    bankName: '恩施兴福村镇银行',
    patterns: [{ reg: /^(621260002)\d{10}$/g }],
  },
  {
    bankCode: '15055411',
    bankName: '恩施兴福村镇银行',
    patterns: [{ reg: /^(621260102)\d{10}$/g }],
  },
  {
    bankCode: '15055416',
    bankName: '咸丰常农商村镇银行',
    patterns: [{ reg: /^(621260001)\d{10}$/g }],
  },
  {
    bankCode: '15055425',
    bankName: '宜昌夷陵兴福村镇银行',
    patterns: [{ reg: /^(621260118)\d{10}$/g }],
  },
  {
    bankCode: '15057323',
    bankName: '昆明盘龙兴福村镇银行',
    patterns: [{ reg: /^(621260125)\d{10}$/g }],
  },
  {
    bankCode: '15057365',
    bankName: '罗平兴福村镇银行',
    patterns: [{ reg: /^(621260132)\d{10}$/g }],
  },
  {
    bankCode: '15057366',
    bankName: '师宗兴福村镇银行',
    patterns: [{ reg: /^(621260127)\d{10}$/g }],
  },
  {
    bankCode: '15057367',
    bankName: '陆良兴福村镇银行',
    patterns: [{ reg: /^(621260130)\d{10}$/g }],
  },
  {
    bankCode: '15057371',
    bankName: '曲靖沾益兴福村镇银行',
    patterns: [{ reg: /^(621260135)\d{10}$/g }],
  },
  {
    bankCode: '15057384',
    bankName: '南华兴福村镇银行',
    patterns: [{ reg: /^(621260133)\d{10}$/g }],
  },
  {
    bankCode: '15057388',
    bankName: '元谋兴福村镇银行',
    patterns: [{ reg: /^(621260128)\d{10}$/g }],
  },
  {
    bankCode: '15057389',
    bankName: '武定兴福村镇银行',
    patterns: [{ reg: /^(621260131)\d{10}$/g }],
  },
  {
    bankCode: '15057412',
    bankName: '江川兴福村镇银行',
    patterns: [{ reg: /^(621260129)\d{10}$/g }],
  },
  {
    bankCode: '15057416',
    bankName: '易门兴福村镇银行',
    patterns: [{ reg: /^(621260126)\d{10}$/g }],
  },
  {
    bankCode: '15071126',
    bankName: '天津宝坻浦发村镇银行',
    patterns: [{ reg: /^(621275341)\d{10}$/g }],
  },
  {
    bankCode: '15071685',
    bankName: '泽州浦发村镇银行',
    patterns: [{ reg: /^(621275171)\d{10}$/g }],
  },
  {
    bankCode: '15072220',
    bankName: '大连甘井子浦发村镇银行',
    patterns: [{ reg: /^(621275181)\d{10}$/g }],
  },
  {
    bankCode: '15072434',
    bankName: '公主岭浦发村镇银行股份有限公司',
    patterns: [{ reg: /^(621275291)\d{10}$/g }],
  },
  {
    bankCode: '15072610',
    bankName: '哈尔滨呼兰浦发村镇银行股份有限',
    patterns: [{ reg: /^(621275281)\d{10}$/g }],
  },
  {
    bankCode: '15072900',
    bankName: '奉贤浦发村镇银行',
    patterns: [{ reg: /^(621275111)\d{10}$/g }],
  },
  {
    bankCode: '15073022',
    bankName: '江苏江阴浦发村镇银行',
    patterns: [{ reg: /^(621275191)\d{10}$/g }],
  },
  {
    bankCode: '15073043',
    bankName: '溧阳浦发村镇银行',
    patterns: [{ reg: /^(621275121)\d{10}$/g }],
  },
  {
    bankCode: '15073327',
    bankName: '宁波海曙浦发村镇银行',
    patterns: [{ reg: /^(621275321)\d{10}$/g }],
  },
  {
    bankCode: '15073335',
    bankName: '浙江平阳浦发村镇银行',
    patterns: [{ reg: /^(621275221)\d{10}$/g }],
  },
  {
    bankCode: '15073374',
    bankName: '浙江新昌浦发村镇银行',
    patterns: [{ reg: /^(621275201)\d{10}$/g }],
  },
  {
    bankCode: '15074383',
    bankName: '江西临川浦发村镇银行',
    patterns: [{ reg: /^(621275251)\d{10}$/g }],
  },
  {
    bankCode: '15074667',
    bankName: '邹平浦发村镇银行',
    patterns: [{ reg: /^(621275161)\d{10}$/g }],
  },
  {
    bankCode: '15074914',
    bankName: '河南巩义浦发村镇银行',
    patterns: [{ reg: /^(621275131)\d{10}$/g }],
  },
  {
    bankCode: '15075523',
    bankName: '湖南茶陵浦发村镇银行',
    patterns: [{ reg: /^(621275241)\d{10}$/g }],
  },
  {
    bankCode: '15075542',
    bankName: '湖南衡南浦发村镇银行',
    patterns: [{ reg: /^(621275271)\d{10}$/g }],
  },
  {
    bankCode: '15075612',
    bankName: '湖南沅江浦发村镇银行',
    patterns: [{ reg: /^(621275231)\d{10}$/g }],
  },
  {
    bankCode: '15075632',
    bankName: '资兴浦发村镇银行',
    patterns: [{ reg: /^(621275141)\d{10}$/g }],
  },
  {
    bankCode: '15075638',
    bankName: '临武浦发村镇银行',
    patterns: [{ reg: /^(621275261)\d{10}$/g }],
  },
  {
    bankCode: '15076581',
    bankName: '绵竹浦发村镇银行',
    patterns: [{ reg: /^(621275101)\d{10}$/g }],
  },
  {
    bankCode: '15076900',
    bankName: '重庆巴南浦发村镇银行',
    patterns: [{ reg: /^(621275151)\d{10}$/g }],
  },
  {
    bankCode: '15077314',
    bankName: '富民浦发村镇银行',
    patterns: [{ reg: /^(621275301)\d{10}$/g }],
  },
  {
    bankCode: '15077972',
    bankName: '韩城浦发村镇银行股份有限公司',
    patterns: [{ reg: /^(621275211)\d{10}$/g }],
  },
  {
    bankCode: '15078213',
    bankName: '甘肃榆中浦发村镇银行',
    patterns: [{ reg: /^(621275311)\d{10}$/g }],
  },
  {
    bankCode: '15078812',
    bankName: '乌鲁木齐米东浦发村镇银行',
    patterns: [{ reg: /^(621275331)\d{10}$/g }],
  },
  {
    bankCode: '15083120',
    bankName: '江苏邗江联合村镇银行',
    patterns: [{ reg: /^(621092007)\d{10}$/g }],
  },
  {
    bankCode: '15083120',
    bankName: '江苏邗江联合村镇银行',
    patterns: [{ reg: /^(62109209)\d{11}$/g }],
  },
  {
    bankCode: '15083333',
    bankName: '浙江乐清联合村镇银行',
    patterns: [{ reg: /^(62109207)\d{11}$/g }],
  },
  {
    bankCode: '15083333',
    bankName: '浙江乐清联合村镇银行',
    patterns: [{ reg: /^(621092003)\d{10}$/g }],
  },
  {
    bankCode: '15083351',
    bankName: '浙江嘉善联合村镇银行',
    patterns: [{ reg: /^(621092002)\d{10}$/g }],
  },
  {
    bankCode: '15083351',
    bankName: '浙江嘉善联合村镇银行',
    patterns: [{ reg: /^(62109202)\d{11}$/g }],
  },
  {
    bankCode: '15083362',
    bankName: '浙江长兴联合村镇银行',
    patterns: [{ reg: /^(621092001)\d{10}$/g }],
  },
  {
    bankCode: '15083362',
    bankName: '浙江长兴联合村镇银行',
    patterns: [{ reg: /^(62109203)\d{11}$/g }],
  },
  {
    bankCode: '15083370',
    bankName: '浙江柯桥联合村镇银行',
    patterns: [{ reg: /^(621092008)\d{10}$/g }],
  },
  {
    bankCode: '15083370',
    bankName: '浙江柯桥联合村镇银行',
    patterns: [{ reg: /^(62109208)\d{11}$/g }],
  },
  {
    bankCode: '15083375',
    bankName: '浙江诸暨联合村镇银行',
    patterns: [{ reg: /^(62109211)\d{11}$/g }],
  },
  {
    bankCode: '15083387',
    bankName: '浙江义乌联合村镇银行',
    patterns: [{ reg: /^(621092006)\d{10}$/g }],
  },
  {
    bankCode: '15083387',
    bankName: '浙江义乌联合村镇银行',
    patterns: [{ reg: /^(62109205)\d{11}$/g }],
  },
  {
    bankCode: '15083412',
    bankName: '浙江常山联合村镇银行',
    patterns: [{ reg: /^(62109210)\d{11}$/g }],
  },
  {
    bankCode: '15083412',
    bankName: '浙江常山联合村镇银行',
    patterns: [{ reg: /^(621092004)\d{10}$/g }],
  },
  {
    bankCode: '15083433',
    bankName: '浙江云和联合村镇银行',
    patterns: [{ reg: /^(62109212)\d{11}$/g }],
  },
  {
    bankCode: '15083454',
    bankName: '浙江温岭联合村镇银行',
    patterns: [{ reg: /^(621092005)\d{10}$/g }],
  },
  {
    bankCode: '15083454',
    bankName: '浙江温岭联合村镇银行',
    patterns: [{ reg: /^(62109206)\d{11}$/g }],
  },
  {
    bankCode: '15083763',
    bankName: '安徽寿县联合村镇银行',
    patterns: [{ reg: /^(621092011)\d{10}$/g }],
  },
  {
    bankCode: '15083763',
    bankName: '安徽寿县联合村镇银行',
    patterns: [{ reg: /^(62109214)\d{11}$/g }],
  },
  {
    bankCode: '15083764',
    bankName: '安徽霍邱联合村镇银行',
    patterns: [{ reg: /^(621092012)\d{10}$/g }],
  },
  {
    bankCode: '15083764',
    bankName: '安徽霍邱联合村镇银行',
    patterns: [{ reg: /^(62109215)\d{11}$/g }],
  },
  {
    bankCode: '15083767',
    bankName: '安徽霍山联合村镇银行',
    patterns: [{ reg: /^(621092010)\d{10}$/g }],
  },
  {
    bankCode: '15083767',
    bankName: '安徽霍山联合村镇银行',
    patterns: [{ reg: /^(62109213)\d{11}$/g }],
  },
  {
    bankCode: '15093072',
    bankName: '江苏东海张农商村镇银行',
    patterns: [{ reg: /^(621308)\d{11}$/g }],
  },
  {
    bankCode: '15094582',
    bankName: '寿光张农商村镇银行',
    patterns: [{ reg: /^(621219)\d{11}$/g }],
  },
  {
    bankCode: '15103352',
    bankName: '浙江平湖工银村镇银行',
    patterns: [{ reg: /^(621230)\d{13}$/g }],
  },
  {
    bankCode: '15106919',
    bankName: '重庆璧山工银村镇银行',
    patterns: [{ reg: /^(621229)\d{13}$/g }],
  },
  {
    bankCode: '15111027',
    bankName: '北京密云汇丰村镇银行',
    patterns: [{ reg: /^(621250004)\d{7}$/g }],
  },
  {
    bankCode: '15112221',
    bankName: '大连普兰店汇丰村镇银行',
    patterns: [{ reg: /^(621250006)\d{7}$/g }],
  },
  {
    bankCode: '15113961',
    bankName: '福建永安汇丰村镇银行',
    patterns: [{ reg: /^(621250003)\d{7}$/g }],
  },
  {
    bankCode: '15114653',
    bankName: '山东荣成汇丰村镇银行',
    patterns: [{ reg: /^(621250011)\d{7}$/g }],
  },
  {
    bankCode: '15115270',
    bankName: '湖北随州曾都汇丰村镇银行',
    patterns: [{ reg: /^(621250001)\d{7}$/g }],
  },
  {
    bankCode: '15115331',
    bankName: '湖北麻城汇丰村镇银行',
    patterns: [{ reg: /^(621250012)\d{7}$/g }],
  },
  {
    bankCode: '15115374',
    bankName: '湖北天门汇丰村镇银行',
    patterns: [{ reg: /^(621250008)\d{7}$/g }],
  },
  {
    bankCode: '15115575',
    bankName: '湖南平江汇丰村镇银行',
    patterns: [{ reg: /^(621250010)\d{7}$/g }],
  },
  {
    bankCode: '15115893',
    bankName: '广东恩平汇丰村镇银行',
    patterns: [{ reg: /^(621250005)\d{7}$/g }],
  },
  {
    bankCode: '15116917',
    bankName: '重庆大足汇丰村镇银行有限责任公',
    patterns: [{ reg: /^(621250002)\d{7}$/g }],
  },
  {
    bankCode: '15116918',
    bankName: '重庆荣昌汇丰村镇银行',
    patterns: [{ reg: /^(621250009)\d{7}$/g }],
  },
  {
    bankCode: '15116923',
    bankName: '重庆丰都汇丰村镇银行',
    patterns: [{ reg: /^(621250007)\d{7}$/g }],
  },
  {
    bankCode: '15123181',
    bankName: '江苏沭阳东吴村镇银行',
    patterns: [{ reg: /^(621241001)\d{10}$/g }],
  },
  {
    bankCode: '15123182',
    bankName: '江苏泗阳东吴村镇银行',
    patterns: [{ reg: /^(621241003)\d{10}$/g }],
  },
  {
    bankCode: '15123183',
    bankName: '江苏泗洪东吴村镇银行',
    patterns: [{ reg: /^(621241002)\d{10}$/g }],
  },
  {
    bankCode: '15123184',
    bankName: '江苏宿豫东吴村镇银行',
    patterns: [{ reg: /^(621241004)\d{10}$/g }],
  },
  {
    bankCode: '15136900',
    bankName: '重庆农村商业银行',
    patterns: [{ reg: /^(622218)\d{10}$/g }],
  },
  {
    bankCode: '15136900',
    bankName: '重庆农村商业银行',
    patterns: [{ reg: /^(628267)\d{10}$/g }],
  },
  {
    bankCode: '15141461',
    bankName: '三河蒙银村镇银行',
    patterns: [{ reg: /^(62134615)\d{11}$/g }],
  },
  {
    bankCode: '15141695',
    bankName: '朔州市城区蒙银村镇银行',
    patterns: [{ reg: /^(62134614)\d{11}$/g }],
  },
  {
    bankCode: '15141917',
    bankName: '呼和浩特市如意蒙银村镇银行',
    patterns: [{ reg: /^(62134617)\d{11}$/g }],
  },
  {
    bankCode: '15141918',
    bankName: '呼和浩特市赛罕蒙银村镇银行',
    patterns: [{ reg: /^(62134616)\d{11}$/g }],
  },
  {
    bankCode: '15141919',
    bankName: '呼和浩特市新城蒙银村镇银行',
    patterns: [{ reg: /^(62134605)\d{11}$/g }],
  },
  {
    bankCode: '15141921',
    bankName: '土默特右旗蒙银村镇银行',
    patterns: [{ reg: /^(62134608)\d{11}$/g }],
  },
  {
    bankCode: '15141925',
    bankName: '包头市昆都仑蒙银村镇银行',
    patterns: [{ reg: /^(62134620)\d{11}$/g }],
  },
  {
    bankCode: '15141963',
    bankName: '扎兰屯蒙银村镇银行',
    patterns: [{ reg: /^(62134603)\d{11}$/g }],
  },
  {
    bankCode: '15141984',
    bankName: '扎赉特蒙银村镇银行',
    patterns: [{ reg: /^(62134604)\d{11}$/g }],
  },
  {
    bankCode: '15141985',
    bankName: '突泉屯蒙银村镇银行',
    patterns: [{ reg: /^(62134609)\d{11}$/g }],
  },
  {
    bankCode: '15141992',
    bankName: '霍林郭勒蒙银村镇银行',
    patterns: [{ reg: /^(62134622)\d{11}$/g }],
  },
  {
    bankCode: '15141995',
    bankName: '开鲁蒙银村镇银行',
    patterns: [{ reg: /^(62134621)\d{11}$/g }],
  },
  {
    bankCode: '15142035',
    bankName: '卓资蒙银村镇银行',
    patterns: [{ reg: /^(62134602)\d{11}$/g }],
  },
  {
    bankCode: '15142042',
    bankName: '察哈尔右翼前旗蒙银村镇银行',
    patterns: [{ reg: /^(62134601)\d{11}$/g }],
  },
  {
    bankCode: '15142046',
    bankName: '四子王蒙银村镇银行',
    patterns: [{ reg: /^(62134613)\d{11}$/g }],
  },
  {
    bankCode: '15142050',
    bankName: '鄂尔多斯市东胜蒙银村镇银行',
    patterns: [{ reg: /^(621346003)\d{10}$/g }],
  },
  {
    bankCode: '15142050',
    bankName: '鄂尔多斯市东胜蒙银村镇银行',
    patterns: [{ reg: /^(62134625)\d{11}$/g }],
  },
  {
    bankCode: '15142051',
    bankName: '鄂尔多斯市铁西蒙银村镇银行',
    patterns: [{ reg: /^(62134611)\d{11}$/g }],
  },
  {
    bankCode: '15142054',
    bankName: '鄂托克前旗蒙银村镇银行',
    patterns: [{ reg: /^(62134624)\d{11}$/g }],
  },
  {
    bankCode: '15142061',
    bankName: '呼和浩特市玉泉蒙银村镇银行',
    patterns: [{ reg: /^(62354320)\d{10}$/g }],
  },
  {
    bankCode: '15142072',
    bankName: '五原蒙银村镇银行',
    patterns: [{ reg: /^(62134606)\d{11}$/g }],
  },
  {
    bankCode: '15142073',
    bankName: '磴口蒙银村镇银行',
    patterns: [{ reg: /^(62134626)\d{11}$/g }],
  },
  {
    bankCode: '15142075',
    bankName: '乌拉特中旗蒙银村镇银行',
    patterns: [{ reg: /^(62134607)\d{11}$/g }],
  },
  {
    bankCode: '15142080',
    bankName: '方大村镇银行',
    patterns: [{ reg: /^(621346002)\d{10}$/g }],
  },
  {
    bankCode: '15142080',
    bankName: '方大村镇银行',
    patterns: [{ reg: /^(621346102)\d{10}$/g }],
  },
  {
    bankCode: '15142229',
    bankName: '大连旅顺口蒙银村镇银行',
    patterns: [{ reg: /^(62134618)\d{11}$/g }],
  },
  {
    bankCode: '15142453',
    bankName: '柳河蒙银村镇银行',
    patterns: [{ reg: /^(62134619)\d{11}$/g }],
  },
  {
    bankCode: '15143141',
    bankName: '江苏丹徒蒙银村镇银行',
    patterns: [{ reg: /^(62134627)\d{11}$/g }],
  },
  {
    bankCode: '15144592',
    bankName: '潍坊市寒亭区蒙银村镇银行',
    patterns: [{ reg: /^(62134623)\d{11}$/g }],
  },
  {
    bankCode: '15145840',
    bankName: '深圳龙岗鼎业村镇银行',
    patterns: [{ reg: /^(621346001)\d{10}$/g }],
  },
  {
    bankCode: '15147021',
    bankName: '水城蒙银村镇银行',
    patterns: [{ reg: /^(62354332)\d{10}$/g }],
  },
  {
    bankCode: '15147042',
    bankName: '仁怀蒙银村镇银行',
    patterns: [{ reg: /^(62354331)\d{10}$/g }],
  },
  {
    bankCode: '15151000',
    bankName: '北京大兴九银村镇银行',
    patterns: [{ reg: /^(621326919)\d{10}$/g }],
  },
  {
    bankCode: '15153010',
    bankName: '南京六合九银村镇银行',
    patterns: [{ reg: /^(621326969)\d{10}$/g }],
  },
  {
    bankCode: '15154215',
    bankName: '南昌昌东九银村镇银行',
    patterns: [{ reg: /^(621326979)\d{10}$/g }],
  },
  {
    bankCode: '15154223',
    bankName: '景德镇昌江九银村镇银行',
    patterns: [{ reg: /^(621326878)\d{10}$/g }],
  },
  {
    bankCode: '15154242',
    bankName: '瑞昌九银村镇银行',
    patterns: [{ reg: /^(621326989)\d{10}$/g }],
  },
  {
    bankCode: '15154244',
    bankName: '修水九银村镇银行',
    patterns: [{ reg: /^(621326939)\d{10}$/g }],
  },
  {
    bankCode: '15154247',
    bankName: '庐山九银艺术村镇银行',
    patterns: [{ reg: /^(621326888)\d{10}$/g }],
  },
  {
    bankCode: '15154251',
    bankName: '彭泽九银村镇银行',
    patterns: [{ reg: /^(621326999)\d{10}$/g }],
  },
  {
    bankCode: '15154261',
    bankName: '分宜九银村镇银行',
    patterns: [{ reg: /^(621326828)\d{10}$/g }],
  },
  {
    bankCode: '15154271',
    bankName: '贵溪九银村镇银行股份有限公司',
    patterns: [{ reg: /^(621326959)\d{10}$/g }],
  },
  {
    bankCode: '15154315',
    bankName: '奉新九银村镇银行',
    patterns: [{ reg: /^(621326858)\d{10}$/g }],
  },
  {
    bankCode: '15154319',
    bankName: '靖安九银村镇银行',
    patterns: [{ reg: /^(621326848)\d{10}$/g }],
  },
  {
    bankCode: '15154321',
    bankName: '铜鼓九银村镇银行',
    patterns: [{ reg: /^(621326868)\d{10}$/g }],
  },
  {
    bankCode: '15154352',
    bankName: '井冈山九银村镇银行',
    patterns: [{ reg: /^(621326929)\d{10}$/g }],
  },
  {
    bankCode: '15154375',
    bankName: '崇仁九银村镇银行',
    patterns: [{ reg: /^(621326838)\d{10}$/g }],
  },
  {
    bankCode: '15154379',
    bankName: '资溪九银村镇银行',
    patterns: [{ reg: /^(621326818)\d{10}$/g }],
  },
  {
    bankCode: '15154770',
    bankName: '日照九银村镇银行',
    patterns: [{ reg: /^(621326949)\d{10}$/g }],
  },
  {
    bankCode: '15156030',
    bankName: '中山小榄村镇银行',
    patterns: [{ reg: /^(621326763)\d{9}$/g }],
  },
  {
    bankCode: '15173020',
    bankName: '江苏惠山民泰村镇银行',
    patterns: [{ reg: /^(621338005)\d{10}$/g }],
  },
  {
    bankCode: '15173089',
    bankName: '江苏金湖民泰村镇银行',
    patterns: [{ reg: /^(621338008)\d{10}$/g }],
  },
  {
    bankCode: '15173120',
    bankName: '江苏邗江民泰村镇银行',
    patterns: [{ reg: /^(621338001)\d{10}$/g }],
  },
  {
    bankCode: '15173354',
    bankName: '浙江桐乡民泰村镇银行',
    patterns: [{ reg: /^(621338007)\d{10}$/g }],
  },
  {
    bankCode: '15173439',
    bankName: '浙江龙泉民泰村镇银行',
    patterns: [{ reg: /^(621338003)\d{10}$/g }],
  },
  {
    bankCode: '15174056',
    bankName: '福建漳平民泰村镇银行',
    patterns: [{ reg: /^(621338002)\d{10}$/g }],
  },
  {
    bankCode: '15175810',
    bankName: '广州白云民泰村镇银行',
    patterns: [{ reg: /^(621338010)\d{10}$/g }],
  },
  {
    bankCode: '15176900',
    bankName: '重庆九龙坡民泰村镇银行',
    patterns: [{ reg: /^(621338006)\d{10}$/g }],
  },
  {
    bankCode: '15176936',
    bankName: '重庆彭水民泰村镇银行',
    patterns: [{ reg: /^(621338009)\d{10}$/g }],
  },
  {
    bankCode: '15181035',
    bankName: '北京平谷新华村镇银行',
    patterns: [{ reg: /^(621353121)\d{10}$/g }],
  },
  {
    bankCode: '15181123',
    bankName: '天津静海新华村镇银行',
    patterns: [{ reg: /^(621353108)\d{10}$/g }],
  },
  {
    bankCode: '15181123',
    bankName: '天津静海新华村镇银行',
    patterns: [{ reg: /^(621353008)\d{10}$/g }],
  },
  {
    bankCode: '15181449',
    bankName: '沧州盐山新华村镇银行',
    patterns: [{ reg: /^(621353113)\d{10}$/g }],
  },
  {
    bankCode: '15181453',
    bankName: '沧州海兴新华村镇银行',
    patterns: [{ reg: /^(621353115)\d{10}$/g }],
  },
  {
    bankCode: '15181468',
    bankName: '大厂回族自治县新华村镇银行',
    patterns: [{ reg: /^(621353117)\d{10}$/g }],
  },
  {
    bankCode: '15183651',
    bankName: '安徽当涂新华村镇银行',
    patterns: [{ reg: /^(621353002)\d{10}$/g }],
  },
  {
    bankCode: '15183651',
    bankName: '安徽当涂新华村镇银行',
    patterns: [{ reg: /^(621353102)\d{10}$/g }],
  },
  {
    bankCode: '15183653',
    bankName: '安徽和县新华村镇银行',
    patterns: [{ reg: /^(621353105)\d{10}$/g }],
  },
  {
    bankCode: '15183653',
    bankName: '安徽和县新华村镇银行',
    patterns: [{ reg: /^(621353005)\d{10}$/g }],
  },
  {
    bankCode: '15183687',
    bankName: '望江新华村镇银行',
    patterns: [{ reg: /^(621353107)\d{10}$/g }],
  },
  {
    bankCode: '15183687',
    bankName: '望江新华村镇银行',
    patterns: [{ reg: /^(621353007)\d{10}$/g }],
  },
  {
    bankCode: '15183772',
    bankName: '郎溪新华村镇银行',
    patterns: [{ reg: /^(621353003)\d{10}$/g }],
  },
  {
    bankCode: '15183772',
    bankName: '郎溪新华村镇银行',
    patterns: [{ reg: /^(621353103)\d{10}$/g }],
  },
  {
    bankCode: '15184299',
    bankName: '江西兴国新华村镇银行',
    patterns: [{ reg: /^(621353006)\d{10}$/g }],
  },
  {
    bankCode: '15184299',
    bankName: '江西兴国新华村镇银行',
    patterns: [{ reg: /^(621353106)\d{10}$/g }],
  },
  {
    bankCode: '15184666',
    bankName: '山东博兴新华村镇银行',
    patterns: [{ reg: /^(621353109)\d{10}$/g }],
  },
  {
    bankCode: '15185810',
    bankName: '广州番禹新华村镇银行',
    patterns: [{ reg: /^(621353001)\d{10}$/g }],
  },
  {
    bankCode: '15185810',
    bankName: '广州番禹新华村镇银行',
    patterns: [{ reg: /^(621353101)\d{10}$/g }],
  },
  {
    bankCode: '15185848',
    bankName: '深圳龙华新华村镇银行',
    patterns: [{ reg: /^(621353124)\d{10}$/g }],
  },
  {
    bankCode: '15185882',
    bankName: '佛山南海新华村镇银行',
    patterns: [{ reg: /^(621353110)\d{10}$/g }],
  },
  {
    bankCode: '15185897',
    bankName: '江门新会新华村镇银行',
    patterns: [{ reg: /^(621353112)\d{10}$/g }],
  },
  {
    bankCode: '15186020',
    bankName: '东莞常平新华村镇银行',
    patterns: [{ reg: /^(621353111)\d{10}$/g }],
  },
  {
    bankCode: '15187924',
    bankName: '铜川耀州新华村镇银行',
    patterns: [{ reg: /^(621353123)\d{10}$/g }],
  },
  {
    bankCode: '15188084',
    bankName: '西安长安新华村镇银行',
    patterns: [{ reg: /^(621353122)\d{10}$/g }],
  },
  {
    bankCode: '15188211',
    bankName: '兰州永登新华村镇银行',
    patterns: [{ reg: /^(621353118)\d{10}$/g }],
  },
  {
    bankCode: '15188212',
    bankName: '兰州皋兰新华村镇银行',
    patterns: [{ reg: /^(621353119)\d{10}$/g }],
  },
  {
    bankCode: '15188214',
    bankName: '兰州七里河新华村镇银行',
    patterns: [{ reg: /^(621353120)\d{10}$/g }],
  },
  {
    bankCode: '15193034',
    bankName: '睢宁中银富登村镇银行',
    patterns: [{ reg: /^(621356032)\d{10}$/g }],
  },
  {
    bankCode: '15193050',
    bankName: '苏州吴江中银富登村镇银行',
    patterns: [{ reg: /^(621356034)\d{10}$/g }],
  },
  {
    bankCode: '15193111',
    bankName: '响水中银富登村镇银行',
    patterns: [{ reg: /^(621356040)\d{10}$/g }],
  },
  {
    bankCode: '15193320',
    bankName: '宁波镇海中银富登村镇银行',
    patterns: [{ reg: /^(621356014)\d{10}$/g }],
  },
  {
    bankCode: '15193321',
    bankName: '象山中银富登村镇银行',
    patterns: [{ reg: /^(621356038)\d{10}$/g }],
  },
  {
    bankCode: '15193322',
    bankName: '宁海中银富登村镇银行',
    patterns: [{ reg: /^(621356013)\d{10}$/g }],
  },
  {
    bankCode: '15193724',
    bankName: '临泉中银富登村镇银行',
    patterns: [{ reg: /^(621356055)\d{10}$/g }],
  },
  {
    bankCode: '15193725',
    bankName: '太和中银富登村镇银行',
    patterns: [{ reg: /^(621356046)\d{10}$/g }],
  },
  {
    bankCode: '15193728',
    bankName: '阜南中银富登村镇银行',
    patterns: [{ reg: /^(621356044)\d{10}$/g }],
  },
  {
    bankCode: '15193729',
    bankName: '颍上中银富登村镇银行',
    patterns: [{ reg: /^(621356030)\d{10}$/g }],
  },
  {
    bankCode: '15193731',
    bankName: '界首中银富登村镇银行',
    patterns: [{ reg: /^(621356026)\d{10}$/g }],
  },
  {
    bankCode: '15193753',
    bankName: '来安中银富登村镇银行',
    patterns: [{ reg: /^(621356016)\d{10}$/g }],
  },
  {
    bankCode: '15193754',
    bankName: '全椒中银富登村镇银行',
    patterns: [{ reg: /^(621356015)\d{10}$/g }],
  },
  {
    bankCode: '15194318',
    bankName: '宜丰中银富登村镇银行',
    patterns: [{ reg: /^(621356029)\d{10}$/g }],
  },
  {
    bankCode: '15194332',
    bankName: '上饶中银富登村镇银行',
    patterns: [{ reg: /^(621356047)\d{10}$/g }],
  },
  {
    bankCode: '15194356',
    bankName: '新干中银富登村镇银行',
    patterns: [{ reg: /^(621356059)\d{10}$/g }],
  },
  {
    bankCode: '15194358',
    bankName: '泰和中银富登村镇银行',
    patterns: [{ reg: /^(621356054)\d{10}$/g }],
  },
  {
    bankCode: '15194362',
    bankName: '安福中银富登村镇银行',
    patterns: [{ reg: /^(621356027)\d{10}$/g }],
  },
  {
    bankCode: '15194563',
    bankName: '栖霞中银富登村镇银行',
    patterns: [{ reg: /^(621356023)\d{10}$/g }],
  },
  {
    bankCode: '15194588',
    bankName: '青州中银富登村镇银行',
    patterns: [{ reg: /^(621356005)\d{10}$/g }],
  },
  {
    bankCode: '15194616',
    bankName: '嘉祥中银富登村镇银行',
    patterns: [{ reg: /^(621356018)\d{10}$/g }],
  },
  {
    bankCode: '15194617',
    bankName: '汶上中银富登村镇银行',
    patterns: [{ reg: /^(621356048)\d{10}$/g }],
  },
  {
    bankCode: '15194619',
    bankName: '曲阜中银富登村镇银行',
    patterns: [{ reg: /^(621356024)\d{10}$/g }],
  },
  {
    bankCode: '15194689',
    bankName: '临邑中银富登村镇银行',
    patterns: [{ reg: /^(621356006)\d{10}$/g }],
  },
  {
    bankCode: '15194737',
    bankName: '沂水中银富登村镇银行',
    patterns: [{ reg: /^(621356004)\d{10}$/g }],
  },
  {
    bankCode: '15194752',
    bankName: '曹县中银富登村镇银行',
    patterns: [{ reg: /^(621356003)\d{10}$/g }],
  },
  {
    bankCode: '15194755',
    bankName: '单县中银富登村镇银行',
    patterns: [{ reg: /^(621356017)\d{10}$/g }],
  },
  {
    bankCode: '15194756',
    bankName: '巨野中银富登村镇银行',
    patterns: [{ reg: /^(621356036)\d{10}$/g }],
  },
  {
    bankCode: '15194761',
    bankName: '东明中银富登村镇银行',
    patterns: [{ reg: /^(621356049)\d{10}$/g }],
  },
  {
    bankCode: '15194771',
    bankName: '五莲中银富登村镇银行',
    patterns: [{ reg: /^(621356025)\d{10}$/g }],
  },
  {
    bankCode: '15194921',
    bankName: '杞县中银富登村镇银行',
    patterns: [{ reg: /^(621356051)\d{10}$/g }],
  },
  {
    bankCode: '15194964',
    bankName: '滑县中银富登村镇银行',
    patterns: [{ reg: /^(621356020)\d{10}$/g }],
  },
  {
    bankCode: '15195042',
    bankName: '临颍中银富登村镇银行',
    patterns: [{ reg: /^(621356019)\d{10}$/g }],
  },
  {
    bankCode: '15195088',
    bankName: '淮阳中银富登村镇银行',
    patterns: [{ reg: /^(621356070)\d{10}$/g }],
  },
  {
    bankCode: '15195089',
    bankName: '沈丘中银富登村镇银行',
    patterns: [{ reg: /^(621356071)\d{10}$/g }],
  },
  {
    bankCode: '15195091',
    bankName: '项城中银富登村镇银行',
    patterns: [{ reg: /^(621356021)\d{10}$/g }],
  },
  {
    bankCode: '15195283',
    bankName: '南漳中银富登村镇银行',
    patterns: [{ reg: /^(621356050)\d{10}$/g }],
  },
  {
    bankCode: '15195284',
    bankName: '谷城中银富登村镇银行',
    patterns: [{ reg: /^(621356007)\d{10}$/g }],
  },
  {
    bankCode: '15195287',
    bankName: '老河口中银富登村镇银行',
    patterns: [{ reg: /^(621356009)\d{10}$/g }],
  },
  {
    bankCode: '15195288',
    bankName: '枣阳中银富登村镇银行',
    patterns: [{ reg: /^(621356008)\d{10}$/g }],
  },
  {
    bankCode: '15195321',
    bankName: '京山中银富登村镇银行',
    patterns: [{ reg: /^(621356002)\d{10}$/g }],
  },
  {
    bankCode: '15195322',
    bankName: '沙洋中银富登村镇银行',
    patterns: [{ reg: /^(621356045)\d{10}$/g }],
  },
  {
    bankCode: '15195332',
    bankName: '武穴中银富登村镇银行',
    patterns: [{ reg: /^(621356062)\d{10}$/g }],
  },
  {
    bankCode: '15195338',
    bankName: '蕲春中银富登村镇银行',
    patterns: [{ reg: /^(621356001)\d{10}$/g }],
  },
  {
    bankCode: '15195339',
    bankName: '黄梅中银富登村镇银行',
    patterns: [{ reg: /^(621356061)\d{10}$/g }],
  },
  {
    bankCode: '15195375',
    bankName: '潜江中银富登村镇银行',
    patterns: [{ reg: /^(621356010)\d{10}$/g }],
  },
  {
    bankCode: '15195377',
    bankName: '松滋中银富登村镇银行',
    patterns: [{ reg: /^(621356012)\d{10}$/g }],
  },
  {
    bankCode: '15195378',
    bankName: '公安中银富登村镇银行',
    patterns: [{ reg: /^(621356042)\d{10}$/g }],
  },
  {
    bankCode: '15195379',
    bankName: '监利中银富登村镇银行',
    patterns: [{ reg: /^(621356011)\d{10}$/g }],
  },
  {
    bankCode: '15196621',
    bankName: '蓬溪中银富登村镇银行',
    patterns: [{ reg: /^(621356033)\d{10}$/g }],
  },
  {
    bankCode: '15196691',
    bankName: '岳池中银富登村镇银行',
    patterns: [{ reg: /^(621356035)\d{10}$/g }],
  },
  {
    bankCode: '15196692',
    bankName: '武胜中银富登村镇银行',
    patterns: [{ reg: /^(621356053)\d{10}$/g }],
  },
  {
    bankCode: '15196693',
    bankName: '邻水中银富登村镇银行',
    patterns: [{ reg: /^(621356056)\d{10}$/g }],
  },
  {
    bankCode: '15196752',
    bankName: '达川中银富登村镇银行',
    patterns: [{ reg: /^(621356063)\d{10}$/g }],
  },
  {
    bankCode: '15196900',
    bankName: '重庆长寿中银富登村镇银行',
    patterns: [{ reg: /^(621356028)\d{10}$/g }],
  },
  {
    bankCode: '15196902',
    bankName: '重庆合川中银富登村镇银行',
    patterns: [{ reg: /^(621356037)\d{10}$/g }],
  },
  {
    bankCode: '15196903',
    bankName: '万州中银富登村镇银行',
    patterns: [{ reg: /^(621356052)\d{10}$/g }],
  },
  {
    bankCode: '15196904',
    bankName: '重庆涪陵中银富登村镇银行',
    patterns: [{ reg: /^(621356069)\d{10}$/g }],
  },
  {
    bankCode: '15196907',
    bankName: '重庆南岸中银富登村镇银行',
    patterns: [{ reg: /^(621356074)\d{10}$/g }],
  },
  {
    bankCode: '15196922',
    bankName: '重庆城口中银富登村镇银行',
    patterns: [{ reg: /^(621356058)\d{10}$/g }],
  },
  {
    bankCode: '15196924',
    bankName: '重庆垫江中银富登村镇银行',
    patterns: [{ reg: /^(621356072)\d{10}$/g }],
  },
  {
    bankCode: '15196929',
    bankName: '重庆奉节中银富登村镇银行',
    patterns: [{ reg: /^(621356041)\d{10}$/g }],
  },
  {
    bankCode: '15196931',
    bankName: '重庆巫山中银富登村镇银行',
    patterns: [{ reg: /^(621356039)\d{10}$/g }],
  },
  {
    bankCode: '15196932',
    bankName: '重庆巫溪中银富登村镇银行',
    patterns: [{ reg: /^(621356073)\d{10}$/g }],
  },
  {
    bankCode: '15196933',
    bankName: '重庆石柱中银富登村镇银行',
    patterns: [{ reg: /^(621356022)\d{10}$/g }],
  },
  {
    bankCode: '15197033',
    bankName: '桐梓中银富登村镇银行',
    patterns: [{ reg: /^(621356067)\d{10}$/g }],
  },
  {
    bankCode: '15197035',
    bankName: '正安中银富登村镇银行',
    patterns: [{ reg: /^(621356079)\d{10}$/g }],
  },
  {
    bankCode: '15197036',
    bankName: '道真中银富登村镇银行',
    patterns: [{ reg: /^(621356080)\d{10}$/g }],
  },
  {
    bankCode: '15197037',
    bankName: '务川中银富登村镇银行',
    patterns: [{ reg: /^(621356078)\d{10}$/g }],
  },
  {
    bankCode: '15197038',
    bankName: '凤冈中银富登村镇银行',
    patterns: [{ reg: /^(621356081)\d{10}$/g }],
  },
  {
    bankCode: '15197039',
    bankName: '湄潭中银富登村镇银行',
    patterns: [{ reg: /^(621356068)\d{10}$/g }],
  },
  {
    bankCode: '15197041',
    bankName: '余庆中银富登村镇银行',
    patterns: [{ reg: /^(621356082)\d{10}$/g }],
  },
  {
    bankCode: '15197043',
    bankName: '赤水中银富登村镇银行',
    patterns: [{ reg: /^(621356066)\d{10}$/g }],
  },
  {
    bankCode: '15197044',
    bankName: '习水中银富登村镇银行',
    patterns: [{ reg: /^(621356065)\d{10}$/g }],
  },
  {
    bankCode: '15197912',
    bankName: '蓝田中银富登村镇银行',
    patterns: [{ reg: /^(621356077)\d{10}$/g }],
  },
  {
    bankCode: '15197932',
    bankName: '凤翔中银富登村镇银行',
    patterns: [{ reg: /^(621356057)\d{10}$/g }],
  },
  {
    bankCode: '15197951',
    bankName: '兴平中银富登村镇银行',
    patterns: [{ reg: /^(621356060)\d{10}$/g }],
  },
  {
    bankCode: '15197954',
    bankName: '乾县中银富登村镇银行',
    patterns: [{ reg: /^(621356031)\d{10}$/g }],
  },
  {
    bankCode: '15197977',
    bankName: '蒲城中银富登村镇银行',
    patterns: [{ reg: /^(621356043)\d{10}$/g }],
  },
  {
    bankCode: '15197993',
    bankName: '城固中银富登村镇银行',
    patterns: [{ reg: /^(621356076)\d{10}$/g }],
  },
  {
    bankCode: '15198011',
    bankName: '安康汉滨中银富登村镇银行',
    patterns: [{ reg: /^(621356075)\d{10}$/g }],
  },
  {
    bankCode: '15198245',
    bankName: '白银平川中银富登村镇银行',
    patterns: [{ reg: /^(621356064)\d{10}$/g }],
  },
  {
    bankCode: '15201000',
    bankName: '北京顺义银座村镇银行',
    patterns: [{ reg: /^(621347002)\d{7}$/g }],
  },
  {
    bankCode: '15201000',
    bankName: '北京顺义银座村镇银行',
    patterns: [{ reg: /^(621347102)\d{10}$/g }],
  },
  {
    bankCode: '15203438',
    bankName: '浙江景宁银座村镇银行',
    patterns: [{ reg: /^(621347008)\d{7}$/g }],
  },
  {
    bankCode: '15203438',
    bankName: '浙江景宁银座村镇银行',
    patterns: [{ reg: /^(621347108)\d{10}$/g }],
  },
  {
    bankCode: '15203450',
    bankName: '浙江三门银座村镇银行',
    patterns: [{ reg: /^(62515901)\d{8}$/g }],
  },
  {
    bankCode: '15203457',
    bankName: '浙江三门银座村镇银行',
    patterns: [{ reg: /^(621347005)\d{7}$/g }],
  },
  {
    bankCode: '15203457',
    bankName: '浙江三门银座村镇银行',
    patterns: [{ reg: /^(621347105)\d{10}$/g }],
  },
  {
    bankCode: '15204280',
    bankName: '江西赣州银座村镇银行',
    patterns: [{ reg: /^(621347003)\d{7}$/g }],
  },
  {
    bankCode: '15204280',
    bankName: '江西赣州银座村镇银行',
    patterns: [{ reg: /^(621347103)\d{10}$/g }],
  },
  {
    bankCode: '15205840',
    bankName: '深圳福田银座村镇银行',
    patterns: [{ reg: /^(621347001)\d{7}$/g }],
  },
  {
    bankCode: '15205840',
    bankName: '深圳福田银座村镇银行',
    patterns: [{ reg: /^(621347101)\d{10}$/g }],
  },
  {
    bankCode: '15206900',
    bankName: '重庆渝北银座村镇银行',
    patterns: [{ reg: /^(621347106)\d{10}$/g }],
  },
  {
    bankCode: '15206900',
    bankName: '重庆渝北银座村镇银行',
    patterns: [{ reg: /^(621347006)\d{7}$/g }],
  },
  {
    bankCode: '15206925',
    bankName: '重庆黔江银座村镇银行',
    patterns: [{ reg: /^(621347007)\d{7}$/g }],
  },
  {
    bankCode: '15206925',
    bankName: '重庆黔江银座村镇银行',
    patterns: [{ reg: /^(621347107)\d{10}$/g }],
  },
  {
    bankCode: '15211000',
    bankName: '北京怀柔融兴村镇银行',
    patterns: [{ reg: /^(621350010)\d{10}$/g }],
  },
  {
    bankCode: '15211039',
    bankName: '北京怀柔融兴村镇银行',
    patterns: [{ reg: /^(623589010)\d{10}$/g }],
  },
  {
    bankCode: '15211440',
    bankName: '河间融惠村镇银行',
    patterns: [{ reg: /^(623589020)\d{10}$/g }],
  },
  {
    bankCode: '15211443',
    bankName: '河间融惠村镇银行',
    patterns: [{ reg: /^(621350020)\d{10}$/g }],
  },
  {
    bankCode: '15212411',
    bankName: '榆树融兴村镇银行',
    patterns: [{ reg: /^(621350431)\d{10}$/g }],
  },
  {
    bankCode: '15212419',
    bankName: '榆树融兴村镇银行',
    patterns: [{ reg: /^(623589431)\d{10}$/g }],
  },
  {
    bankCode: '15212619',
    bankName: '延寿融兴村镇银行',
    patterns: [{ reg: /^(623589001)\d{10}$/g }],
  },
  {
    bankCode: '15212620',
    bankName: '巴彦融兴村镇银行',
    patterns: [{ reg: /^(623589451)\d{10}$/g }],
  },
  {
    bankCode: '15212625',
    bankName: '巴彦融兴村镇银行',
    patterns: [{ reg: /^(621350451)\d{10}$/g }],
  },
  {
    bankCode: '15212629',
    bankName: '延寿融兴村镇银行',
    patterns: [{ reg: /^(621350001)\d{10}$/g }],
  },
  {
    bankCode: '15212652',
    bankName: '拜泉融兴村镇银行',
    patterns: [{ reg: /^(621350013)\d{10}$/g }],
  },
  {
    bankCode: '15212659',
    bankName: '拜泉融兴村镇银行',
    patterns: [{ reg: /^(623589013)\d{10}$/g }],
  },
  {
    bankCode: '15212722',
    bankName: '桦川融兴村镇银行',
    patterns: [{ reg: /^(623589005)\d{10}$/g }],
  },
  {
    bankCode: '15212723',
    bankName: '桦川融兴村镇银行',
    patterns: [{ reg: /^(621350005)\d{10}$/g }],
  },
  {
    bankCode: '15213063',
    bankName: '江苏如东融兴村镇银行',
    patterns: [{ reg: /^(621350009)\d{10}$/g }],
  },
  {
    bankCode: '15213069',
    bankName: '江苏如东融兴村镇银行',
    patterns: [{ reg: /^(623589009)\d{10}$/g }],
  },
  {
    bankCode: '15214213',
    bankName: '安义融兴村镇银行',
    patterns: [{ reg: /^(621350003)\d{10}$/g }],
  },
  {
    bankCode: '15214219',
    bankName: '安义融兴村镇银行',
    patterns: [{ reg: /^(623589003)\d{10}$/g }],
  },
  {
    bankCode: '15214221',
    bankName: '乐平融兴村镇银行',
    patterns: [{ reg: /^(621350002)\d{10}$/g }],
  },
  {
    bankCode: '15214229',
    bankName: '乐平融兴村镇银行',
    patterns: [{ reg: /^(623589002)\d{10}$/g }],
  },
  {
    bankCode: '15214931',
    bankName: '偃师融兴村镇银行',
    patterns: [{ reg: /^(621350015)\d{10}$/g }],
  },
  {
    bankCode: '15214933',
    bankName: '新安融兴村镇银行',
    patterns: [{ reg: /^(621350004)\d{10}$/g }],
  },
  {
    bankCode: '15214948',
    bankName: '新安融兴村镇银行',
    patterns: [{ reg: /^(623589004)\d{10}$/g }],
  },
  {
    bankCode: '15214949',
    bankName: '偃师融兴村镇银行',
    patterns: [{ reg: /^(623589015)\d{10}$/g }],
  },
  {
    bankCode: '15215352',
    bankName: '应城融兴村镇银行',
    patterns: [{ reg: /^(621350006)\d{10}$/g }],
  },
  {
    bankCode: '15215354',
    bankName: '应城融兴村镇银行',
    patterns: [{ reg: /^(623589006)\d{10}$/g }],
  },
  {
    bankCode: '15215373',
    bankName: '洪湖融兴村镇银行',
    patterns: [{ reg: /^(621350011)\d{10}$/g }],
  },
  {
    bankCode: '15215399',
    bankName: '洪湖融兴村镇银行',
    patterns: [{ reg: /^(623589011)\d{10}$/g }],
  },
  {
    bankCode: '15215521',
    bankName: '株洲县融兴村镇银行',
    patterns: [{ reg: /^(621350016)\d{10}$/g }],
  },
  {
    bankCode: '15215529',
    bankName: '株洲县融兴村镇银行',
    patterns: [{ reg: /^(623589016)\d{10}$/g }],
  },
  {
    bankCode: '15215547',
    bankName: '耒阳融兴村镇银行',
    patterns: [{ reg: /^(621350007)\d{10}$/g }],
  },
  {
    bankCode: '15215549',
    bankName: '耒阳融兴村镇银行',
    patterns: [{ reg: /^(623589007)\d{10}$/g }],
  },
  {
    bankCode: '15215840',
    bankName: '深圳宝安融兴村镇银行',
    patterns: [{ reg: /^(621350755)\d{10}$/g }],
  },
  {
    bankCode: '15215841',
    bankName: '深圳宝安融兴村镇银行',
    patterns: [{ reg: /^(623589755)\d{10}$/g }],
  },
  {
    bankCode: '15216422',
    bankName: '海南保亭融兴村镇银行',
    patterns: [{ reg: /^(623589017)\d{10}$/g }],
  },
  {
    bankCode: '15216437',
    bankName: '海南保亭融兴村镇银行',
    patterns: [{ reg: /^(621350017)\d{10}$/g }],
  },
  {
    bankCode: '15216620',
    bankName: '遂宁安居融兴村镇银行',
    patterns: [{ reg: /^(621350014)\d{10}$/g }],
  },
  {
    bankCode: '15216624',
    bankName: '遂宁安居融兴村镇银行',
    patterns: [{ reg: /^(623589014)\d{10}$/g }],
  },
  {
    bankCode: '15216900',
    bankName: '重庆沙坪坝融兴村镇银行',
    patterns: [{ reg: /^(621350019)\d{10}$/g }],
  },
  {
    bankCode: '15216920',
    bankName: '重庆市大渡口融兴村镇银行',
    patterns: [{ reg: /^(623589012)\d{10}$/g }],
  },
  {
    bankCode: '15216922',
    bankName: '重庆大渡口融兴村镇银行',
    patterns: [{ reg: /^(621350012)\d{10}$/g }],
  },
  {
    bankCode: '15216925',
    bankName: '重庆市武隆融兴村镇银行',
    patterns: [{ reg: /^(621350008)\d{10}$/g }],
  },
  {
    bankCode: '15216930',
    bankName: '重庆市武隆融兴村镇银行',
    patterns: [{ reg: /^(623589008)\d{10}$/g }],
  },
  {
    bankCode: '15216935',
    bankName: '重庆市酋阳融兴村镇银行',
    patterns: [{ reg: /^(621350018)\d{10}$/g }],
  },
  {
    bankCode: '15216937',
    bankName: '重庆市沙坪坝融兴村镇银行',
    patterns: [{ reg: /^(623589019)\d{10}$/g }],
  },
  {
    bankCode: '15216939',
    bankName: '重庆市酉阳融兴村镇银行',
    patterns: [{ reg: /^(623589018)\d{10}$/g }],
  },
  {
    bankCode: '15218242',
    bankName: '会宁会师村镇银行',
    patterns: [{ reg: /^(621350943)\d{10}$/g }],
  },
  {
    bankCode: '15218249',
    bankName: '会宁会师村镇银行',
    patterns: [{ reg: /^(623589943)\d{10}$/g }],
  },
  {
    bankCode: '15265130',
    bankName: '南阳村镇银行',
    patterns: [{ reg: /^(621392887)\d{9}$/g }],
  },
  {
    bankCode: '15265130',
    bankName: '南阳村镇银行',
    patterns: [{ reg: /^(621392)\d{12}$/g }],
  },
  {
    bankCode: '15271329',
    bankName: '宁晋民生村镇银行',
    patterns: [{ reg: /^(621399017)\d{7}$/g }],
  },
  {
    bankCode: '15272454',
    bankName: '梅河口民生村镇银行',
    patterns: [{ reg: /^(621399008)\d{7}$/g }],
  },
  {
    bankCode: '15272900',
    bankName: '上海松江民生村镇银行',
    patterns: [{ reg: /^(621399001)\d{7}$/g }],
  },
  {
    bankCode: '15272929',
    bankName: '嘉定民生村镇银行',
    patterns: [{ reg: /^(621399012)\d{7}$/g }],
  },
  {
    bankCode: '15273051',
    bankName: '太仓民生村镇银行',
    patterns: [{ reg: /^(621399016)\d{7}$/g }],
  },
  {
    bankCode: '15273113',
    bankName: '阜宁民生村镇银行',
    patterns: [{ reg: /^(621399015)\d{7}$/g }],
  },
  {
    bankCode: '15273456',
    bankName: '天台民生村镇银行',
    patterns: [{ reg: /^(621399025)\d{7}$/g }],
  },
  {
    bankCode: '15273752',
    bankName: '天长民生村镇银行',
    patterns: [{ reg: /^(621399026)\d{7}$/g }],
  },
  {
    bankCode: '15273774',
    bankName: '宁国民生村镇银行',
    patterns: [{ reg: /^(621399023)\d{7}$/g }],
  },
  {
    bankCode: '15273790',
    bankName: '池州贵池民生村镇银行',
    patterns: [{ reg: /^(621399024)\d{7}$/g }],
  },
  {
    bankCode: '15273930',
    bankName: '厦门翔安民生村镇银行',
    patterns: [{ reg: /^(621399028)\d{7}$/g }],
  },
  {
    bankCode: '15273974',
    bankName: '安溪民生村镇银行',
    patterns: [{ reg: /^(621399002)\d{7}$/g }],
  },
  {
    bankCode: '15273993',
    bankName: '漳浦民生村镇银行',
    patterns: [{ reg: /^(621399018)\d{7}$/g }],
  },
  {
    bankCode: '15274561',
    bankName: '蓬莱民生村镇银行',
    patterns: [{ reg: /^(621399014)\d{7}$/g }],
  },
  {
    bankCode: '15274986',
    bankName: '长垣民生村镇银行',
    patterns: [{ reg: /^(621399010)\d{7}$/g }],
  },
  {
    bankCode: '15275210',
    bankName: '江夏民生村镇银行',
    patterns: [{ reg: /^(621399009)\d{7}$/g }],
  },
  {
    bankCode: '15275251',
    bankName: '宜都民生村镇银行',
    patterns: [{ reg: /^(621399011)\d{10}$/g }],
  },
  {
    bankCode: '15275251',
    bankName: '宜都民生村镇银行',
    patterns: [{ reg: /^(621399011)\d{7}$/g }],
  },
  {
    bankCode: '15275323',
    bankName: '钟祥民生村镇银行',
    patterns: [{ reg: /^(621399013)\d{7}$/g }],
  },
  {
    bankCode: '15276516',
    bankName: '彭州民生村镇银行',
    patterns: [{ reg: /^(621399003)\d{7}$/g }],
  },
  {
    bankCode: '15276880',
    bankName: '资阳民生村镇银行',
    patterns: [{ reg: /^(621399007)\d{7}$/g }],
  },
  {
    bankCode: '15276900',
    bankName: '綦江民生村镇银行',
    patterns: [{ reg: /^(621399005)\d{7}$/g }],
  },
  {
    bankCode: '15276914',
    bankName: '潼南民生村镇银行',
    patterns: [{ reg: /^(621399006)\d{7}$/g }],
  },
  {
    bankCode: '15277470',
    bankName: '普洱民生村镇银行',
    patterns: [{ reg: /^(621399021)\d{7}$/g }],
  },
  {
    bankCode: '15277491',
    bankName: '景洪民生村镇银行',
    patterns: [{ reg: /^(621399019)\d{7}$/g }],
  },
  {
    bankCode: '15277533',
    bankName: '腾冲民生村镇银行',
    patterns: [{ reg: /^(621399027)\d{7}$/g }],
  },
  {
    bankCode: '15278046',
    bankName: '志丹民生村镇银行',
    patterns: [{ reg: /^(621399020)\d{7}$/g }],
  },
  {
    bankCode: '15278060',
    bankName: '榆林榆阳民生村镇银行',
    patterns: [{ reg: /^(621399022)\d{7}$/g }],
  },
  {
    bankCode: '15283310',
    bankName: '浙江萧山湖商村镇银行',
    patterns: [{ reg: /^(621365006)\d{10}$/g }],
  },
  {
    bankCode: '15283315',
    bankName: '浙江建德湖商村镇银行',
    patterns: [{ reg: /^(621365001)\d{10}$/g }],
  },
  {
    bankCode: '15283339',
    bankName: '浙江瑞安湖商村镇银行',
    patterns: [{ reg: /^(621365012)\d{10}$/g }],
  },
  {
    bankCode: '15283353',
    bankName: '浙江海盐湖商村镇银行',
    patterns: [{ reg: /^(621365011)\d{10}$/g }],
  },
  {
    bankCode: '15283361',
    bankName: '浙江德清湖商村镇银行',
    patterns: [{ reg: /^(621365005)\d{10}$/g }],
  },
  {
    bankCode: '15283452',
    bankName: '浙江临海湖商村镇银行',
    patterns: [{ reg: /^(621365013)\d{10}$/g }],
  },
  {
    bankCode: '15283612',
    bankName: '安徽肥东湖商村镇银行',
    patterns: [{ reg: /^(621365014)\d{10}$/g }],
  },
  {
    bankCode: '15283661',
    bankName: '安徽濉溪湖商卡村镇银行',
    patterns: [{ reg: /^(621365007)\d{10}$/g }],
  },
  {
    bankCode: '15283688',
    bankName: '安徽粤西湖商村镇银行',
    patterns: [{ reg: /^(621365004)\d{10}$/g }],
  },
  {
    bankCode: '15283778',
    bankName: '安徽宣州湖商村镇银行',
    patterns: [{ reg: /^(621365009)\d{10}$/g }],
  },
  {
    bankCode: '15283811',
    bankName: '安徽涡阳湖商村镇银行',
    patterns: [{ reg: /^(621365008)\d{10}$/g }],
  },
  {
    bankCode: '15283812',
    bankName: '安徽蒙城湖商村镇银行',
    patterns: [{ reg: /^(621365003)\d{10}$/g }],
  },
  {
    bankCode: '15283813',
    bankName: '安徽利辛湖商村镇银行',
    patterns: [{ reg: /^(621365002)\d{10}$/g }],
  },
  {
    bankCode: '15283815',
    bankName: '安徽谯城湖商村镇银行',
    patterns: [{ reg: /^(621365010)\d{10}$/g }],
  },
  {
    bankCode: '15293912',
    bankName: '福建连江恒欣村镇银行',
    patterns: [{ reg: /^(621401001)\d{10}$/g }],
  },
  {
    bankCode: '15294032',
    bankName: '福鼎恒兴村镇银行',
    patterns: [{ reg: /^(621401002)\d{10}$/g }],
  },
  {
    bankCode: '15294032',
    bankName: '福鼎恒兴村镇银行',
    patterns: [{ reg: /^(62140101)\d{11}$/g }],
  },
  {
    bankCode: '15301614',
    bankName: '古交市阜民村镇银行',
    patterns: [{ reg: /^(623143005)\d{10}$/g }],
  },
  {
    bankCode: '15301734',
    bankName: '吕梁孝义汇通村镇银行',
    patterns: [{ reg: /^(623143003)\d{10}$/g }],
  },
  {
    bankCode: '15301750',
    bankName: '晋中市榆次融信村镇银行',
    patterns: [{ reg: /^(621481)\d{13}$/g }],
  },
  {
    bankCode: '15301753',
    bankName: '晋中市左权华丰村镇银行',
    patterns: [{ reg: /^(623143001)\d{10}$/g }],
  },
  {
    bankCode: '15301757',
    bankName: '太谷县兴泰村镇银行',
    patterns: [{ reg: /^(623143004)\d{10}$/g }],
  },
  {
    bankCode: '15301788',
    bankName: '汾西县亿通村镇银行',
    patterns: [{ reg: /^(623143002)\d{10}$/g }],
  },
  {
    bankCode: '15315960',
    bankName: '梅县客家村镇银行',
    patterns: [{ reg: /^(621393001)\d{10}$/g }],
  },
  {
    bankCode: '15318881',
    bankName: '新疆库尔勒富民村镇银行',
    patterns: [{ reg: /^(62139383)\d{10}$/g }],
  },
  {
    bankCode: '15335840',
    bankName: '宝生村镇银行',
    patterns: [{ reg: /^(621623001)\d{10}$/g }],
  },
  {
    bankCode: '15343116',
    bankName: '江苏大丰江南村镇银行',
    patterns: [{ reg: /^(621397001)\d{10}$/g }],
  },
  {
    bankCode: '15343116',
    bankName: '江苏大丰江南村镇银行',
    patterns: [{ reg: /^(621397101)\d{10}$/g }],
  },
  {
    bankCode: '15353117',
    bankName: '江苏东台稠州村镇银行',
    patterns: [{ reg: /^(621627008)\d{10}$/g }],
  },
  {
    bankCode: '15353420',
    bankName: '浙江舟山普陀稠州村镇银行',
    patterns: [{ reg: /^(621627005)\d{10}$/g }],
  },
  {
    bankCode: '15353421',
    bankName: '浙江岱山稠州村镇银行',
    patterns: [{ reg: /^(621627002)\d{10}$/g }],
  },
  {
    bankCode: '15354353',
    bankName: '吉安稠州村镇银行',
    patterns: [{ reg: /^(621627001)\d{10}$/g }],
  },
  {
    bankCode: '15355810',
    bankName: '广州花都稠州村镇银行',
    patterns: [{ reg: /^(621627007)\d{10}$/g }],
  },
  {
    bankCode: '15356510',
    bankName: '龙泉驿稠州村镇银行',
    patterns: [{ reg: /^(621627009)\d{10}$/g }],
  },
  {
    bankCode: '15356900',
    bankName: '重庆北碚稠州村镇银行',
    patterns: [{ reg: /^(621627003)\d{10}$/g }],
  },
  {
    bankCode: '15356926',
    bankName: '忠县稠州村镇银行',
    patterns: [{ reg: /^(621627006)\d{10}$/g }],
  },
  {
    bankCode: '15357313',
    bankName: '云南安宁稠州村镇银行',
    patterns: [{ reg: /^(621627010)\d{10}$/g }],
  },
  {
    bankCode: '15363321',
    bankName: '象山国民村镇银行',
    patterns: [{ reg: /^(621635101)\d{10}$/g }],
  },
  {
    bankCode: '15363323',
    bankName: '宁波市海曙国民村镇银行',
    patterns: [{ reg: /^(621635114)\d{10}$/g }],
  },
  {
    bankCode: '15366110',
    bankName: '南宁江南国民村镇银行',
    patterns: [{ reg: /^(621635103)\d{10}$/g }],
  },
  {
    bankCode: '15366110',
    bankName: '南宁江南国民村镇银行',
    patterns: [{ reg: /^(621635003)\d{10}$/g }],
  },
  {
    bankCode: '15366124',
    bankName: '广西上林国民村镇银行',
    patterns: [{ reg: /^(621635124)\d{10}$/g }],
  },
  {
    bankCode: '15366170',
    bankName: '桂林国民村镇银行',
    patterns: [{ reg: /^(621635004)\d{10}$/g }],
  },
  {
    bankCode: '15366170',
    bankName: '桂林国民村镇银行',
    patterns: [{ reg: /^(621635104)\d{10}$/g }],
  },
  {
    bankCode: '15366230',
    bankName: '银海国民村镇银行',
    patterns: [{ reg: /^(621635112)\d{10}$/g }],
  },
  {
    bankCode: '15366231',
    bankName: '合浦国民村镇银行',
    patterns: [{ reg: /^(621635109)\d{10}$/g }],
  },
  {
    bankCode: '15366264',
    bankName: '平果国民村镇银行',
    patterns: [{ reg: /^(621635111)\d{10}$/g }],
  },
  {
    bankCode: '15366310',
    bankName: '钦州市钦南国民村镇银行',
    patterns: [{ reg: /^(621635013)\d{10}$/g }],
  },
  {
    bankCode: '15366310',
    bankName: '钦州市钦南国民村镇银行',
    patterns: [{ reg: /^(621635113)\d{10}$/g }],
  },
  {
    bankCode: '15366315',
    bankName: '广西浦北国民村镇银行',
    patterns: [{ reg: /^(621635119)\d{10}$/g }],
  },
  {
    bankCode: '15366320',
    bankName: '防城港防城国民村镇银行',
    patterns: [{ reg: /^(621635010)\d{10}$/g }],
  },
  {
    bankCode: '15366320',
    bankName: '防城港防城国民村镇银行',
    patterns: [{ reg: /^(621635110)\d{10}$/g }],
  },
  {
    bankCode: '15366322',
    bankName: '东兴国民村镇银行',
    patterns: [{ reg: /^(621635105)\d{10}$/g }],
  },
  {
    bankCode: '15366322',
    bankName: '东兴国民村镇银行',
    patterns: [{ reg: /^(621635005)\d{10}$/g }],
  },
  {
    bankCode: '15366519',
    bankName: '邛崃国民村镇银行',
    patterns: [{ reg: /^(621635007)\d{10}$/g }],
  },
  {
    bankCode: '15366519',
    bankName: '邛崃国民村镇银行',
    patterns: [{ reg: /^(621635107)\d{10}$/g }],
  },
  {
    bankCode: '15368810',
    bankName: '绿洲国民村镇银行',
    patterns: [{ reg: /^(621635118)\d{10}$/g }],
  },
  {
    bankCode: '15368820',
    bankName: '克拉玛依金龙国民村镇银行',
    patterns: [{ reg: /^(621635122)\d{10}$/g }],
  },
  {
    bankCode: '15368841',
    bankName: '哈密红星国民村镇银行',
    patterns: [{ reg: /^(621635115)\d{10}$/g }],
  },
  {
    bankCode: '15368851',
    bankName: '昌吉国民村镇银行',
    patterns: [{ reg: /^(621635108)\d{10}$/g }],
  },
  {
    bankCode: '15368871',
    bankName: '博乐国民村镇银行',
    patterns: [{ reg: /^(621635117)\d{10}$/g }],
  },
  {
    bankCode: '15368913',
    bankName: '库车国民村镇银行',
    patterns: [{ reg: /^(621635125)\d{10}$/g }],
  },
  {
    bankCode: '15368981',
    bankName: '奎屯国民村镇银行',
    patterns: [{ reg: /^(621635123)\d{10}$/g }],
  },
  {
    bankCode: '15368991',
    bankName: '伊犁国民村镇银行',
    patterns: [{ reg: /^(621635120)\d{10}$/g }],
  },
  {
    bankCode: '15369028',
    bankName: '石河子国民村镇银行',
    patterns: [{ reg: /^(621635106)\d{10}$/g }],
  },
  {
    bankCode: '15369043',
    bankName: '五家渠国民村镇银行',
    patterns: [{ reg: /^(621635102)\d{10}$/g }],
  },
  {
    bankCode: '15369044',
    bankName: '北屯国民村镇银行',
    patterns: [{ reg: /^(621635116)\d{10}$/g }],
  },
  {
    bankCode: '15382056',
    bankName: '杭锦大众村镇银行',
    patterns: [{ reg: /^(621650105)\d{10}$/g }],
  },
  {
    bankCode: '15382074',
    bankName: '乌拉特前旗大众村镇银行',
    patterns: [{ reg: /^(621650104)\d{10}$/g }],
  },
  {
    bankCode: '15385822',
    bankName: '始兴大众村镇银行',
    patterns: [{ reg: /^(621650003)\d{10}$/g }],
  },
  {
    bankCode: '15386423',
    bankName: '文昌国民村镇银行',
    patterns: [{ reg: /^(621650002)\d{10}$/g }],
  },
  {
    bankCode: '15386423',
    bankName: '文昌国民村镇银行',
    patterns: [{ reg: /^(621650102)\d{10}$/g }],
  },
  {
    bankCode: '15386424',
    bankName: '琼海国民村镇银行',
    patterns: [{ reg: /^(621650001)\d{10}$/g }],
  },
  {
    bankCode: '15386424',
    bankName: '琼海国民村镇银行',
    patterns: [{ reg: /^(621650101)\d{10}$/g }],
  },
  {
    bankCode: '15391246',
    bankName: '迁安襄隆村镇银行',
    patterns: [{ reg: /^(621630002)\d{10}$/g }],
  },
  {
    bankCode: '15391322',
    bankName: '沙河襄通村镇银行',
    patterns: [{ reg: /^(621630003)\d{10}$/g }],
  },
  {
    bankCode: '15391336',
    bankName: '清河金农村镇银行',
    patterns: [{ reg: /^(621630001)\d{10}$/g }],
  },
  {
    bankCode: '15401000',
    bankName: '北京门头沟珠江村镇银行',
    patterns: [{ reg: /^(62163113)\d{10}$/g }],
  },
  {
    bankCode: '15402220',
    bankName: '大连保税区珠江村镇银行',
    patterns: [{ reg: /^(62163103)\d{10}$/g }],
  },
  {
    bankCode: '15403057',
    bankName: '苏州吴中珠江村镇银行',
    patterns: [{ reg: /^(62163122)\d{10}$/g }],
  },
  {
    bankCode: '15403057',
    bankName: '苏州吴中珠江村镇银行',
    patterns: [{ reg: /^(62325400)\d{10}$/g }],
  },
  {
    bankCode: '15403066',
    bankName: '启东珠江村镇银行',
    patterns: [{ reg: /^(62163119)\d{10}$/g }],
  },
  {
    bankCode: '15403088',
    bankName: '盱眙珠江村镇银行',
    patterns: [{ reg: /^(62163120)\d{10}$/g }],
  },
  {
    bankCode: '15404350',
    bankName: '吉安吉州珠江村镇银行',
    patterns: [{ reg: /^(62163112)\d{10}$/g }],
  },
  {
    bankCode: '15404520',
    bankName: '青岛城阳珠江村镇银行',
    patterns: [{ reg: /^(62163117)\d{10}$/g }],
  },
  {
    bankCode: '15404560',
    bankName: '福山珠江村镇银行',
    patterns: [{ reg: /^(62163114)\d{10}$/g }],
  },
  {
    bankCode: '15404564',
    bankName: '海阳珠江村镇银行',
    patterns: [{ reg: /^(62163116)\d{10}$/g }],
  },
  {
    bankCode: '15404569',
    bankName: '莱州珠江村镇银行',
    patterns: [{ reg: /^(62163115)\d{10}$/g }],
  },
  {
    bankCode: '15404790',
    bankName: '莱芜珠江村镇银行',
    patterns: [{ reg: /^(62163104)\d{10}$/g }],
  },
  {
    bankCode: '15404960',
    bankName: '安阳珠江村镇银行',
    patterns: [{ reg: /^(62163118)\d{10}$/g }],
  },
  {
    bankCode: '15404988',
    bankName: '辉县珠江村镇银行',
    patterns: [{ reg: /^(62163108)\d{10}$/g }],
  },
  {
    bankCode: '15405150',
    bankName: '信阳珠江村镇银行',
    patterns: [{ reg: /^(62163107)\d{10}$/g }],
  },
  {
    bankCode: '15405545',
    bankName: '常宁珠江村镇银行',
    patterns: [{ reg: /^(62163121)\d{10}$/g }],
  },
  {
    bankCode: '15405847',
    bankName: '深圳坪山珠江村镇银行',
    patterns: [{ reg: /^(62163125)\d{10}$/g }],
  },
  {
    bankCode: '15405895',
    bankName: '鹤山珠江村镇银行',
    patterns: [{ reg: /^(62163101)\d{10}$/g }],
  },
  {
    bankCode: '15405965',
    bankName: '兴宁珠江村镇银行',
    patterns: [{ reg: /^(62163123)\d{10}$/g }],
  },
  {
    bankCode: '15406020',
    bankName: '东莞黄江珠江村镇银行',
    patterns: [{ reg: /^(62163126)\d{10}$/g }],
  },
  {
    bankCode: '15406030',
    bankName: '中山东凤珠江村镇银行',
    patterns: [{ reg: /^(62163102)\d{10}$/g }],
  },
  {
    bankCode: '15406522',
    bankName: '新津珠江村镇银行',
    patterns: [{ reg: /^(62163109)\d{10}$/g }],
  },
  {
    bankCode: '15406584',
    bankName: '广汉珠江村镇银行',
    patterns: [{ reg: /^(62163110)\d{10}$/g }],
  },
  {
    bankCode: '15406672',
    bankName: '彭山珠江村镇银行',
    patterns: [{ reg: /^(62163111)\d{10}$/g }],
  },
  {
    bankCode: '15421358',
    bankName: '唐县汇泽村镇银行',
    patterns: [{ reg: /^(621637009)\d{10}$/g }],
  },
  {
    bankCode: '15421358',
    bankName: '唐县汇泽村镇银行',
    patterns: [{ reg: /^(62163751)\d{11}$/g }],
  },
  {
    bankCode: '15421614',
    bankName: '古交汇泽村镇银行',
    patterns: [{ reg: /^(621637008)\d{10}$/g }],
  },
  {
    bankCode: '15421735',
    bankName: '兴县汇泽村镇银行',
    patterns: [{ reg: /^(621637006)\d{10}$/g }],
  },
  {
    bankCode: '15421737',
    bankName: '柳林汇泽村镇银行',
    patterns: [{ reg: /^(621637007)\d{10}$/g }],
  },
  {
    bankCode: '15422022',
    bankName: '正蓝旗汇泽村镇银行',
    patterns: [{ reg: /^(621637005)\d{10}$/g }],
  },
  {
    bankCode: '15422038',
    bankName: '兴和包商村镇银行',
    patterns: [{ reg: /^(621637004)\d{10}$/g }],
  },
  {
    bankCode: '15422050',
    bankName: '鄂尔多斯市康巴什村镇银行',
    patterns: [{ reg: /^(621637001)\d{10}$/g }],
  },
  {
    bankCode: '15422051',
    bankName: '罕台村镇银行',
    patterns: [{ reg: /^(621637002)\d{10}$/g }],
  },
  {
    bankCode: '15422055',
    bankName: '鄂托克旗汇泽村镇银行',
    patterns: [{ reg: /^(621637003)\d{10}$/g }],
  },
  {
    bankCode: '15422055',
    bankName: '鄂托克旗汇泽村镇银行',
    patterns: [{ reg: /^(62163750)\d{11}$/g }],
  },
  {
    bankCode: '15433613',
    bankName: '安徽肥西石银村镇银行',
    patterns: [{ reg: /^(621653002)\d{10}$/g }],
  },
  {
    bankCode: '15434523',
    bankName: '青岛莱西元泰村镇银行',
    patterns: [{ reg: /^(621653003)\d{10}$/g }],
  },
  {
    bankCode: '15436900',
    bankName: '重庆南川石银村镇银行',
    patterns: [{ reg: /^(621653004)\d{10}$/g }],
  },
  {
    bankCode: '15436901',
    bankName: '重庆江津石银村镇银行',
    patterns: [{ reg: /^(621653005)\d{10}$/g }],
  },
  {
    bankCode: '15438710',
    bankName: '银川掌政石银村镇银行',
    patterns: [{ reg: /^(621653007)\d{10}$/g }],
  },
  {
    bankCode: '15438720',
    bankName: '大武口石银村镇银行',
    patterns: [{ reg: /^(621653006)\d{10}$/g }],
  },
  {
    bankCode: '15438730',
    bankName: '吴忠市滨河村镇银行',
    patterns: [{ reg: /^(621653001)\d{10}$/g }],
  },
  {
    bankCode: '15446610',
    bankName: '广元贵商村镇银行',
    patterns: [{ reg: /^(62308299)\d{11}$/g }],
  },
  {
    bankCode: '15454312',
    bankName: '丰城顺银村镇银行',
    patterns: [{ reg: /^(621628661)\d{10}$/g }],
  },
  {
    bankCode: '15454313',
    bankName: '樟树顺银村镇银行',
    patterns: [{ reg: /^(621628662)\d{10}$/g }],
  },
  {
    bankCode: '15455880',
    bankName: '佛山高明顺银村镇银行',
    patterns: [{ reg: /^(621628660)\d{10}$/g }],
  },
  {
    bankCode: '15464520',
    bankName: '青岛胶南海汇村镇银行',
    patterns: [{ reg: /^(621316001)\d{7}$/g }],
  },
  {
    bankCode: '15475950',
    bankName: '惠州仲恺东盈村镇银行',
    patterns: [{ reg: /^(62319801)\d{11}$/g }],
  },
  {
    bankCode: '15476020',
    bankName: '东莞大朗东盈村镇银行',
    patterns: [{ reg: /^(62319806)\d{11}$/g }],
  },
  {
    bankCode: '15476061',
    bankName: '云浮新兴东盈民生村镇银行',
    patterns: [{ reg: /^(62319802)\d{11}$/g }],
  },
  {
    bankCode: '15476340',
    bankName: '贺州八步东盈村镇银行',
    patterns: [{ reg: /^(62319803)\d{11}$/g }],
  },
  {
    bankCode: '15483020',
    bankName: '宜兴阳羡村镇银行',
    patterns: [{ reg: /^(621355052)\d{7}$/g }],
  },
  {
    bankCode: '15483023',
    bankName: '宜兴阳羡村镇银行',
    patterns: [{ reg: /^(621355002)\d{7}$/g }],
  },
  {
    bankCode: '15483050',
    bankName: '昆山鹿城村镇银行',
    patterns: [{ reg: /^(621355051)\d{7}$/g }],
  },
  {
    bankCode: '15483052',
    bankName: '昆山鹿城村镇银行',
    patterns: [{ reg: /^(621355001)\d{7}$/g }],
  },
  {
    bankCode: '15492436',
    bankName: '四川铁东德丰村镇银行',
    patterns: [{ reg: /^(621675002)\d{10}$/g }],
  },
  {
    bankCode: '15494210',
    bankName: '南昌大丰村镇银行',
    patterns: [{ reg: /^(621675001)\d{10}$/g }],
  },
  {
    bankCode: '15494214',
    bankName: '进贤瑞丰村镇银行',
    patterns: [{ reg: /^(621675004)\d{10}$/g }],
  },
  {
    bankCode: '15494374',
    bankName: '南丰桔都村镇银行',
    patterns: [{ reg: /^(621675005)\d{10}$/g }],
  },
  {
    bankCode: '15494382',
    bankName: '广昌南银村镇银行',
    patterns: [{ reg: /^(621675003)\d{10}$/g }],
  },
  {
    bankCode: '15501663',
    bankName: '襄垣县融汇村镇银行',
    patterns: [{ reg: /^(62309702)\d{11}$/g }],
  },
  {
    bankCode: '15501668',
    bankName: '长子县融汇村镇银行',
    patterns: [{ reg: /^(62309701)\d{11}$/g }],
  },
  {
    bankCode: '15511100',
    bankName: '天津武清村镇银行',
    patterns: [{ reg: /^(621656002)\d{10}$/g }],
  },
  {
    bankCode: '15511713',
    bankName: '五台莱商村镇银行',
    patterns: [{ reg: /^(621656003)\d{7}$/g }],
  },
  {
    bankCode: '15514550',
    bankName: '东营莱商村镇银行',
    patterns: [{ reg: /^(621396)\d{10}$/g }],
  },
  {
    bankCode: '15514550',
    bankName: '东营莱商村镇银行',
    patterns: [{ reg: /^(62165666)\d{11}$/g }],
  },
  {
    bankCode: '15515134',
    bankName: '河南方城凤裕村镇银行',
    patterns: [{ reg: /^(621656001)\d{10}$/g }],
  },
  {
    bankCode: '15521430',
    bankName: '沧县吉银村镇银行',
    patterns: [{ reg: /^(621659002)\d{10}$/g }],
  },
  {
    bankCode: '15521463',
    bankName: '永清吉银村镇银行',
    patterns: [{ reg: /^(621659001)\d{10}$/g }],
  },
  {
    bankCode: '15522410',
    bankName: '长春双阳吉银村镇银行',
    patterns: [{ reg: /^(621659006)\d{10}$/g }],
  },
  {
    bankCode: '15522410',
    bankName: '长春双阳吉银村镇银行',
    patterns: [{ reg: /^(62165932)\d{11}$/g }],
  },
  {
    bankCode: '15522422',
    bankName: '舒兰吉银村镇银行',
    patterns: [{ reg: /^(621659009)\d{10}$/g }],
  },
  {
    bankCode: '15522433',
    bankName: '双辽吉银村镇银行',
    patterns: [{ reg: /^(621659008)\d{10}$/g }],
  },
  {
    bankCode: '15522441',
    bankName: '东丰吉银村镇银行',
    patterns: [{ reg: /^(621659010)\d{10}$/g }],
  },
  {
    bankCode: '15522494',
    bankName: '珲春吉银村镇银行',
    patterns: [{ reg: /^(621659003)\d{10}$/g }],
  },
  {
    bankCode: '15523120',
    bankName: '江都吉银村镇银行',
    patterns: [{ reg: /^(621398001)\d{10}$/g }],
  },
  {
    bankCode: '15533046',
    bankName: '常州钟楼长江村镇银行',
    patterns: [{ reg: /^(621676021)\d{10}$/g }],
  },
  {
    bankCode: '15533145',
    bankName: '镇江润州长江村镇银行',
    patterns: [{ reg: /^(621676014)\d{10}$/g }],
  },
  {
    bankCode: '15535334',
    bankName: '湖北红安长江村镇银行股份有限公',
    patterns: [{ reg: /^(621676009)\d{10}$/g }],
  },
  {
    bankCode: '15535336',
    bankName: '湖北英山长江村镇银行股份有限公',
    patterns: [{ reg: /^(621676010)\d{10}$/g }],
  },
  {
    bankCode: '15535360',
    bankName: '湖北咸安长江村镇银行',
    patterns: [{ reg: /^(621676001)\d{10}$/g }],
  },
  {
    bankCode: '15535367',
    bankName: '湖北赤壁长江村镇银行',
    patterns: [{ reg: /^(621676002)\d{10}$/g }],
  },
  {
    bankCode: '15535813',
    bankName: '广州增城长江村镇银行',
    patterns: [{ reg: /^(621676003)\d{10}$/g }],
  },
  {
    bankCode: '15535864',
    bankName: '汕头龙湖长江村镇银行',
    patterns: [{ reg: /^(621676006)\d{10}$/g }],
  },
  {
    bankCode: '15535894',
    bankName: '江门开平长江村镇银行',
    patterns: [{ reg: /^(621676024)\d{10}$/g }],
  },
  {
    bankCode: '15535912',
    bankName: '湛江廉江长江村镇银行',
    patterns: [{ reg: /^(621676035)\d{10}$/g }],
  },
  {
    bankCode: '15535922',
    bankName: '茂名高州长江村镇银行',
    patterns: [{ reg: /^(621676025)\d{10}$/g }],
  },
  {
    bankCode: '15535923',
    bankName: '茂名电白长江村镇银行',
    patterns: [{ reg: /^(621676013)\d{10}$/g }],
  },
  {
    bankCode: '15535952',
    bankName: '惠州博罗长江村镇银行',
    patterns: [{ reg: /^(621676012)\d{10}$/g }],
  },
  {
    bankCode: '15535992',
    bankName: '阳江阳春长江村镇银行',
    patterns: [{ reg: /^(621676023)\d{10}$/g }],
  },
  {
    bankCode: '15536020',
    bankName: '东莞虎门长江村镇银行',
    patterns: [{ reg: /^(621676011)\d{10}$/g }],
  },
  {
    bankCode: '15536041',
    bankName: '潮州潮安长江村镇银行',
    patterns: [{ reg: /^(621676008)\d{10}$/g }],
  },
  {
    bankCode: '15536421',
    bankName: '海南五指山长江村镇银行股份有限',
    patterns: [{ reg: /^(621676005)\d{10}$/g }],
  },
  {
    bankCode: '15536427',
    bankName: '海南屯昌长江村镇银行',
    patterns: [{ reg: /^(621676026)\d{10}$/g }],
  },
  {
    bankCode: '15536428',
    bankName: '海南澄迈长江村镇银行股份有限公',
    patterns: [{ reg: /^(621676004)\d{10}$/g }],
  },
  {
    bankCode: '15536432',
    bankName: '海南白沙长江村镇银行',
    patterns: [{ reg: /^(621676027)\d{10}$/g }],
  },
  {
    bankCode: '15536433',
    bankName: '海南昌江长江村镇银行',
    patterns: [{ reg: /^(621676029)\d{10}$/g }],
  },
  {
    bankCode: '15536438',
    bankName: '海南琼中长江村镇银行',
    patterns: [{ reg: /^(621676028)\d{10}$/g }],
  },
  {
    bankCode: '15537322',
    bankName: '昆明五华长江村镇银行',
    patterns: [{ reg: /^(621676015)\d{10}$/g }],
  },
  {
    bankCode: '15537363',
    bankName: '曲靖宣威长江村镇银行',
    patterns: [{ reg: /^(621676019)\d{10}$/g }],
  },
  {
    bankCode: '15537369',
    bankName: '曲靖会泽长江村镇银行',
    patterns: [{ reg: /^(621676020)\d{10}$/g }],
  },
  {
    bankCode: '15537452',
    bankName: '文山砚山长江村镇银行',
    patterns: [{ reg: /^(621676030)\d{10}$/g }],
  },
  {
    bankCode: '15537455',
    bankName: '文山马关长江村镇银行',
    patterns: [{ reg: /^(621676022)\d{10}$/g }],
  },
  {
    bankCode: '15537456',
    bankName: '文山丘北长江村镇银行',
    patterns: [{ reg: /^(621676031)\d{10}$/g }],
  },
  {
    bankCode: '15537457',
    bankName: '文山广南长江村镇银行',
    patterns: [{ reg: /^(621676032)\d{10}$/g }],
  },
  {
    bankCode: '15537492',
    bankName: '西双版纳勐海长江村镇银行',
    patterns: [{ reg: /^(621676018)\d{10}$/g }],
  },
  {
    bankCode: '15537493',
    bankName: '西双版纳勐腊长江村镇银行',
    patterns: [{ reg: /^(621676033)\d{10}$/g }],
  },
  {
    bankCode: '15537542',
    bankName: '德宏芒市长江村镇银行',
    patterns: [{ reg: /^(621676034)\d{10}$/g }],
  },
  {
    bankCode: '15537552',
    bankName: '丽水永胜长江村镇银行',
    patterns: [{ reg: /^(621676016)\d{10}$/g }],
  },
  {
    bankCode: '15537555',
    bankName: '丽江玉龙长江村镇银行',
    patterns: [{ reg: /^(621676017)\d{10}$/g }],
  },
  {
    bankCode: '15542901',
    bankName: '上海松江富民村镇银行',
    patterns: [{ reg: /^(621678108)\d{10}$/g }],
  },
  {
    bankCode: '15543332',
    bankName: '浙江洞头富民村镇银行',
    patterns: [{ reg: /^(621678102)\d{10}$/g }],
  },
  {
    bankCode: '15543376',
    bankName: '浙江上虞富民村镇银行',
    patterns: [{ reg: /^(621678105)\d{10}$/g }],
  },
  {
    bankCode: '15543388',
    bankName: '浙江东阳富民村镇银行',
    patterns: [{ reg: /^(621678103)\d{10}$/g }],
  },
  {
    bankCode: '15543436',
    bankName: '浙江遂昌富民村镇银行',
    patterns: [{ reg: /^(621678101)\d{10}$/g }],
  },
  {
    bankCode: '15543436',
    bankName: '浙江遂昌富民村镇银行',
    patterns: [{ reg: /^(621678601)\d{10}$/g }],
  },
  {
    bankCode: '15543453',
    bankName: '浙江台州路桥富民村镇银行',
    patterns: [{ reg: /^(621678106)\d{10}$/g }],
  },
  {
    bankCode: '15543455',
    bankName: '浙江仙居富民村镇银行',
    patterns: [{ reg: /^(621678107)\d{10}$/g }],
  },
  {
    bankCode: '15544230',
    bankName: '萍乡安源富民村镇银行',
    patterns: [{ reg: /^(621678001)\d{10}$/g }],
  },
  {
    bankCode: '15544230',
    bankName: '萍乡安源富民村镇银行',
    patterns: [{ reg: /^(621678501)\d{10}$/g }],
  },
  {
    bankCode: '15544232',
    bankName: '江西上栗富民村镇银行',
    patterns: [{ reg: /^(621678002)\d{10}$/g }],
  },
  {
    bankCode: '15544232',
    bankName: '江西上栗富民村镇银行',
    patterns: [{ reg: /^(621678502)\d{10}$/g }],
  },
  {
    bankCode: '15544987',
    bankName: '卫辉富民村镇银行',
    patterns: [{ reg: /^(621678301)\d{10}$/g }],
  },
  {
    bankCode: '15547010',
    bankName: '贵阳乌当富民村镇银行',
    patterns: [{ reg: /^(621678208)\d{10}$/g }],
  },
  {
    bankCode: '15547010',
    bankName: '贵阳乌当富民村镇银行',
    patterns: [{ reg: /^(621678708)\d{10}$/g }],
  },
  {
    bankCode: '15547011',
    bankName: '开阳富民村镇银行',
    patterns: [{ reg: /^(621678213)\d{10}$/g }],
  },
  {
    bankCode: '15547011',
    bankName: '开阳富民村镇银行',
    patterns: [{ reg: /^(621678713)\d{10}$/g }],
  },
  {
    bankCode: '15547015',
    bankName: '贵阳观山湖富民村镇银行',
    patterns: [{ reg: /^(621678207)\d{10}$/g }],
  },
  {
    bankCode: '15547015',
    bankName: '贵阳观山湖富民村镇银行',
    patterns: [{ reg: /^(621678707)\d{10}$/g }],
  },
  {
    bankCode: '15547016',
    bankName: '贵阳云岩富民村镇银行',
    patterns: [{ reg: /^(621678209)\d{10}$/g }],
  },
  {
    bankCode: '15547016',
    bankName: '贵阳云岩富民村镇银行',
    patterns: [{ reg: /^(621678709)\d{10}$/g }],
  },
  {
    bankCode: '15547017',
    bankName: '贵阳南明富民村镇银行',
    patterns: [{ reg: /^(621678211)\d{10}$/g }],
  },
  {
    bankCode: '15547017',
    bankName: '贵阳南明富民村镇银行',
    patterns: [{ reg: /^(621678711)\d{10}$/g }],
  },
  {
    bankCode: '15547030',
    bankName: '遵义红花岗富民村镇银行',
    patterns: [{ reg: /^(621678212)\d{10}$/g }],
  },
  {
    bankCode: '15547030',
    bankName: '遵义红花岗富民村镇银行',
    patterns: [{ reg: /^(621678712)\d{10}$/g }],
  },
  {
    bankCode: '15547092',
    bankName: '大方富民村镇银行',
    patterns: [{ reg: /^(621678202)\d{10}$/g }],
  },
  {
    bankCode: '15547092',
    bankName: '大方富民村镇银行',
    patterns: [{ reg: /^(621678702)\d{10}$/g }],
  },
  {
    bankCode: '15547094',
    bankName: '金沙富民村镇银行',
    patterns: [{ reg: /^(621678201)\d{10}$/g }],
  },
  {
    bankCode: '15547094',
    bankName: '金沙富民村镇银行',
    patterns: [{ reg: /^(621678701)\d{10}$/g }],
  },
  {
    bankCode: '15547096',
    bankName: '纳雍富民村镇银行',
    patterns: [{ reg: /^(621678203)\d{10}$/g }],
  },
  {
    bankCode: '15547096',
    bankName: '纳雍富民村镇银行',
    patterns: [{ reg: /^(621678703)\d{10}$/g }],
  },
  {
    bankCode: '15547097',
    bankName: '威宁富民村镇银行',
    patterns: [{ reg: /^(621678205)\d{10}$/g }],
  },
  {
    bankCode: '15547097',
    bankName: '威宁富民村镇银行',
    patterns: [{ reg: /^(621678705)\d{10}$/g }],
  },
  {
    bankCode: '15547098',
    bankName: '赫章富民村镇银行',
    patterns: [{ reg: /^(621678206)\d{10}$/g }],
  },
  {
    bankCode: '15547098',
    bankName: '赫章富民村镇银行',
    patterns: [{ reg: /^(621678706)\d{10}$/g }],
  },
  {
    bankCode: '15547123',
    bankName: '安顺西秀富民村镇银行',
    patterns: [{ reg: /^(621678210)\d{10}$/g }],
  },
  {
    bankCode: '15547123',
    bankName: '安顺西秀富民村镇银行',
    patterns: [{ reg: /^(621678710)\d{10}$/g }],
  },
  {
    bankCode: '15547154',
    bankName: '福泉富民村镇银行',
    patterns: [{ reg: /^(621678215)\d{10}$/g }],
  },
  {
    bankCode: '15547154',
    bankName: '福泉富民村镇银行',
    patterns: [{ reg: /^(621678715)\d{10}$/g }],
  },
  {
    bankCode: '15551253',
    bankName: '唐山市开平汇金村镇银行',
    patterns: [{ reg: /^(621679004)\d{10}$/g }],
  },
  {
    bankCode: '15551391',
    bankName: '张北信达村镇银行',
    patterns: [{ reg: /^(621679001)\d{10}$/g }],
  },
  {
    bankCode: '15551392',
    bankName: '康保银丰村镇银行',
    patterns: [{ reg: /^(621679003)\d{10}$/g }],
  },
  {
    bankCode: '15551395',
    bankName: '蔚县银泰村镇银行',
    patterns: [{ reg: /^(621679002)\d{10}$/g }],
  },
  {
    bankCode: '15563056',
    bankName: '张家港渝农商村镇银行',
    patterns: [{ reg: /^(621680002)\d{7}$/g }],
  },
  {
    bankCode: '15563056',
    bankName: '张家港渝农商村镇银行',
    patterns: [{ reg: /^(621680102)\d{7}$/g }],
  },
  {
    bankCode: '15563918',
    bankName: '福建平潭渝农商村镇银行',
    patterns: [{ reg: /^(621680007)\d{7}$/g }],
  },
  {
    bankCode: '15563918',
    bankName: '福建平潭渝农商村镇银行',
    patterns: [{ reg: /^(621680107)\d{7}$/g }],
  },
  {
    bankCode: '15563956',
    bankName: '福建沙县渝农商村镇银行',
    patterns: [{ reg: /^(621680009)\d{7}$/g }],
  },
  {
    bankCode: '15563956',
    bankName: '福建沙县渝农商村镇银行',
    patterns: [{ reg: /^(621680109)\d{7}$/g }],
  },
  {
    bankCode: '15563978',
    bankName: '福建石狮渝农商村镇银行',
    patterns: [{ reg: /^(621680112)\d{7}$/g }],
  },
  {
    bankCode: '15564034',
    bankName: '福建福安渝农商村镇银行',
    patterns: [{ reg: /^(621680110)\d{7}$/g }],
  },
  {
    bankCode: '15564034',
    bankName: '福建福安渝农商村镇银行',
    patterns: [{ reg: /^(621680010)\d{7}$/g }],
  },
  {
    bankCode: '15566152',
    bankName: '广西鹿寨渝农商村镇银行',
    patterns: [{ reg: /^(621680005)\d{7}$/g }],
  },
  {
    bankCode: '15566152',
    bankName: '广西鹿寨渝农商村镇银行',
    patterns: [{ reg: /^(621680105)\d{7}$/g }],
  },
  {
    bankCode: '15566761',
    bankName: '大竹渝农商村镇银行',
    patterns: [{ reg: /^(621680003)\d{7}$/g }],
  },
  {
    bankCode: '15566761',
    bankName: '大竹渝农商村镇银行',
    patterns: [{ reg: /^(621680103)\d{7}$/g }],
  },
  {
    bankCode: '15567325',
    bankName: '云南西山渝农商村镇银行',
    patterns: [{ reg: /^(621680113)\d{7}$/g }],
  },
  {
    bankCode: '15567511',
    bankName: '云南大理渝农商村镇银行',
    patterns: [{ reg: /^(621680004)\d{7}$/g }],
  },
  {
    bankCode: '15567511',
    bankName: '云南大理渝农商村镇银行',
    patterns: [{ reg: /^(621680104)\d{7}$/g }],
  },
  {
    bankCode: '15567513',
    bankName: '云南祥云渝农商村镇银行',
    patterns: [{ reg: /^(621680006)\d{7}$/g }],
  },
  {
    bankCode: '15567513',
    bankName: '云南祥云渝农商村镇银行',
    patterns: [{ reg: /^(621680106)\d{7}$/g }],
  },
  {
    bankCode: '15567523',
    bankName: '云南鹤庆渝农商村镇银行',
    patterns: [{ reg: /^(621680008)\d{7}$/g }],
  },
  {
    bankCode: '15567523',
    bankName: '云南鹤庆渝农商村镇银行',
    patterns: [{ reg: /^(621680108)\d{7}$/g }],
  },
  {
    bankCode: '15567571',
    bankName: '云南香格里拉渝农商村镇银行',
    patterns: [{ reg: /^(621680011)\d{7}$/g }],
  },
  {
    bankCode: '15567571',
    bankName: '云南香格里拉渝农商村镇银行',
    patterns: [{ reg: /^(621680111)\d{7}$/g }],
  },
  {
    bankCode: '15572210',
    bankName: '沈阳于洪永安村镇银行',
    patterns: [{ reg: /^(621681001)\d{9}$/g }],
  },
  {
    bankCode: '15572291',
    bankName: '阜新农商村镇银行',
    patterns: [{ reg: /^(621681005)\d{10}$/g }],
  },
  {
    bankCode: '15572292',
    bankName: '辽宁彰武金通村镇银行股份有限公',
    patterns: [{ reg: /^(621681002)\d{9}$/g }],
  },
  {
    bankCode: '15572330',
    bankName: '铁岭农商村镇银行',
    patterns: [{ reg: /^(621681003)\d{9}$/g }],
  },
  {
    bankCode: '15581000',
    bankName: '北京房山沪农商村镇银行',
    patterns: [{ reg: /^(621682002)\d{10}$/g }],
  },
  {
    bankCode: '15581000',
    bankName: '北京房山沪农商村镇银行',
    patterns: [{ reg: /^(621682801)\d{10}$/g }],
  },
  {
    bankCode: '15582929',
    bankName: '上海崇明沪农商村镇银行',
    patterns: [{ reg: /^(621682839)\d{10}$/g }],
  },
  {
    bankCode: '15584510',
    bankName: '济南长清沪农商村镇银行',
    patterns: [{ reg: /^(621682803)\d{10}$/g }],
  },
  {
    bankCode: '15584510',
    bankName: '济南长清沪农商村镇银行',
    patterns: [{ reg: /^(621682101)\d{10}$/g }],
  },
  {
    bankCode: '15584513',
    bankName: '济南槐荫沪农商村镇银行',
    patterns: [{ reg: /^(621682102)\d{10}$/g }],
  },
  {
    bankCode: '15584513',
    bankName: '济南槐荫沪农商村镇银行',
    patterns: [{ reg: /^(621682805)\d{10}$/g }],
  },
  {
    bankCode: '15584630',
    bankName: '泰安沪农商村镇银行',
    patterns: [{ reg: /^(621682106)\d{10}$/g }],
  },
  {
    bankCode: '15584630',
    bankName: '泰安沪农商村镇银行',
    patterns: [{ reg: /^(621682808)\d{10}$/g }],
  },
  {
    bankCode: '15584631',
    bankName: '宁阳沪农商村镇银行',
    patterns: [{ reg: /^(621682103)\d{10}$/g }],
  },
  {
    bankCode: '15584631',
    bankName: '宁阳沪农商村镇银行',
    patterns: [{ reg: /^(621682806)\d{10}$/g }],
  },
  {
    bankCode: '15584633',
    bankName: '东平沪农商村镇银行',
    patterns: [{ reg: /^(621682807)\d{10}$/g }],
  },
  {
    bankCode: '15584633',
    bankName: '东平沪农商村镇银行',
    patterns: [{ reg: /^(621682105)\d{10}$/g }],
  },
  {
    bankCode: '15584710',
    bankName: '聊城沪农商村镇银行',
    patterns: [{ reg: /^(621682110)\d{10}$/g }],
  },
  {
    bankCode: '15584710',
    bankName: '聊城沪农商村镇银行',
    patterns: [{ reg: /^(621682812)\d{10}$/g }],
  },
  {
    bankCode: '15584712',
    bankName: '临清沪农商村镇银行',
    patterns: [{ reg: /^(621682111)\d{10}$/g }],
  },
  {
    bankCode: '15584712',
    bankName: '临清沪农商村镇银行',
    patterns: [{ reg: /^(621682813)\d{10}$/g }],
  },
  {
    bankCode: '15584713',
    bankName: '阳谷沪农商村镇银行',
    patterns: [{ reg: /^(621682109)\d{10}$/g }],
  },
  {
    bankCode: '15584713',
    bankName: '阳谷沪农商村镇银行',
    patterns: [{ reg: /^(621682811)\d{10}$/g }],
  },
  {
    bankCode: '15584715',
    bankName: '茌平沪农商村镇银行',
    patterns: [{ reg: /^(621682108)\d{10}$/g }],
  },
  {
    bankCode: '15584715',
    bankName: '茌平沪农商村镇银行',
    patterns: [{ reg: /^(621682810)\d{10}$/g }],
  },
  {
    bankCode: '15584770',
    bankName: '日照沪农商村镇银行',
    patterns: [{ reg: /^(621682107)\d{10}$/g }],
  },
  {
    bankCode: '15584770',
    bankName: '日照沪农商村镇银行',
    patterns: [{ reg: /^(621682809)\d{10}$/g }],
  },
  {
    bankCode: '15585511',
    bankName: '长沙星沙沪农商村镇银行',
    patterns: [{ reg: /^(621682202)\d{10}$/g }],
  },
  {
    bankCode: '15585511',
    bankName: '长沙星沙沪农商村镇银行',
    patterns: [{ reg: /^(621682816)\d{10}$/g }],
  },
  {
    bankCode: '15585514',
    bankName: '宁乡沪农商行村镇银行',
    patterns: [{ reg: /^(621682201)\d{10}$/g }],
  },
  {
    bankCode: '15585514',
    bankName: '宁乡沪农商行村镇银行',
    patterns: [{ reg: /^(621682815)\d{10}$/g }],
  },
  {
    bankCode: '15585525',
    bankName: '醴陵沪农商村镇银行',
    patterns: [{ reg: /^(621682203)\d{10}$/g }],
  },
  {
    bankCode: '15585525',
    bankName: '醴陵沪农商村镇银行',
    patterns: [{ reg: /^(621682817)\d{10}$/g }],
  },
  {
    bankCode: '15585541',
    bankName: '衡阳沪农商村镇银行',
    patterns: [{ reg: /^(621682818)\d{10}$/g }],
  },
  {
    bankCode: '15585541',
    bankName: '衡阳沪农商村镇银行',
    patterns: [{ reg: /^(621682205)\d{10}$/g }],
  },
  {
    bankCode: '15585583',
    bankName: '澧县沪农商村镇银行',
    patterns: [{ reg: /^(621682209)\d{10}$/g }],
  },
  {
    bankCode: '15585583',
    bankName: '澧县沪农商村镇银行',
    patterns: [{ reg: /^(621682822)\d{10}$/g }],
  },
  {
    bankCode: '15585584',
    bankName: '临澧沪农商村镇银行',
    patterns: [{ reg: /^(621682208)\d{10}$/g }],
  },
  {
    bankCode: '15585584',
    bankName: '临澧沪农商村镇银行',
    patterns: [{ reg: /^(621682821)\d{10}$/g }],
  },
  {
    bankCode: '15585586',
    bankName: '石门沪农商村镇银行',
    patterns: [{ reg: /^(621682210)\d{10}$/g }],
  },
  {
    bankCode: '15585586',
    bankName: '石门沪农商村镇银行',
    patterns: [{ reg: /^(621682823)\d{10}$/g }],
  },
  {
    bankCode: '15585591',
    bankName: '慈利沪农商村镇银行',
    patterns: [{ reg: /^(621682213)\d{10}$/g }],
  },
  {
    bankCode: '15585591',
    bankName: '慈利沪农商村镇银行',
    patterns: [{ reg: /^(621682827)\d{10}$/g }],
  },
  {
    bankCode: '15585623',
    bankName: '涟源沪农商村镇银行',
    patterns: [{ reg: /^(621682211)\d{10}$/g }],
  },
  {
    bankCode: '15585623',
    bankName: '涟源沪农商村镇银行',
    patterns: [{ reg: /^(621682825)\d{10}$/g }],
  },
  {
    bankCode: '15585624',
    bankName: '双峰沪农商村镇银行',
    patterns: [{ reg: /^(621682212)\d{10}$/g }],
  },
  {
    bankCode: '15585624',
    bankName: '双峰沪农商村镇银行',
    patterns: [{ reg: /^(621682826)\d{10}$/g }],
  },
  {
    bankCode: '15585634',
    bankName: '桂阳沪农商村镇银行',
    patterns: [{ reg: /^(621682207)\d{10}$/g }],
  },
  {
    bankCode: '15585634',
    bankName: '桂阳沪农商村镇银行',
    patterns: [{ reg: /^(621682820)\d{10}$/g }],
  },
  {
    bankCode: '15585635',
    bankName: '永兴沪农商村镇银行',
    patterns: [{ reg: /^(621682206)\d{10}$/g }],
  },
  {
    bankCode: '15585635',
    bankName: '永兴沪农商村镇银行',
    patterns: [{ reg: /^(621682819)\d{10}$/g }],
  },
  {
    bankCode: '15585840',
    bankName: '深圳光明沪农商村镇银行',
    patterns: [{ reg: /^(621682003)\d{10}$/g }],
  },
  {
    bankCode: '15585840',
    bankName: '深圳光明沪农商村镇银行',
    patterns: [{ reg: /^(621682802)\d{10}$/g }],
  },
  {
    bankCode: '15587310',
    bankName: '阿拉沪农商村镇银行',
    patterns: [{ reg: /^(621682301)\d{10}$/g }],
  },
  {
    bankCode: '15587310',
    bankName: '阿拉沪农商村镇银行',
    patterns: [{ reg: /^(621682828)\d{10}$/g }],
  },
  {
    bankCode: '15587317',
    bankName: '嵩明沪农商村镇银行',
    patterns: [{ reg: /^(621682302)\d{10}$/g }],
  },
  {
    bankCode: '15587317',
    bankName: '嵩明沪农商村镇银行',
    patterns: [{ reg: /^(621682829)\d{10}$/g }],
  },
  {
    bankCode: '15587431',
    bankName: '个旧沪农商村镇银行',
    patterns: [{ reg: /^(621682305)\d{10}$/g }],
  },
  {
    bankCode: '15587431',
    bankName: '个旧沪农商村镇银行',
    patterns: [{ reg: /^(621682831)\d{10}$/g }],
  },
  {
    bankCode: '15587432',
    bankName: '开远沪农商村镇银行',
    patterns: [{ reg: /^(621682307)\d{10}$/g }],
  },
  {
    bankCode: '15587432',
    bankName: '开远沪农商村镇银行',
    patterns: [{ reg: /^(621682833)\d{10}$/g }],
  },
  {
    bankCode: '15587433',
    bankName: '蒙自沪农商村镇银行',
    patterns: [{ reg: /^(621682832)\d{10}$/g }],
  },
  {
    bankCode: '15587433',
    bankName: '蒙自沪农商村镇银行',
    patterns: [{ reg: /^(621682306)\d{10}$/g }],
  },
  {
    bankCode: '15587435',
    bankName: '建水沪农商村镇银行',
    patterns: [{ reg: /^(621682309)\d{10}$/g }],
  },
  {
    bankCode: '15587435',
    bankName: '建水沪农商村镇银行',
    patterns: [{ reg: /^(621682836)\d{10}$/g }],
  },
  {
    bankCode: '15587437',
    bankName: '弥勒沪农商村镇银行',
    patterns: [{ reg: /^(621682835)\d{10}$/g }],
  },
  {
    bankCode: '15587437',
    bankName: '弥勒沪农商村镇银行',
    patterns: [{ reg: /^(621682308)\d{10}$/g }],
  },
  {
    bankCode: '15587530',
    bankName: '保山隆阳沪农商村镇银行',
    patterns: [{ reg: /^(621682310)\d{10}$/g }],
  },
  {
    bankCode: '15587530',
    bankName: '保山隆阳沪农商村镇银行',
    patterns: [{ reg: /^(621682837)\d{10}$/g }],
  },
  {
    bankCode: '15587546',
    bankName: '瑞丽沪农商村镇银行',
    patterns: [{ reg: /^(621682303)\d{10}$/g }],
  },
  {
    bankCode: '15587546',
    bankName: '瑞丽沪农商村镇银行',
    patterns: [{ reg: /^(621682830)\d{10}$/g }],
  },
  {
    bankCode: '15587580',
    bankName: '临沧临翔沪农商村镇银行',
    patterns: [{ reg: /^(621682311)\d{10}$/g }],
  },
  {
    bankCode: '15587580',
    bankName: '临沧临翔沪农商村镇银行',
    patterns: [{ reg: /^(621682838)\d{10}$/g }],
  },
  {
    bankCode: '15595866',
    bankName: '广东澄海潮商村镇银行',
    patterns: [{ reg: /^(621685701)\d{10}$/g }],
  },
  {
    bankCode: '15596054',
    bankName: '广东普宁汇成村镇银行',
    patterns: [{ reg: /^(621685702)\d{10}$/g }],
  },
  {
    bankCode: '15604951',
    bankName: '宝丰豫丰村镇银行',
    patterns: [{ reg: /^(621687913)\d{9}$/g }],
  },
  {
    bankCode: '15605053',
    bankName: '灵宝融丰村镇银行',
    patterns: [{ reg: /^(621687001)\d{10}$/g }],
  },
  {
    bankCode: '15612265',
    bankName: '丹东鼎元村镇银行',
    patterns: [{ reg: /^(62169301)\d{11}$/g }],
  },
  {
    bankCode: '15612266',
    bankName: '丹东鼎安村镇银行',
    patterns: [{ reg: /^(62169302)\d{11}$/g }],
  },
  {
    bankCode: '15612267',
    bankName: '丹东福汇村镇银行',
    patterns: [{ reg: /^(62169303)\d{11}$/g }],
  },
  {
    bankCode: '15624912',
    bankName: '中牟郑银村镇银行',
    patterns: [{ reg: /^(62169502)\d{11}$/g }],
  },
  {
    bankCode: '15624913',
    bankName: '新郑郑银村镇银行',
    patterns: [{ reg: /^(62169505)\d{11}$/g }],
  },
  {
    bankCode: '15624916',
    bankName: '新密郑银村镇银行',
    patterns: [{ reg: /^(62169501)\d{11}$/g }],
  },
  {
    bankCode: '15625033',
    bankName: '鄢陵郑银村镇银行',
    patterns: [{ reg: /^(62169503)\d{11}$/g }],
  },
  {
    bankCode: '15625082',
    bankName: '扶沟郑银村镇银行',
    patterns: [{ reg: /^(62169504)\d{11}$/g }],
  },
  {
    bankCode: '15633632',
    bankName: '安徽五河永泰村镇银行',
    patterns: [{ reg: /^(62352801)\d{11}$/g }],
  },
  {
    bankCode: '15641100',
    bankName: '天津华明村镇银行',
    patterns: [{ reg: /^(621697813)\d{9}$/g }],
  },
  {
    bankCode: '15641101',
    bankName: '天津宁河村镇银行',
    patterns: [{ reg: /^(62169757)\d{10}$/g }],
  },
  {
    bankCode: '15641442',
    bankName: '任丘村镇银行',
    patterns: [{ reg: /^(621697793)\d{9}$/g }],
  },
  {
    bankCode: '15643621',
    bankName: '芜湖泰寿村镇银行',
    patterns: [{ reg: /^(621697873)\d{9}$/g }],
  },
  {
    bankCode: '15644512',
    bankName: '山东历城圆融村镇银行',
    patterns: [{ reg: /^(62169724)\d{10}$/g }],
  },
  {
    bankCode: '15644682',
    bankName: '乐陵圆融村镇银行',
    patterns: [{ reg: /^(62169734)\d{10}$/g }],
  },
  {
    bankCode: '15644683',
    bankName: '德州陵城圆融村镇银行',
    patterns: [{ reg: /^(62169769)\d{10}$/g }],
  },
  {
    bankCode: '15644684',
    bankName: '平原圆融村镇银行',
    patterns: [{ reg: /^(62169768)\d{10}$/g }],
  },
  {
    bankCode: '15644686',
    bankName: '武城圆融村镇银行',
    patterns: [{ reg: /^(62169767)\d{10}$/g }],
  },
  {
    bankCode: '15644734',
    bankName: '山东兰陵村镇银行股份有限公司',
    patterns: [{ reg: /^(62169716)\d{10}$/g }],
  },
  {
    bankCode: '15654923',
    bankName: '尉氏合益村镇银行',
    patterns: [{ reg: /^(62311703)\d{10}$/g }],
  },
  {
    bankCode: '15654924',
    bankName: '开封新东方村镇银行',
    patterns: [{ reg: /^(62311702)\d{11}$/g }],
  },
  {
    bankCode: '15655031',
    bankName: '长葛轩辕村镇银行',
    patterns: [{ reg: /^(62311701)\d{10}$/g }],
  },
  {
    bankCode: '15676431',
    bankName: '海南儋州绿色村镇银行',
    patterns: [{ reg: /^(62312201)\d{11}$/g }],
  },
  {
    bankCode: '15687381',
    bankName: '楚雄兴彝村镇银行',
    patterns: [{ reg: /^(62317502)\d{11}$/g }],
  },
  {
    bankCode: '15687410',
    bankName: '玉溪红塔区兴和村镇银行',
    patterns: [{ reg: /^(62317501)\d{11}$/g }],
  },
  {
    bankCode: '15695812',
    bankName: '从化柳银村镇银行',
    patterns: [{ reg: /^(621689007)\d{9}$/g }],
  },
  {
    bankCode: '15696141',
    bankName: '柳江柳银村镇银行',
    patterns: [{ reg: /^(621689001)\d{9}$/g }],
  },
  {
    bankCode: '15696158',
    bankName: '融水柳银村镇银行',
    patterns: [{ reg: /^(621689002)\d{9}$/g }],
  },
  {
    bankCode: '15696246',
    bankName: '北流柳银村镇银行',
    patterns: [{ reg: /^(621689004)\d{9}$/g }],
  },
  {
    bankCode: '15696247',
    bankName: '陆川柳银村镇银行',
    patterns: [{ reg: /^(621689005)\d{9}$/g }],
  },
  {
    bankCode: '15696248',
    bankName: '博白柳银村镇银行',
    patterns: [{ reg: /^(621689006)\d{9}$/g }],
  },
  {
    bankCode: '15696249',
    bankName: '兴业柳银村镇银行',
    patterns: [{ reg: /^(621689003)\d{9}$/g }],
  },
  {
    bankCode: '15705114',
    bankName: '遂平恒生村镇银行',
    patterns: [{ reg: /^(621380001)\d{10}$/g }],
  },
  {
    bankCode: '15713386',
    bankName: '浙江兰溪越商村镇银行',
    patterns: [{ reg: /^(621387973)\d{9}$/g }],
  },
  {
    bankCode: '15723083',
    bankName: '淮安光大村镇银行',
    patterns: [{ reg: /^(621381002)\d{9}$/g }],
  },
  {
    bankCode: '15725533',
    bankName: '韶山光大村镇银行',
    patterns: [{ reg: /^(621381001)\d{10}$/g }],
  },
  {
    bankCode: '15731000',
    bankName: '北京昌平包商村镇银行',
    patterns: [{ reg: /^(621382019)\d{10}$/g }],
  },
  {
    bankCode: '15731100',
    bankName: '天津津南村镇银行',
    patterns: [{ reg: /^(621382018)\d{10}$/g }],
  },
  {
    bankCode: '15731611',
    bankName: '清徐惠民村镇银行',
    patterns: [{ reg: /^(621382020)\d{10}$/g }],
  },
  {
    bankCode: '15731922',
    bankName: '固阳包商村镇银行',
    patterns: [{ reg: /^(621382001)\d{10}$/g }],
  },
  {
    bankCode: '15731948',
    bankName: '宁城包商村镇银行',
    patterns: [{ reg: /^(621382002)\d{10}$/g }],
  },
  {
    bankCode: '15731966',
    bankName: '莫力达瓦包商村镇银行',
    patterns: [{ reg: /^(621382006)\d{10}$/g }],
  },
  {
    bankCode: '15731971',
    bankName: '鄂温克旗包商村镇银行',
    patterns: [{ reg: /^(621382005)\d{10}$/g }],
  },
  {
    bankCode: '15731982',
    bankName: '科尔沁包商村镇银行',
    patterns: [{ reg: /^(621382010)\d{10}$/g }],
  },
  {
    bankCode: '15732017',
    bankName: '西乌珠穆沁包商惠丰村镇银行',
    patterns: [{ reg: /^(621382009)\d{10}$/g }],
  },
  {
    bankCode: '15732030',
    bankName: '集宁包商村镇银行',
    patterns: [{ reg: /^(621382007)\d{10}$/g }],
  },
  {
    bankCode: '15732036',
    bankName: '化德包商村镇银行',
    patterns: [{ reg: /^(621382008)\d{10}$/g }],
  },
  {
    bankCode: '15732053',
    bankName: '准格尔旗包商村镇银行',
    patterns: [{ reg: /^(621382003)\d{10}$/g }],
  },
  {
    bankCode: '15732057',
    bankName: '乌审旗包商村镇银行',
    patterns: [{ reg: /^(621382004)\d{10}$/g }],
  },
  {
    bankCode: '15732220',
    bankName: '大连金州联丰村镇银行',
    patterns: [{ reg: /^(621382025)\d{10}$/g }],
  },
  {
    bankCode: '15732415',
    bankName: '九台龙嘉村镇银行',
    patterns: [{ reg: /^(621382013)\d{10}$/g }],
  },
  {
    bankCode: '15733062',
    bankName: '江苏南通如皋包商村镇银行',
    patterns: [{ reg: /^(621382017)\d{10}$/g }],
  },
  {
    bankCode: '15733129',
    bankName: '仪征包商村镇银行',
    patterns: [{ reg: /^(621382021)\d{10}$/g }],
  },
  {
    bankCode: '15734759',
    bankName: '鄄城包商村镇银行',
    patterns: [{ reg: /^(621382023)\d{10}$/g }],
  },
  {
    bankCode: '15735040',
    bankName: '漯河市郾城包商村镇银行',
    patterns: [{ reg: /^(621382015)\d{10}$/g }],
  },
  {
    bankCode: '15735320',
    bankName: '掇刀包商村镇银行',
    patterns: [{ reg: /^(621382016)\d{10}$/g }],
  },
  {
    bankCode: '15735556',
    bankName: '武冈包商村镇银行',
    patterns: [{ reg: /^(621382012)\d{10}$/g }],
  },
  {
    bankCode: '15736510',
    bankName: '新都桂城村镇银行',
    patterns: [{ reg: /^(621382014)\d{10}$/g }],
  },
  {
    bankCode: '15736610',
    bankName: '广元包商贵民村镇银行',
    patterns: [{ reg: /^(621382024)\d{10}$/g }],
  },
  {
    bankCode: '15737010',
    bankName: '贵阳花溪建设村镇银行',
    patterns: [{ reg: /^(621382027)\d{10}$/g }],
  },
  {
    bankCode: '15737012',
    bankName: '息烽包商黔隆村镇银行',
    patterns: [{ reg: /^(621382011)\d{10}$/g }],
  },
  {
    bankCode: '15737090',
    bankName: '毕节发展村镇银行',
    patterns: [{ reg: /^(621382022)\d{10}$/g }],
  },
  {
    bankCode: '15738712',
    bankName: '宁夏贺兰回商村镇银行',
    patterns: [{ reg: /^(621382026)\d{10}$/g }],
  },
  {
    bankCode: '15743338',
    bankName: '浙江泰顺温银村镇银行',
    patterns: [{ reg: /^(62319563)\d{10}$/g }],
  },
  {
    bankCode: '15752281',
    bankName: '辽宁大石桥隆丰村镇银行',
    patterns: [{ reg: /^(621383001)\d{10}$/g }],
  },
  {
    bankCode: '15752282',
    bankName: '辽宁辰州汇通村镇银行股份有限公',
    patterns: [{ reg: /^(621383002)\d{10}$/g }],
  },
  {
    bankCode: '15766630',
    bankName: '内江兴隆村镇银行',
    patterns: [{ reg: /^(621385663)\d{9}$/g }],
  },
  {
    bankCode: '15773683',
    bankName: '枞阳泰业村镇银行',
    patterns: [{ reg: /^(62316904)\d{11}$/g }],
  },
  {
    bankCode: '15775985',
    bankName: '东源泰业村镇银行',
    patterns: [{ reg: /^(62316905)\d{11}$/g }],
  },
  {
    bankCode: '15776020',
    bankName: '东莞长安村镇银行',
    patterns: [{ reg: /^(62316902)\d{11}$/g }],
  },
  {
    bankCode: '15776314',
    bankName: '灵山泰业村镇银行',
    patterns: [{ reg: /^(62316903)\d{11}$/g }],
  },
  {
    bankCode: '15776927',
    bankName: '开县泰业村镇银行',
    patterns: [{ reg: /^(62316901)\d{11}$/g }],
  },
  {
    bankCode: '15786020',
    bankName: '东莞厚街华业村镇银行',
    patterns: [{ reg: /^(62316906)\d{11}$/g }],
  },
  {
    bankCode: '15794230',
    bankName: '萍乡湘东黄海村镇银行',
    patterns: [{ reg: /^(621265001)\d{10}$/g }],
  },
  {
    bankCode: '15801127',
    bankName: '滨海惠民村镇银行',
    patterns: [{ reg: /^(62127852)\d{10}$/g }],
  },
  {
    bankCode: '15801466',
    bankName: '文安县惠民村镇银行股份有限公司',
    patterns: [{ reg: /^(62127834)\d{10}$/g }],
  },
  {
    bankCode: '15801469',
    bankName: '廊坊市安次区惠民村镇银行',
    patterns: [{ reg: /^(62127843)\d{10}$/g }],
  },
  {
    bankCode: '15801488',
    bankName: '安平惠民村镇银行',
    patterns: [{ reg: /^(621278193)\d{9}$/g }],
  },
  {
    bankCode: '15802410',
    bankName: '长春高新惠民村镇银行',
    patterns: [{ reg: /^(621278293)\d{9}$/g }],
  },
  {
    bankCode: '15802416',
    bankName: '长春南关惠民村镇银行',
    patterns: [{ reg: /^(62127825)\d{10}$/g }],
  },
  {
    bankCode: '15802425',
    bankName: '桦甸惠民村镇银行',
    patterns: [{ reg: /^(621278503)\d{9}$/g }],
  },
  {
    bankCode: '15802426',
    bankName: '吉林丰满惠民村镇银行',
    patterns: [{ reg: /^(62127839)\d{10}$/g }],
  },
  {
    bankCode: '15802429',
    bankName: '吉林船营惠民村镇银行',
    patterns: [{ reg: /^(62127861)\d{10}$/g }],
  },
  {
    bankCode: '15802471',
    bankName: '白城洮北惠民村镇银行',
    patterns: [{ reg: /^(62127858)\d{10}$/g }],
  },
  {
    bankCode: '15802472',
    bankName: '洮南惠民村镇银行',
    patterns: [{ reg: /^(62127827)\d{10}$/g }],
  },
  {
    bankCode: '15802474',
    bankName: '大安惠民村镇银行',
    patterns: [{ reg: /^(62127823)\d{10}$/g }],
  },
  {
    bankCode: '15802511',
    bankName: '扶余惠民村镇银行',
    patterns: [{ reg: /^(62127877)\d{10}$/g }],
  },
  {
    bankCode: '15802514',
    bankName: '乾安惠民村镇银行',
    patterns: [{ reg: /^(62127822)\d{10}$/g }],
  },
  {
    bankCode: '15802515',
    bankName: '松原宁江惠民村镇银行',
    patterns: [{ reg: /^(62127821)\d{10}$/g }],
  },
  {
    bankCode: '15802621',
    bankName: '双城惠民村镇银行有限责任公司',
    patterns: [{ reg: /^(62127828)\d{10}$/g }],
  },
  {
    bankCode: '15802624',
    bankName: '五常惠民村镇银行',
    patterns: [{ reg: /^(62127820)\d{10}$/g }],
  },
  {
    bankCode: '15803614',
    bankName: '庐江惠民村镇银行',
    patterns: [{ reg: /^(62127836)\d{10}$/g }],
  },
  {
    bankCode: '15803652',
    bankName: '含山惠民村镇银行',
    patterns: [{ reg: /^(62127837)\d{10}$/g }],
  },
  {
    bankCode: '15804524',
    bankName: '青岛平度惠民村镇银行',
    patterns: [{ reg: /^(62127831)\d{10}$/g }],
  },
  {
    bankCode: '15804586',
    bankName: '高密惠民村镇银行',
    patterns: [{ reg: /^(62127832)\d{10}$/g }],
  },
  {
    bankCode: '15805324',
    bankName: '荆门东宝惠民村镇银行',
    patterns: [{ reg: /^(62127855)\d{10}$/g }],
  },
  {
    bankCode: '15805364',
    bankName: '通城惠民村镇银行',
    patterns: [{ reg: /^(621278333)\d{9}$/g }],
  },
  {
    bankCode: '15805810',
    bankName: '广州黄埔惠民村镇银行',
    patterns: [{ reg: /^(62127810)\d{10}$/g }],
  },
  {
    bankCode: '15805914',
    bankName: '雷州惠民村镇银行',
    patterns: [{ reg: /^(62127816)\d{10}$/g }],
  },
  {
    bankCode: '15805953',
    bankName: '惠东惠民村镇银行',
    patterns: [{ reg: /^(62127817)\d{10}$/g }],
  },
  {
    bankCode: '15805964',
    bankName: '五华惠民村镇银行',
    patterns: [{ reg: /^(62127812)\d{10}$/g }],
  },
  {
    bankCode: '15806017',
    bankName: '清远清新惠民村镇银行',
    patterns: [{ reg: /^(62127815)\d{10}$/g }],
  },
  {
    bankCode: '15806063',
    bankName: '云安惠民村镇银行',
    patterns: [{ reg: /^(62127813)\d{10}$/g }],
  },
  {
    bankCode: '15806436',
    bankName: '陵水惠民村镇银行',
    patterns: [{ reg: /^(62127801)\d{10}$/g }],
  },
  {
    bankCode: '15806451',
    bankName: '三亚惠民村镇银行',
    patterns: [{ reg: /^(62127800)\d{10}$/g }],
  },
  {
    bankCode: '15807970',
    bankName: '合阳惠民村镇银行',
    patterns: [{ reg: /^(62127818)\d{10}$/g }],
  },
  {
    bankCode: '15821432',
    bankName: '青县青隆村镇银行',
    patterns: [{ reg: /^(62138402)\d{11}$/g }],
  },
  {
    bankCode: '15821447',
    bankName: '东光青隆村镇银行',
    patterns: [{ reg: /^(62138404)\d{11}$/g }],
  },
  {
    bankCode: '15821451',
    bankName: '黄骅青隆村镇银行',
    patterns: [{ reg: /^(62138403)\d{11}$/g }],
  },
  {
    bankCode: '15821454',
    bankName: '沧州市运河青隆村镇银行',
    patterns: [{ reg: /^(62138401)\d{11}$/g }],
  },
  {
    bankCode: '15824531',
    bankName: '桓台青隆村镇银行',
    patterns: [{ reg: /^(62138407)\d{11}$/g }],
  },
  {
    bankCode: '15824538',
    bankName: '山东周村青隆村镇银行',
    patterns: [{ reg: /^(62138405)\d{11}$/g }],
  },
  {
    bankCode: '15824614',
    bankName: '鱼台青隆村镇银行',
    patterns: [{ reg: /^(62138408)\d{11}$/g }],
  },
  {
    bankCode: '15824667',
    bankName: '山东邹平青隆村镇银行',
    patterns: [{ reg: /^(621384001)\d{10}$/g }],
  },
  {
    bankCode: '15824714',
    bankName: '莘县青隆村镇银行',
    patterns: [{ reg: /^(62138406)\d{11}$/g }],
  },
  {
    bankCode: '15824716',
    bankName: '东阿青隆村镇银行',
    patterns: [{ reg: /^(62138409)\d{11}$/g }],
  },
  {
    bankCode: '15824718',
    bankName: '高唐青隆村镇银行',
    patterns: [{ reg: /^(62138410)\d{11}$/g }],
  },
  {
    bankCode: '15834735',
    bankName: '山东莒南村镇银行',
    patterns: [{ reg: /^(621368001)\d{10}$/g }],
  },
  {
    bankCode: '15843061',
    bankName: '江苏海安盐海村镇银行',
    patterns: [{ reg: /^(621386002)\d{10}$/g }],
  },
  {
    bankCode: '15845013',
    bankName: '武陟射阳村镇银行',
    patterns: [{ reg: /^(621386001)\d{10}$/g }],
  },
  {
    bankCode: '15845014',
    bankName: '河南沁阳江南村镇银行',
    patterns: [{ reg: /^(621386003)\d{10}$/g }],
  },
  {
    bankCode: '15845016',
    bankName: '孟州射阳村镇银行',
    patterns: [{ reg: /^(621386004)\d{10}$/g }],
  },
  {
    bankCode: '15852252',
    bankName: '辽宁桓仁锦银村镇银行',
    patterns: [{ reg: /^(621699008)\d{10}$/g }],
  },
  {
    bankCode: '15852270',
    bankName: '锦州太和锦银村镇银行',
    patterns: [{ reg: /^(621699002)\d{10}$/g }],
  },
  {
    bankCode: '15852273',
    bankName: '辽宁北镇锦银村镇银行',
    patterns: [{ reg: /^(621699001)\d{10}$/g }],
  },
  {
    bankCode: '15852274',
    bankName: '辽宁黑山锦银村镇银行',
    patterns: [{ reg: /^(621699005)\d{10}$/g }],
  },
  {
    bankCode: '15852275',
    bankName: '辽宁义县锦银村镇银行',
    patterns: [{ reg: /^(621699003)\d{10}$/g }],
  },
  {
    bankCode: '15852344',
    bankName: '辽宁喀左锦银村镇银行',
    patterns: [{ reg: /^(621699006)\d{10}$/g }],
  },
  {
    bankCode: '15868841',
    bankName: '哈密天山村镇银行',
    patterns: [{ reg: /^(623601001)\d{10}$/g }],
  },
  {
    bankCode: '15873010',
    bankName: '南京浦口靖发村镇银行',
    patterns: [{ reg: /^(623604001)\d{10}$/g }],
  },
  {
    bankCode: '15884583',
    bankName: '山东临朐聚丰村镇银行',
    patterns: [{ reg: /^(623678353)\d{9}$/g }],
  },
  {
    bankCode: '15891243',
    bankName: '滦县中成村镇银行',
    patterns: [{ reg: /^(62360636)\d{11}$/g }],
  },
  {
    bankCode: '15891244',
    bankName: '滦南中成村镇银行',
    patterns: [{ reg: /^(62360637)\d{11}$/g }],
  },
  {
    bankCode: '15891351',
    bankName: '定州中成村镇银行',
    patterns: [{ reg: /^(62360634)\d{11}$/g }],
  },
  {
    bankCode: '15891352',
    bankName: '涿州中成村镇银行',
    patterns: [{ reg: /^(62360630)\d{11}$/g }],
  },
  {
    bankCode: '15891359',
    bankName: '望都中成村镇银行',
    patterns: [{ reg: /^(62360632)\d{11}$/g }],
  },
  {
    bankCode: '15891366',
    bankName: '高碑店中成村镇银行',
    patterns: [{ reg: /^(62360631)\d{11}$/g }],
  },
  {
    bankCode: '15891367',
    bankName: '曲阳中成村镇银行',
    patterns: [{ reg: /^(62360633)\d{11}$/g }],
  },
  {
    bankCode: '15891369',
    bankName: '安国中成村镇银行',
    patterns: [{ reg: /^(62360635)\d{11}$/g }],
  },
  {
    bankCode: '15891381',
    bankName: '宣化中成村镇银行',
    patterns: [{ reg: /^(62360638)\d{11}$/g }],
  },
  {
    bankCode: '15893044',
    bankName: '常州新北中成村镇银行',
    patterns: [{ reg: /^(62360602)\d{11}$/g }],
  },
  {
    bankCode: '15893115',
    bankName: '建湖中成村镇银行',
    patterns: [{ reg: /^(62360603)\d{11}$/g }],
  },
  {
    bankCode: '15893130',
    bankName: '扬州广陵中成村镇银行',
    patterns: [{ reg: /^(62360629)\d{11}$/g }],
  },
  {
    bankCode: '15893971',
    bankName: '惠安中成村镇银行',
    patterns: [{ reg: /^(62360625)\d{11}$/g }],
  },
  {
    bankCode: '15893997',
    bankName: '南靖中成村镇银行',
    patterns: [{ reg: /^(62360626)\d{11}$/g }],
  },
  {
    bankCode: '15894016',
    bankName: '浦城中成村镇银行',
    patterns: [{ reg: /^(62360628)\d{11}$/g }],
  },
  {
    bankCode: '15894054',
    bankName: '上杭中成村镇银行',
    patterns: [{ reg: /^(62360627)\d{11}$/g }],
  },
  {
    bankCode: '15894525',
    bankName: '青岛胶州中成村镇银行',
    patterns: [{ reg: /^(62360601)\d{11}$/g }],
  },
  {
    bankCode: '15894554',
    bankName: '东营河口中成村镇银行',
    patterns: [{ reg: /^(62360620)\d{11}$/g }],
  },
  {
    bankCode: '15894590',
    bankName: '奎文中成村镇银行',
    patterns: [{ reg: /^(62360622)\d{11}$/g }],
  },
  {
    bankCode: '15894622',
    bankName: '衮州中成村镇银行',
    patterns: [{ reg: /^(62360624)\d{11}$/g }],
  },
  {
    bankCode: '15894664',
    bankName: '无棣中成村镇银行',
    patterns: [{ reg: /^(62360623)\d{11}$/g }],
  },
  {
    bankCode: '15894791',
    bankName: '莱芜中成村镇银行',
    patterns: [{ reg: /^(62360621)\d{11}$/g }],
  },
  {
    bankCode: '15896555',
    bankName: '自贡中成村镇银行',
    patterns: [{ reg: /^(62360600)\d{11}$/g }],
  },
  {
    bankCode: '15896653',
    bankName: '犍为中成村镇银行',
    patterns: [{ reg: /^(62360607)\d{11}$/g }],
  },
  {
    bankCode: '15896664',
    bankName: '峨嵋山中成村镇银行',
    patterns: [{ reg: /^(62360608)\d{11}$/g }],
  },
  {
    bankCode: '15896715',
    bankName: '长宁中成村镇银行',
    patterns: [{ reg: /^(62360605)\d{11}$/g }],
  },
  {
    bankCode: '15896717',
    bankName: '筠连中成村镇银行',
    patterns: [{ reg: /^(62360604)\d{11}$/g }],
  },
  {
    bankCode: '15896734',
    bankName: '南部县中成村镇银行',
    patterns: [{ reg: /^(62360606)\d{11}$/g }],
  },
  {
    bankCode: '15896744',
    bankName: '南充嘉陵中成村镇银行',
    patterns: [{ reg: /^(62360609)\d{11}$/g }],
  },
  {
    bankCode: '15897310',
    bankName: '昆明马金铺中成村镇银行',
    patterns: [{ reg: /^(62360612)\d{11}$/g }],
  },
  {
    bankCode: '15897311',
    bankName: '昆明东川中成村镇银行',
    patterns: [{ reg: /^(62360613)\d{11}$/g }],
  },
  {
    bankCode: '15897316',
    bankName: '昆明石林中成村镇银行',
    patterns: [{ reg: /^(62360610)\d{11}$/g }],
  },
  {
    bankCode: '15897318',
    bankName: '昆明禄劝中成村镇银行',
    patterns: [{ reg: /^(62360614)\d{11}$/g }],
  },
  {
    bankCode: '15897319',
    bankName: '昆明寻甸中成村镇银行',
    patterns: [{ reg: /^(62360615)\d{11}$/g }],
  },
  {
    bankCode: '15897413',
    bankName: '玉溪澄江中成村镇银行',
    patterns: [{ reg: /^(62360616)\d{11}$/g }],
  },
  {
    bankCode: '15897511',
    bankName: '大理古城中成村镇银行',
    patterns: [{ reg: /^(62360611)\d{11}$/g }],
  },
  {
    bankCode: '15897561',
    bankName: '泸水中成村镇银行',
    patterns: [{ reg: /^(62360617)\d{11}$/g }],
  },
  {
    bankCode: '15898832',
    bankName: '鄯善中成村镇银行',
    patterns: [{ reg: /^(62360618)\d{11}$/g }],
  },
  {
    bankCode: '15899023',
    bankName: '富蕴中成村镇银行',
    patterns: [{ reg: /^(62360619)\d{11}$/g }],
  },
  {
    bankCode: '15915936',
    bankName: '德庆华润村镇银行',
    patterns: [{ reg: /^(623608001)\d{10}$/g }],
  },
  {
    bankCode: '15916260',
    bankName: '百色右江华润村镇银行',
    patterns: [{ reg: /^(623608002)\d{10}$/g }],
  },
  {
    bankCode: '15925852',
    bankName: '珠海横琴村镇银行',
    patterns: [{ reg: /^(62350801)\d{11}$/g }],
  },
  {
    bankCode: '15933032',
    bankName: '江苏沛县汉源村镇银行',
    patterns: [{ reg: /^(623609001)\d{10}$/g }],
  },
  {
    bankCode: '15933036',
    bankName: '江苏新沂汉源村镇银行',
    patterns: [{ reg: /^(623609002)\d{10}$/g }],
  },
  {
    bankCode: '15947916',
    bankName: '西安高陵阳光村镇银行',
    patterns: [{ reg: /^(62361026)\d{10}$/g }],
  },
  {
    bankCode: '15947916',
    bankName: '西安高陵阳光村镇银行',
    patterns: [{ reg: /^(62361027)\d{10}$/g }],
  },
  {
    bankCode: '15948032',
    bankName: '陕西洛南阳光村镇银行',
    patterns: [{ reg: /^(62361025)\d{10}$/g }],
  },
  {
    bankCode: '15948032',
    bankName: '陕西洛南阳光村镇银行',
    patterns: [{ reg: /^(62361028)\d{10}$/g }],
  },
  {
    bankCode: '15953435',
    bankName: '浙江缙云联合村镇银行',
    patterns: [{ reg: /^(623502001)\d{9}$/g }],
  },
  {
    bankCode: '15953435',
    bankName: '浙江缙云杭银村镇银行',
    patterns: [{ reg: /^(62109216)\d{11}$/g }],
  },
  {
    bankCode: '15963035',
    bankName: '江苏邳州陇海村镇银行股份有限公',
    patterns: [{ reg: /^(623512001)\d{10}$/g }],
  },
  {
    bankCode: '15976426',
    bankName: '定安合丰村镇银行',
    patterns: [{ reg: /^(623045001)\d{10}$/g }],
  },
  {
    bankCode: '15991214',
    bankName: '石家庄栾城齐鲁村镇银行',
    patterns: [{ reg: /^(623607012)\d{10}$/g }],
  },
  {
    bankCode: '15991221',
    bankName: '辛集齐鲁村镇银行',
    patterns: [{ reg: /^(623607006)\d{10}$/g }],
  },
  {
    bankCode: '15991271',
    bankName: '邯郸邯山齐鲁村镇银行',
    patterns: [{ reg: /^(623607014)\d{10}$/g }],
  },
  {
    bankCode: '15991282',
    bankName: '魏县齐鲁村镇银行',
    patterns: [{ reg: /^(623607015)\d{10}$/g }],
  },
  {
    bankCode: '15991288',
    bankName: '成安齐鲁村镇银行',
    patterns: [{ reg: /^(623607011)\d{10}$/g }],
  },
  {
    bankCode: '15991291',
    bankName: '磁县齐鲁村镇银行',
    patterns: [{ reg: /^(623607008)\d{10}$/g }],
  },
  {
    bankCode: '15991292',
    bankName: '涉县齐鲁村镇银行',
    patterns: [{ reg: /^(623607013)\d{10}$/g }],
  },
  {
    bankCode: '15991293',
    bankName: '邯郸永年齐鲁村镇银行',
    patterns: [{ reg: /^(623607007)\d{10}$/g }],
  },
  {
    bankCode: '15994915',
    bankName: '登封齐鲁村镇银行',
    patterns: [{ reg: /^(623607002)\d{10}$/g }],
  },
  {
    bankCode: '15994925',
    bankName: '兰考齐鲁村镇银行',
    patterns: [{ reg: /^(623607003)\d{10}$/g }],
  },
  {
    bankCode: '15994939',
    bankName: '伊川齐鲁村镇银行',
    patterns: [{ reg: /^(623607004)\d{10}$/g }],
  },
  {
    bankCode: '15995015',
    bankName: '温县齐鲁村镇银行',
    patterns: [{ reg: /^(623607010)\d{10}$/g }],
  },
  {
    bankCode: '15995017',
    bankName: '济源齐鲁村镇银行',
    patterns: [{ reg: /^(623607001)\d{10}$/g }],
  },
  {
    bankCode: '15995051',
    bankName: '渑池齐鲁村镇银行',
    patterns: [{ reg: /^(623607005)\d{10}$/g }],
  },
  {
    bankCode: '15995069',
    bankName: '永城齐鲁村镇银行',
    patterns: [{ reg: /^(623607009)\d{10}$/g }],
  },
  {
    bankCode: '16003326',
    bankName: '奉化罗蒙村镇银行',
    patterns: [{ reg: /^(623522001)\d{10}$/g }],
  },
  {
    bankCode: '16011127',
    bankName: '天津滨海德商村镇银行',
    patterns: [{ reg: /^(623504010)\d{10}$/g }],
  },
  {
    bankCode: '16013144',
    bankName: '江苏丹阳保得村镇银行',
    patterns: [{ reg: /^(62351501)\d{11}$/g }],
  },
  {
    bankCode: '16013310',
    bankName: '余杭德商村镇银行',
    patterns: [{ reg: /^(623504002)\d{10}$/g }],
  },
  {
    bankCode: '16013355',
    bankName: '海宁德商村镇银行',
    patterns: [{ reg: /^(623504008)\d{10}$/g }],
  },
  {
    bankCode: '16013356',
    bankName: '浙江秀洲德商村镇银行',
    patterns: [{ reg: /^(623504004)\d{10}$/g }],
  },
  {
    bankCode: '16013423',
    bankName: '浙江定海德商村镇银行',
    patterns: [{ reg: /^(623504009)\d{10}$/g }],
  },
  {
    bankCode: '16015023',
    bankName: '范县德商村镇银行',
    patterns: [{ reg: /^(623504001)\d{10}$/g }],
  },
  {
    bankCode: '16015024',
    bankName: '台前德商村镇银行',
    patterns: [{ reg: /^(623504005)\d{10}$/g }],
  },
  {
    bankCode: '16015035',
    bankName: '襄城汇浦村镇银行',
    patterns: [{ reg: /^(623517001)\d{10}$/g }],
  },
  {
    bankCode: '16015064',
    bankName: '民权德商村镇银行',
    patterns: [{ reg: /^(623504003)\d{10}$/g }],
  },
  {
    bankCode: '16015065',
    bankName: '宁陵德商村镇银行',
    patterns: [{ reg: /^(623504006)\d{10}$/g }],
  },
  {
    bankCode: '16015066',
    bankName: '睢县德商村镇银行',
    patterns: [{ reg: /^(623504007)\d{10}$/g }],
  },
  {
    bankCode: '16023010',
    bankName: '江苏溧水民丰村镇银行',
    patterns: [{ reg: /^(62168305)\d{11}$/g }],
  },
  {
    bankCode: '16023031',
    bankName: '江苏丰县民丰村镇银行',
    patterns: [{ reg: /^(62168301)\d{11}$/g }],
  },
  {
    bankCode: '16023073',
    bankName: '江苏灌云民丰村镇银行',
    patterns: [{ reg: /^(62168304)\d{11}$/g }],
  },
  {
    bankCode: '16023074',
    bankName: '江苏灌南民丰村镇银行',
    patterns: [{ reg: /^(62168302)\d{11}$/g }],
  },
  {
    bankCode: '16023686',
    bankName: '安徽宿松民丰村镇银行',
    patterns: [{ reg: /^(62168309)\d{11}$/g }],
  },
  {
    bankCode: '16023757',
    bankName: '安徽明光民丰村镇银行',
    patterns: [{ reg: /^(62168308)\d{11}$/g }],
  },
  {
    bankCode: '16024621',
    bankName: '山东梁山民丰村镇银行',
    patterns: [{ reg: /^(62168306)\d{11}$/g }],
  },
  {
    bankCode: '16024632',
    bankName: '山东肥城民丰村镇银行',
    patterns: [{ reg: /^(62168303)\d{11}$/g }],
  },
  {
    bankCode: '16024744',
    bankName: '临沭民丰村镇银行',
    patterns: [{ reg: /^(62168307)\d{11}$/g }],
  },
  {
    bankCode: '16038349',
    bankName: '庆阳市西峰瑞信村镇银行',
    patterns: [{ reg: /^(623519533)\d{9}$/g }],
  },
  {
    bankCode: '16041212',
    bankName: '鹿泉恒升村镇银行',
    patterns: [{ reg: /^(623525003)\d{10}$/g }],
  },
  {
    bankCode: '16041213',
    bankName: '正定恒升村镇银行',
    patterns: [{ reg: /^(623525004)\d{10}$/g }],
  },
  {
    bankCode: '16041222',
    bankName: '晋州恒升村镇银行',
    patterns: [{ reg: /^(623525005)\d{10}$/g }],
  },
  {
    bankCode: '16041225',
    bankName: '藁城恒升村镇银行',
    patterns: [{ reg: /^(623525006)\d{10}$/g }],
  },
  {
    bankCode: '16043334',
    bankName: '浙江永嘉恒升村镇银行',
    patterns: [{ reg: /^(62352501)\d{11}$/g }],
  },
  {
    bankCode: '16043459',
    bankName: '浙江台州黄岩恒升村镇银行',
    patterns: [{ reg: /^(623525002)\d{10}$/g }],
  },
  {
    bankCode: '16047119',
    bankName: '关岭恒升村镇银行',
    patterns: [{ reg: /^(623525008)\d{10}$/g }],
  },
  {
    bankCode: '16047153',
    bankName: '贵定恒生村镇银行',
    patterns: [{ reg: /^(623525007)\d{10}$/g }],
  },
  {
    bankCode: '16047162',
    bankName: '惠水恒升村镇银行',
    patterns: [{ reg: /^(623525001)\d{10}$/g }],
  },
  {
    bankCode: '16087014',
    bankName: '清镇兴邦村镇银行',
    patterns: [{ reg: /^(62352739)\d{10}$/g }],
  },
  {
    bankCode: '16087023',
    bankName: '六盘水钟山凉都村镇银行',
    patterns: [{ reg: /^(62352760)\d{10}$/g }],
  },
  {
    bankCode: '16087032',
    bankName: '遵义播州汇隆村镇银行',
    patterns: [{ reg: /^(62352755)\d{10}$/g }],
  },
  {
    bankCode: '16087046',
    bankName: '遵义汇川黔兴村镇银行',
    patterns: [{ reg: /^(62352733)\d{10}$/g }],
  },
  {
    bankCode: '16087081',
    bankName: '贵阳白云德信村镇银行',
    patterns: [{ reg: /^(62352759)\d{10}$/g }],
  },
  {
    bankCode: '16087117',
    bankName: '平坝鼎立村镇银行',
    patterns: [{ reg: /^(62352737)\d{10}$/g }],
  },
  {
    bankCode: '16087123',
    bankName: '安顺西航南马村镇银行',
    patterns: [{ reg: /^(62352784)\d{10}$/g }],
  },
  {
    bankCode: '16087131',
    bankName: '凯里东南村镇银行',
    patterns: [{ reg: /^(62352702)\d{11}$/g }],
  },
  {
    bankCode: '16091424',
    bankName: '滦平盛阳村镇银行',
    patterns: [{ reg: /^(623530963)\d{9}$/g }],
  },
  {
    bankCode: '16091464',
    bankName: '香河益民村镇银行',
    patterns: [{ reg: /^(623530953)\d{9}$/g }],
  },
  {
    bankCode: '16103087',
    bankName: '江苏洪泽金阳光村镇银行',
    patterns: [{ reg: /^(623532001)\d{10}$/g }],
  },
  {
    bankCode: '16113324',
    bankName: '余姚通济村镇银行',
    patterns: [{ reg: /^(623145001)\d{10}$/g }],
  },
  {
    bankCode: '16122321',
    bankName: '大洼恒丰村镇银行',
    patterns: [{ reg: /^(62314061)\d{10}$/g }],
  },
  {
    bankCode: '16122322',
    bankName: '盘山安泰村镇银行股份有限公司',
    patterns: [{ reg: /^(62314062)\d{10}$/g }],
  },
  {
    bankCode: '16133434',
    bankName: '浙江庆元泰隆村镇银行',
    patterns: [{ reg: /^(623535002)\d{7}$/g }],
  },
  {
    bankCode: '16135221',
    bankName: '湖北大冶泰隆村镇银行',
    patterns: [{ reg: /^(623535001)\d{7}$/g }],
  },
  {
    bankCode: '16153414',
    bankName: '浙江龙游义商村镇银行',
    patterns: [{ reg: /^(623538001)\d{10}$/g }],
  },
  {
    bankCode: '16171223',
    bankName: '深泽利丰村镇银行',
    patterns: [{ reg: /^(62314911)\d{11}$/g }],
  },
  {
    bankCode: '16171234',
    bankName: '行唐利丰村镇银行',
    patterns: [{ reg: /^(62314907)\d{11}$/g }],
  },
  {
    bankCode: '16171341',
    bankName: '保定满城区利丰村镇银行',
    patterns: [{ reg: /^(62314903)\d{11}$/g }],
  },
  {
    bankCode: '16171361',
    bankName: '涞水利丰村镇银行',
    patterns: [{ reg: /^(62314906)\d{11}$/g }],
  },
  {
    bankCode: '16171399',
    bankName: '怀来利丰村镇银行',
    patterns: [{ reg: /^(62314909)\d{11}$/g }],
  },
  {
    bankCode: '16171401',
    bankName: '涿鹿利丰村镇银行',
    patterns: [{ reg: /^(62314902)\d{11}$/g }],
  },
  {
    bankCode: '16174911',
    bankName: '荥阳利丰村镇银行',
    patterns: [{ reg: /^(62314901)\d{11}$/g }],
  },
  {
    bankCode: '16178811',
    bankName: '乌鲁木齐县利丰村镇银行',
    patterns: [{ reg: /^(62314910)\d{11}$/g }],
  },
  {
    bankCode: '16178855',
    bankName: '奇台利丰村镇银行',
    patterns: [{ reg: /^(62314908)\d{11}$/g }],
  },
  {
    bankCode: '16179013',
    bankName: '乌苏利丰村镇银行',
    patterns: [{ reg: /^(62314905)\d{11}$/g }],
  },
  {
    bankCode: '16184956',
    bankName: '汝州玉川村镇银行',
    patterns: [{ reg: /^(62355001)\d{10}$/g }],
  },
  {
    bankCode: '16194533',
    bankName: '沂源博商村镇银行',
    patterns: [{ reg: /^(62355358)\d{10}$/g }],
  },
  {
    bankCode: '16201000',
    bankName: '北京大兴华夏村镇银行',
    patterns: [{ reg: /^(62355701)\d{8}$/g }],
  },
  {
    bankCode: '16206597',
    bankName: '四川江油华夏村镇银行',
    patterns: [{ reg: /^(62355702)\d{8}$/g }],
  },
  {
    bankCode: '16207321',
    bankName: '昆明呈贡华夏村镇银行',
    patterns: [{ reg: /^(62355703)\d{8}$/g }],
  },
  {
    bankCode: '16212904',
    bankName: '上海浦东恒通村镇银行',
    patterns: [{ reg: /^(623558617)\d{10}$/g }],
  },
  {
    bankCode: '16213312',
    bankName: '浙江富阳恒通村镇银行',
    patterns: [{ reg: /^(623558618)\d{10}$/g }],
  },
  {
    bankCode: '16213437',
    bankName: '浙江松阳恒通村镇银行',
    patterns: [{ reg: /^(62355865)\d{10}$/g }],
  },
  {
    bankCode: '16214212',
    bankName: '南昌新建恒通村镇银行',
    patterns: [{ reg: /^(623558621)\d{10}$/g }],
  },
  {
    bankCode: '16214241',
    bankName: '九江恒通村镇银行',
    patterns: [{ reg: /^(623558615)\d{10}$/g }],
  },
  {
    bankCode: '16214243',
    bankName: '武宁恒通村镇银行',
    patterns: [{ reg: /^(623558622)\d{10}$/g }],
  },
  {
    bankCode: '16214273',
    bankName: '鹰潭月湖恒通村镇银行',
    patterns: [{ reg: /^(623558611)\d{10}$/g }],
  },
  {
    bankCode: '16214336',
    bankName: '横峰恒通村镇银行',
    patterns: [{ reg: /^(623558616)\d{10}$/g }],
  },
  {
    bankCode: '16214338',
    bankName: '余干恒通村镇银行',
    patterns: [{ reg: /^(623558612)\d{10}$/g }],
  },
  {
    bankCode: '16214339',
    bankName: '鄱阳恒通村镇银行',
    patterns: [{ reg: /^(623558613)\d{10}$/g }],
  },
  {
    bankCode: '16217923',
    bankName: '铜川印台恒通村镇银行',
    patterns: [{ reg: /^(623558620)\d{10}$/g }],
  },
  {
    bankCode: '16218082',
    bankName: '西安雁塔恒通村镇银行',
    patterns: [{ reg: /^(623558619)\d{10}$/g }],
  },
  {
    bankCode: '16221615',
    bankName: '太原市尖草坪区信都村镇银行',
    patterns: [{ reg: /^(62357012)\d{11}$/g }],
  },
  {
    bankCode: '16221631',
    bankName: '阳高县兴都村镇银行',
    patterns: [{ reg: /^(62357017)\d{11}$/g }],
  },
  {
    bankCode: '16221638',
    bankName: '大同市南郊区京都村镇银行',
    patterns: [{ reg: /^(62357009)\d{11}$/g }],
  },
  {
    bankCode: '16221651',
    bankName: '平定县昌都村镇银行',
    patterns: [{ reg: /^(62357022)\d{11}$/g }],
  },
  {
    bankCode: '16221661',
    bankName: '长治县泰都村镇银行',
    patterns: [{ reg: /^(62357021)\d{11}$/g }],
  },
  {
    bankCode: '16221669',
    bankName: '武乡县泽都村镇银行',
    patterns: [{ reg: /^(62357015)\d{11}$/g }],
  },
  {
    bankCode: '16221692',
    bankName: '应县金都村镇银行',
    patterns: [{ reg: /^(62357013)\d{11}$/g }],
  },
  {
    bankCode: '16221715',
    bankName: '代县泓都村镇银行',
    patterns: [{ reg: /^(62357010)\d{11}$/g }],
  },
  {
    bankCode: '16221717',
    bankName: '宁武县瑞都村镇银行',
    patterns: [{ reg: /^(62357014)\d{11}$/g }],
  },
  {
    bankCode: '16221726',
    bankName: '忻州市忻府区秀都村镇银行',
    patterns: [{ reg: /^(62357006)\d{11}$/g }],
  },
  {
    bankCode: '16221731',
    bankName: '汾阳市九都村镇银行有限公司',
    patterns: [{ reg: /^(62357002)\d{11}$/g }],
  },
  {
    bankCode: '16221732',
    bankName: '文水县润都村镇银行',
    patterns: [{ reg: /^(62357008)\d{11}$/g }],
  },
  {
    bankCode: '16221736',
    bankName: '临县泉都村镇银行',
    patterns: [{ reg: /^(62357011)\d{11}$/g }],
  },
  {
    bankCode: '16221744',
    bankName: '交口融都村镇银行',
    patterns: [{ reg: /^(62357007)\d{11}$/g }],
  },
  {
    bankCode: '16221754',
    bankName: '和顺县贵都村镇银行',
    patterns: [{ reg: /^(62357016)\d{11}$/g }],
  },
  {
    bankCode: '16221756',
    bankName: '寿阳县汇都村镇银行',
    patterns: [{ reg: /^(62357004)\d{11}$/g }],
  },
  {
    bankCode: '16221761',
    bankName: '介休市华都村镇银行',
    patterns: [{ reg: /^(62357003)\d{11}$/g }],
  },
  {
    bankCode: '16221771',
    bankName: '临汾市尧都区惠都村镇银行',
    patterns: [{ reg: /^(62357018)\d{11}$/g }],
  },
  {
    bankCode: '16221775',
    bankName: '襄汾万都村镇银行',
    patterns: [{ reg: /^(62357001)\d{11}$/g }],
  },
  {
    bankCode: '16221776',
    bankName: '洪洞县洪都村镇银行',
    patterns: [{ reg: /^(62357005)\d{11}$/g }],
  },
  {
    bankCode: '16221818',
    bankName: '河津市龙都村镇银行',
    patterns: [{ reg: /^(62357019)\d{11}$/g }],
  },
  {
    bankCode: '16234553',
    bankName: '广饶梁邹村镇银行',
    patterns: [{ reg: /^(62358421)\d{10}$/g }],
  },
  {
    bankCode: '16234742',
    bankName: '费县梁邹村镇银行',
    patterns: [{ reg: /^(62359430)\d{10}$/g }],
  },
  {
    bankCode: '16242231',
    bankName: '辽宁台安金安村镇银行',
    patterns: [{ reg: /^(62368004)\d{10}$/g }],
  },
  {
    bankCode: '16242232',
    bankName: '辽宁海城金海村镇银行',
    patterns: [{ reg: /^(62368001)\d{10}$/g }],
  },
  {
    bankCode: '16242233',
    bankName: '辽宁岫岩金玉村镇银行',
    patterns: [{ reg: /^(62368002)\d{10}$/g }],
  },
  {
    bankCode: '16242237',
    bankName: '辽宁千山金泉村镇银行',
    patterns: [{ reg: /^(62368003)\d{10}$/g }],
  },
  {
    bankCode: '16264954',
    bankName: '郏县广天村镇银行',
    patterns: [{ reg: /^(62314701)\d{11}$/g }],
  },
  {
    bankCode: '16308751',
    bankName: '宁夏中宁青银村镇银行',
    patterns: [{ reg: /^(62358101)\d{11}$/g }],
  },
  {
    bankCode: '16313373',
    bankName: '浙江嵊州瑞丰村镇银行',
    patterns: [{ reg: /^(623580001)\d{10}$/g }],
  },
  {
    bankCode: '16323458',
    bankName: '浙江玉环永兴村镇银行',
    patterns: [{ reg: /^(623579001)\d{10}$/g }],
  },
  {
    bankCode: '16332361',
    bankName: '绥中长丰村镇银行',
    patterns: [{ reg: /^(62358303)\d{11}$/g }],
  },
  {
    bankCode: '16332362',
    bankName: '建昌恒昌村镇银行',
    patterns: [{ reg: /^(62358301)\d{11}$/g }],
  },
  {
    bankCode: '16332363',
    bankName: '兴城长兴村镇银行',
    patterns: [{ reg: /^(62358302)\d{11}$/g }],
  },
  {
    bankCode: '16342330',
    bankName: '铁岭新星村镇银行',
    patterns: [{ reg: /^(62358563)\d{10}$/g }],
  },
  {
    bankCode: '16353624',
    bankName: '无为徽银村镇银行',
    patterns: [{ reg: /^(623587001)\d{10}$/g }],
  },
  {
    bankCode: '16353766',
    bankName: '金寨徽银村镇银行',
    patterns: [{ reg: /^(623587002)\d{10}$/g }],
  },
  {
    bankCode: '16362336',
    bankName: '调兵山惠民村镇银行',
    patterns: [{ reg: /^(62359065)\d{10}$/g }],
  },
  {
    bankCode: '16372223',
    bankName: '庄河汇通村镇银行',
    patterns: [{ reg: /^(62361702)\d{11}$/g }],
  },
  {
    bankCode: '16372371',
    bankName: '大连经济技术开发区鑫汇村镇银行',
    patterns: [{ reg: /^(62361703)\d{11}$/g }],
  },
  {
    bankCode: '16376841',
    bankName: '西昌金信村镇银行',
    patterns: [{ reg: /^(62361701)\d{11}$/g }],
  },
  {
    bankCode: '16393067',
    bankName: '江苏通州华商村镇银行',
    patterns: [{ reg: /^(621389)\d{13}$/g }],
  },
  {
    bankCode: '16401245',
    bankName: '乐亭舜丰村镇银行',
    patterns: [{ reg: /^(62359364)\d{10}$/g }],
  },
  {
    bankCode: '16401251',
    bankName: '唐山市丰南舜丰村镇银行',
    patterns: [{ reg: /^(62359354)\d{10}$/g }],
  },
  {
    bankCode: '16401465',
    bankName: '大城舜丰村镇银行',
    patterns: [{ reg: /^(62359356)\d{10}$/g }],
  },
  {
    bankCode: '16401467',
    bankName: '霸州舜丰村镇银行',
    patterns: [{ reg: /^(62359350)\d{10}$/g }],
  },
  {
    bankCode: '16401471',
    bankName: '广阳舜丰村镇银行',
    patterns: [{ reg: /^(62359353)\d{10}$/g }],
  },
  {
    bankCode: '16404527',
    bankName: '青岛黄岛舜丰村镇银行',
    patterns: [{ reg: /^(62359329)\d{10}$/g }],
  },
  {
    bankCode: '16404552',
    bankName: '山东利津舜丰村镇银行',
    patterns: [{ reg: /^(62359349)\d{10}$/g }],
  },
  {
    bankCode: '16404662',
    bankName: '山东惠民舜丰村镇银行',
    patterns: [{ reg: /^(62359351)\d{10}$/g }],
  },
  {
    bankCode: '16415222',
    bankName: '阳新汉银村镇银行',
    patterns: [{ reg: /^(62143801)\d{11}$/g }],
  },
  {
    bankCode: '16415264',
    bankName: '枝江汉银村镇银行',
    patterns: [{ reg: /^(62143802)\d{11}$/g }],
  },
  {
    bankCode: '16427093',
    bankName: '黔西花都村镇银行',
    patterns: [{ reg: /^(62144735)\d{10}$/g }],
  },
  {
    bankCode: '16436030',
    bankName: '中山古镇南粤村镇银行',
    patterns: [{ reg: /^(62006401)\d{11}$/g }],
  },
  {
    bankCode: '16441229',
    bankName: '元氏信融村镇银行',
    patterns: [{ reg: /^(621658001)\d{10}$/g }],
  },
  {
    bankCode: '16441229',
    bankName: '元氏信融村镇银行',
    patterns: [{ reg: /^(62165826)\d{10}$/g }],
  },
  {
    bankCode: '16462347',
    bankName: '朝阳柳城村镇银行',
    patterns: [{ reg: /^(62300401)\d{11}$/g }],
  },
  {
    bankCode: '16497013',
    bankName: '修文江海村镇银行',
    patterns: [{ reg: /^(62310402)\d{11}$/g }],
  },
  {
    bankCode: '16497018',
    bankName: '贵阳小河科技村镇银行',
    patterns: [{ reg: /^(62310401)\d{11}$/g }],
  },
  {
    bankCode: '16503143',
    bankName: '扬中恒丰村镇银行',
    patterns: [{ reg: /^(62312405)\d{8}$/g }],
  },
  {
    bankCode: '16503311',
    bankName: '浙江桐庐恒丰村镇银行',
    patterns: [{ reg: /^(62312401)\d{8}$/g }],
  },
  {
    bankCode: '16506695',
    bankName: '广安恒丰村镇银行',
    patterns: [{ reg: /^(62312406)\d{8}$/g }],
  },
  {
    bankCode: '16506928',
    bankName: '重庆云阳恒丰村镇银行',
    patterns: [{ reg: /^(62312402)\d{8}$/g }],
  },
  {
    bankCode: '16506938',
    bankName: '重庆江北恒丰村镇银行',
    patterns: [{ reg: /^(62312403)\d{8}$/g }],
  },
  {
    bankCode: '16512906',
    bankName: '上海闵行上银村镇银行',
    patterns: [{ reg: /^(62361345)\d{10}$/g }],
  },
  {
    bankCode: '16513416',
    bankName: '浙江衢州衢江上银村镇银行',
    patterns: [{ reg: /^(62361346)\d{10}$/g }],
  },
  {
    bankCode: '16516517',
    bankName: '崇州上银村镇银行',
    patterns: [{ reg: /^(62361347)\d{10}$/g }],
  },
  {
    bankCode: '16524551',
    bankName: '垦利乐安村镇银行',
    patterns: [{ reg: /^(62314292)\d{10}$/g }],
  },
  {
    bankCode: '16524568',
    bankName: '莱阳胶东村镇银行',
    patterns: [{ reg: /^(62361528)\d{10}$/g }],
  },
  {
    bankCode: '16524571',
    bankName: '牟平胶东村镇银行',
    patterns: [{ reg: /^(62361527)\d{10}$/g }],
  },
  {
    bankCode: '16524685',
    bankName: '夏津胶东村镇银行',
    patterns: [{ reg: /^(62361523)\d{10}$/g }],
  },
  {
    bankCode: '16524687',
    bankName: '齐河胶东村镇银行',
    patterns: [{ reg: /^(62361522)\d{10}$/g }],
  },
  {
    bankCode: '16524688',
    bankName: '禹城胶东村镇银行',
    patterns: [{ reg: /^(62361525)\d{10}$/g }],
  },
  {
    bankCode: '16524693',
    bankName: '宁津胶东村镇银行',
    patterns: [{ reg: /^(62361526)\d{10}$/g }],
  },
  {
    bankCode: '16535032',
    bankName: '许昌新浦村镇银行',
    patterns: [{ reg: /^(623194773)\d{9}$/g }],
  },
  {
    bankCode: '16541918',
    bankName: '呼和浩特市赛罕金谷村镇银行',
    patterns: [{ reg: /^(62364201)\d{11}$/g }],
  },
  {
    bankCode: '16551445',
    bankName: '献县融和村镇银行',
    patterns: [{ reg: /^(623626706)\d{10}$/g }],
  },
  {
    bankCode: '16554555',
    bankName: '东营融和村镇银行',
    patterns: [{ reg: /^(623626704)\d{10}$/g }],
  },
  {
    bankCode: '16561000',
    bankName: '北京昌平包商村镇银行',
    patterns: [{ reg: /^(621382076)\d{10}$/g }],
  },
  {
    bankCode: '16561100',
    bankName: '天津津南村镇银行',
    patterns: [{ reg: /^(621382070)\d{10}$/g }],
  },
  {
    bankCode: '16561611',
    bankName: '清徐惠民村镇银行',
    patterns: [{ reg: /^(621382053)\d{10}$/g }],
  },
  {
    bankCode: '16561914',
    bankName: '内蒙古和林格尔包商村镇银行',
    patterns: [{ reg: /^(621382077)\d{10}$/g }],
  },
  {
    bankCode: '16561922',
    bankName: '固阳包商村镇银行',
    patterns: [{ reg: /^(621382066)\d{10}$/g }],
  },
  {
    bankCode: '16561923',
    bankName: '达尔罕茂明安联合旗包商村镇银行',
    patterns: [{ reg: /^(621382078)\d{10}$/g }],
  },
  {
    bankCode: '16561948',
    bankName: '宁城包商村镇银行',
    patterns: [{ reg: /^(621382063)\d{10}$/g }],
  },
  {
    bankCode: '16561966',
    bankName: '莫力达瓦包商村镇银行',
    patterns: [{ reg: /^(621382052)\d{10}$/g }],
  },
  {
    bankCode: '16561971',
    bankName: '鄂温克包商村镇银行',
    patterns: [{ reg: /^(621382068)\d{10}$/g }],
  },
  {
    bankCode: '16561982',
    bankName: '科尔沁包商村镇银行',
    patterns: [{ reg: /^(621382074)\d{10}$/g }],
  },
  {
    bankCode: '16562017',
    bankName: '西乌珠穆沁包商惠丰村镇银行',
    patterns: [{ reg: /^(621382051)\d{10}$/g }],
  },
  {
    bankCode: '16562031',
    bankName: '集宁包闹村镇银行',
    patterns: [{ reg: /^(621382057)\d{10}$/g }],
  },
  {
    bankCode: '16562036',
    bankName: '化德包商村镇银行',
    patterns: [{ reg: /^(621382058)\d{10}$/g }],
  },
  {
    bankCode: '16562038',
    bankName: '兴和包商村镇银行',
    patterns: [{ reg: /^(621382080)\d{10}$/g }],
  },
  {
    bankCode: '16562053',
    bankName: '准格尔旗包商村镇银行',
    patterns: [{ reg: /^(621382061)\d{10}$/g }],
  },
  {
    bankCode: '16562056',
    bankName: '乌审旗包商村镇银行',
    patterns: [{ reg: /^(621382062)\d{10}$/g }],
  },
  {
    bankCode: '16562371',
    bankName: '大连金州联丰村镇银行',
    patterns: [{ reg: /^(621382067)\d{10}$/g }],
  },
  {
    bankCode: '16562415',
    bankName: '九台龙嘉村镇银行',
    patterns: [{ reg: /^(621382060)\d{10}$/g }],
  },
  {
    bankCode: '16563062',
    bankName: '江苏南通如皋包商村镇银行',
    patterns: [{ reg: /^(621382072)\d{10}$/g }],
  },
  {
    bankCode: '16563129',
    bankName: '仪征包商村镇银行',
    patterns: [{ reg: /^(621382064)\d{10}$/g }],
  },
  {
    bankCode: '16564759',
    bankName: '鄄城包商村镇银行',
    patterns: [{ reg: /^(621382056)\d{10}$/g }],
  },
  {
    bankCode: '16565040',
    bankName: '漯河市郾城包商村镇银行',
    patterns: [{ reg: /^(621382050)\d{10}$/g }],
  },
  {
    bankCode: '16565320',
    bankName: '掇刀包商村镇银行',
    patterns: [{ reg: /^(621382075)\d{10}$/g }],
  },
  {
    bankCode: '16565556',
    bankName: '武冈包商村镇银行',
    patterns: [{ reg: /^(621382073)\d{10}$/g }],
  },
  {
    bankCode: '16566510',
    bankName: '新都桂城村镇银行',
    patterns: [{ reg: /^(621382069)\d{10}$/g }],
  },
  {
    bankCode: '16566610',
    bankName: '广元包商贵民村镇银行',
    patterns: [{ reg: /^(621382071)\d{10}$/g }],
  },
  {
    bankCode: '16567010',
    bankName: '贵阳花溪建设村镇银行',
    patterns: [{ reg: /^(621382054)\d{10}$/g }],
  },
  {
    bankCode: '16567012',
    bankName: '息烽包商黔隆村镇银行',
    patterns: [{ reg: /^(621382065)\d{10}$/g }],
  },
  {
    bankCode: '16567090',
    bankName: '毕节发展村镇银行',
    patterns: [{ reg: /^(621382059)\d{10}$/g }],
  },
  {
    bankCode: '16568712',
    bankName: '宁夏贺兰回商村镇银行',
    patterns: [{ reg: /^(621382055)\d{10}$/g }],
  },
  {
    bankCode: '16573384',
    bankName: '浙江浦江嘉银村镇银行',
    patterns: [{ reg: /^(62363585)\d{10}$/g }],
  },
  {
    bankCode: '16586429',
    bankName: '临高惠丰村镇银行',
    patterns: [{ reg: /^(62363440)\d{10}$/g }],
  },
  {
    bankCode: '16586434',
    bankName: '东方惠丰村镇银行',
    patterns: [{ reg: /^(62363441)\d{10}$/g }],
  },
  {
    bankCode: '16586435',
    bankName: '乐东惠丰村镇银行',
    patterns: [{ reg: /^(62363442)\d{10}$/g }],
  },
  {
    bankCode: '16591635',
    bankName: '浑源县慧融村镇银行',
    patterns: [{ reg: /^(62361902)\d{11}$/g }],
  },
  {
    bankCode: '16591694',
    bankName: '怀仁县惠融村镇银行',
    patterns: [{ reg: /^(62361901)\d{11}$/g }],
  },
  {
    bankCode: '16591724',
    bankName: '保德县慧融村镇银行',
    patterns: [{ reg: /^(62361912)\d{10}$/g }],
  },
  {
    bankCode: '16591739',
    bankName: '岚县慧融村镇银行',
    patterns: [{ reg: /^(62361982)\d{10}$/g }],
  },
  {
    bankCode: '16604736',
    bankName: '临沂河东齐商村镇银行',
    patterns: [{ reg: /^(62362401)\d{11}$/g }],
  },
  {
    bankCode: '16611028',
    bankName: '北京延庆村镇银行',
    patterns: [{ reg: /^(62365003)\d{11}$/g }],
  },
  {
    bankCode: '16612412',
    bankName: '农安北银村镇银行',
    patterns: [{ reg: /^(62365002)\d{11}$/g }],
  },
  {
    bankCode: '16613337',
    bankName: '浙江文成北银村镇银行',
    patterns: [{ reg: /^(62365001)\d{11}$/g }],
  },
  {
    bankCode: '16631716',
    bankName: '繁峙县新田村镇银行',
    patterns: [{ reg: /^(62359602)\d{11}$/g }],
  },
  {
    bankCode: '16631773',
    bankName: '曲沃县新田村镇银行',
    patterns: [{ reg: /^(62359601)\d{11}$/g }],
  },
  {
    bankCode: '16631814',
    bankName: '临猗县新田村镇银行',
    patterns: [{ reg: /^(62359603)\d{11}$/g }],
  },
  {
    bankCode: '16631816',
    bankName: '新绛县新田村镇银行',
    patterns: [{ reg: /^(62359605)\d{11}$/g }],
  },
  {
    bankCode: '16641125',
    bankName: '天津市蓟州村镇银行',
    patterns: [{ reg: /^(62707305)\d{11}$/g }],
  },
  {
    bankCode: '16648890',
    bankName: '铁门关津汇村镇银行',
    patterns: [{ reg: /^(62707303)\d{11}$/g }],
  },
  {
    bankCode: '16649041',
    bankName: '阿拉尔津汇村镇银行',
    patterns: [{ reg: /^(62707304)\d{11}$/g }],
  },
  {
    bankCode: '16651613',
    bankName: '娄烦县三禾村镇银行',
    patterns: [{ reg: /^(62354290)\d{10}$/g }],
  },
  {
    bankCode: '16651664',
    bankName: '屯留县三禾村镇银行',
    patterns: [{ reg: /^(62354211)\d{10}$/g }],
  },
  {
    bankCode: '16651682',
    bankName: '阳城县三禾村镇银行',
    patterns: [{ reg: /^(62354215)\d{10}$/g }],
  },
  {
    bankCode: '16651812',
    bankName: '永济市三禾村镇银行',
    patterns: [{ reg: /^(62354213)\d{10}$/g }],
  },
  {
    bankCode: '16664961',
    bankName: '林州德丰村镇银行',
    patterns: [{ reg: /^(62165203)\d{11}$/g }],
  },
  {
    bankCode: '16664972',
    bankName: '淇县中原村镇银行',
    patterns: [{ reg: /^(62165202)\d{11}$/g }],
  },
  {
    bankCode: '16664989',
    bankName: '河南新乡新兴村镇银行',
    patterns: [{ reg: /^(62165271)\d{10}$/g }],
  },
  {
    bankCode: '16665025',
    bankName: '濮阳中原村镇银行',
    patterns: [{ reg: /^(62165201)\d{11}$/g }],
  },
  {
    bankCode: '16665054',
    bankName: '卢氏中原村镇银行',
    patterns: [{ reg: /^(62165204)\d{11}$/g }],
  },
  {
    bankCode: '16665115',
    bankName: '西平财富村镇银行',
    patterns: [{ reg: /^(62304701)\d{11}$/g }],
  },
  {
    bankCode: '16665162',
    bankName: '信阳平桥中原村镇银行',
    patterns: [{ reg: /^(621652853)\d{9}$/g }],
  },
  {
    bankCode: '16676511',
    bankName: '金堂汇金村镇银行',
    patterns: [{ reg: /^(62365401)\d{11}$/g }],
  },
  {
    bankCode: '16681295',
    bankName: '武安村镇银行',
    patterns: [{ reg: /^(62365178)\d{10}$/g }],
  },
  {
    bankCode: '16691485',
    bankName: '深州丰源村镇银行',
    patterns: [{ reg: /^(62365202)\d{11}$/g }],
  },
  {
    bankCode: '16692417',
    bankName: '长春宽城融汇村镇银行',
    patterns: [{ reg: /^(62365220)\d{11}$/g }],
  },
  {
    bankCode: '16692418',
    bankName: '长春朝阳和润村镇银行',
    patterns: [{ reg: /^(62365213)\d{11}$/g }],
  },
  {
    bankCode: '16692419',
    bankName: '长春经开融丰村镇银行',
    patterns: [{ reg: /^(62365224)\d{11}$/g }],
  },
  {
    bankCode: '16692421',
    bankName: '永吉吉庆村镇银行',
    patterns: [{ reg: /^(62365217)\d{11}$/g }],
  },
  {
    bankCode: '16692431',
    bankName: '梨树源泰村镇银行',
    patterns: [{ reg: /^(62365221)\d{11}$/g }],
  },
  {
    bankCode: '16692451',
    bankName: '通化融达村镇银行',
    patterns: [{ reg: /^(62365215)\d{11}$/g }],
  },
  {
    bankCode: '16692455',
    bankName: '集安惠鑫村镇银行',
    patterns: [{ reg: /^(62365218)\d{11}$/g }],
  },
  {
    bankCode: '16692457',
    bankName: '通化二道江瑞丰村镇银行',
    patterns: [{ reg: /^(62365223)\d{11}$/g }],
  },
  {
    bankCode: '16692462',
    bankName: '靖宇乾丰村镇银行',
    patterns: [{ reg: /^(62365222)\d{11}$/g }],
  },
  {
    bankCode: '16692465',
    bankName: '白山浑江恒泰村镇银行',
    patterns: [{ reg: /^(62365214)\d{11}$/g }],
  },
  {
    bankCode: '16692481',
    bankName: '长春绿园融泰村镇银行',
    patterns: [{ reg: /^(62365216)\d{11}$/g }],
  },
  {
    bankCode: '16692493',
    bankName: '敦化江南村镇银行',
    patterns: [{ reg: /^(62365219)\d{11}$/g }],
  },
  {
    bankCode: '16692513',
    bankName: '前郭县阳光村镇银行',
    patterns: [{ reg: /^(62365212)\d{11}$/g }],
  },
  {
    bankCode: '16693992',
    bankName: '云霄润发村镇银行',
    patterns: [{ reg: /^(62365203)\d{11}$/g }],
  },
  {
    bankCode: '16693996',
    bankName: '东山润鑫村镇银行',
    patterns: [{ reg: /^(62365204)\d{11}$/g }],
  },
  {
    bankCode: '16693998',
    bankName: '平和润丰村镇银行',
    patterns: [{ reg: /^(62365205)\d{11}$/g }],
  },
  {
    bankCode: '16695265',
    bankName: '远安金古村镇银行',
    patterns: [{ reg: /^(62365208)\d{11}$/g }],
  },
  {
    bankCode: '16695269',
    bankName: '五峰金谷村镇银行',
    patterns: [{ reg: /^(62365209)\d{11}$/g }],
  },
  {
    bankCode: '16697312',
    bankName: '昆明晋宁融丰村镇银行',
    patterns: [{ reg: /^(62365206)\d{11}$/g }],
  },
  {
    bankCode: '16697315',
    bankName: '昆明宜良融丰村镇银行',
    patterns: [{ reg: /^(62365207)\d{11}$/g }],
  },
  {
    bankCode: '16702613',
    bankName: '依兰惠鑫村镇银行',
    patterns: [{ reg: /^(62365504)\d{11}$/g }],
  },
  {
    bankCode: '16702623',
    bankName: '哈尔滨宾州村镇银行',
    patterns: [{ reg: /^(62365502)\d{11}$/g }],
  },
  {
    bankCode: '16702631',
    bankName: '哈尔滨农信村镇银行',
    patterns: [{ reg: /^(62365501)\d{11}$/g }],
  },
  {
    bankCode: '16702682',
    bankName: '宝清广益村镇银行',
    patterns: [{ reg: /^(62365503)\d{11}$/g }],
  },
  {
    bankCode: '16702764',
    bankName: '海伦惠丰村镇银行',
    patterns: [{ reg: /^(62365506)\d{11}$/g }],
  },
  {
    bankCode: '16702783',
    bankName: '五大连池惠丰村镇银行',
    patterns: [{ reg: /^(62365507)\d{11}$/g }],
  },
  {
    bankCode: '16714611',
    bankName: '济宁高新村镇银行',
    patterns: [{ reg: /^(62365701)\d{11}$/g }],
  },
  {
    bankCode: '16743633',
    bankName: '安徽固镇新淮河村镇银行',
    patterns: [{ reg: /^(62354901)\d{10}$/g }],
  },
  {
    bankCode: '16743713',
    bankName: '安徽黟县新淮河村镇银行',
    patterns: [{ reg: /^(62354903)\d{11}$/g }],
  },
  {
    bankCode: '16745034',
    bankName: '禹州新民生村镇银行',
    patterns: [{ reg: /^(623567001)\d{10}$/g }],
  },
  {
    bankCode: '16745068',
    bankName: '柘城黄淮村镇银行',
    patterns: [{ reg: /^(62354902)\d{11}$/g }],
  },
  {
    bankCode: '16745116',
    bankName: '上蔡惠民村镇银行',
    patterns: [{ reg: /^(623567002)\d{10}$/g }],
  },
  {
    bankCode: '16754572',
    bankName: '山东芝罘齐丰村镇银行',
    patterns: [{ reg: /^(62363914)\d{10}$/g }],
  },
  {
    bankCode: '16754574',
    bankName: '山东莱山齐丰村镇银行',
    patterns: [{ reg: /^(62363938)\d{10}$/g }],
  },
  {
    bankCode: '16754618',
    bankName: '山东泗水齐丰村镇银行',
    patterns: [{ reg: /^(62363974)\d{10}$/g }],
  },
  {
    bankCode: '16754635',
    bankName: '山东新泰齐丰村镇银行',
    patterns: [{ reg: /^(62363975)\d{10}$/g }],
  },
  {
    bankCode: '16754717',
    bankName: '山东冠县齐丰村镇银行',
    patterns: [{ reg: /^(62363940)\d{10}$/g }],
  },
  {
    bankCode: '16754739',
    bankName: '山东蒙阴齐丰村镇银行',
    patterns: [{ reg: /^(62363971)\d{10}$/g }],
  },
  {
    bankCode: '16776872',
    bankName: '南江农科村镇银行',
    patterns: [{ reg: /^(62367292)\d{10}$/g }],
  },
  {
    bankCode: '16776873',
    bankName: '平昌农科村镇银行',
    patterns: [{ reg: /^(62367291)\d{10}$/g }],
  },
  {
    bankCode: '16777914',
    bankName: '陕西周至农科村镇银行',
    patterns: [{ reg: /^(62367201)\d{11}$/g }],
  },
  {
    bankCode: '16782051',
    bankName: '鄂尔多斯市天骄蒙银村镇银行',
    patterns: [{ reg: /^(62134612)\d{11}$/g }],
  },
  {
    bankCode: '16792313',
    bankName: '辽宁太子河村镇银行',
    patterns: [{ reg: /^(62367401)\d{11}$/g }],
  },
  {
    bankCode: '16802917',
    bankName: '上海嘉定洪都村镇银行',
    patterns: [{ reg: /^(62364710)\d{10}$/g }],
  },
  {
    bankCode: '16814584',
    bankName: '昌乐乐安村镇银行',
    patterns: [{ reg: /^(62314289)\d{10}$/g }],
  },
  {
    bankCode: '16814694',
    bankName: '庆云乐安村镇银行',
    patterns: [{ reg: /^(62314259)\d{10}$/g }],
  },
  {
    bankCode: '16825845',
    bankName: '深圳宝安桂银村镇银行',
    patterns: [{ reg: /^(62364001)\d{11}$/g }],
  },
  {
    bankCode: '16838512',
    bankName: '青海湟中三江村镇银行',
    patterns: [{ reg: /^(62364178)\d{10}$/g }],
  },
  {
    bankCode: '16838523',
    bankName: '青海乐都三江村镇银行',
    patterns: [{ reg: /^(62364194)\d{10}$/g }],
  },
  {
    bankCode: '16844513',
    bankName: '平阴蓝海村镇银行',
    patterns: [{ reg: /^(62364603)\d{11}$/g }],
  },
  {
    bankCode: '16844611',
    bankName: '济宁蓝海村镇银行',
    patterns: [{ reg: /^(62364608)\d{11}$/g }],
  },
  {
    bankCode: '16844615',
    bankName: '山东金乡蓝海村镇银行',
    patterns: [{ reg: /^(62364605)\d{11}$/g }],
  },
  {
    bankCode: '16844743',
    bankName: '山东沂南蓝海村镇银行',
    patterns: [{ reg: /^(62364604)\d{11}$/g }],
  },
  {
    bankCode: '16844773',
    bankName: '日照蓝海村镇银行',
    patterns: [{ reg: /^(62364601)\d{11}$/g }],
  },
  {
    bankCode: '16845841',
    bankName: '深圳罗湖蓝海村镇银行',
    patterns: [{ reg: /^(62364606)\d{11}$/g }],
  },
  {
    bankCode: '16864515',
    bankName: '山东商河汇金村镇银行',
    patterns: [{ reg: /^(62354884)\d{10}$/g }],
  },
  {
    bankCode: '16864537',
    bankName: '山东临淄汇金村镇银行',
    patterns: [{ reg: /^(62354879)\d{10}$/g }],
  },
  {
    bankCode: '16912364',
    bankName: '葫芦岛国信村镇银行',
    patterns: [{ reg: /^(62368701)\d{11}$/g }],
  },
  {
    bankCode: '16942263',
    bankName: '东港同合村镇银行',
    patterns: [{ reg: /^(62367501)\d{11}$/g }],
  },
  {
    bankCode: '16967071',
    bankName: '兴义万丰村镇银行',
    patterns: [{ reg: /^(62706501)\d{11}$/g }],
  },
  {
    bankCode: '16987004',
    bankName: '贵安新区发展村镇银行',
    patterns: [{ reg: /^(62369470)\d{10}$/g }],
  },
  {
    bankCode: '17001947',
    bankName: '喀喇沁玉龙村镇银行',
    patterns: [{ reg: /^(627063003)\d{10}$/g }],
  },
  {
    bankCode: '17001951',
    bankName: '赤峰市红山玉龙村镇银行',
    patterns: [{ reg: /^(627063001)\d{10}$/g }],
  },
  {
    bankCode: '17001952',
    bankName: '赤峰市元宝山玉龙村镇银行',
    patterns: [{ reg: /^(627063002)\d{10}$/g }],
  },
  {
    bankCode: '17012081',
    bankName: '阿拉善左旗黄河村镇银行',
    patterns: [{ reg: /^(62367901)\d{11}$/g }],
  },
  {
    bankCode: '17012413',
    bankName: '德惠敦银村镇银行',
    patterns: [{ reg: /^(62367933)\d{10}$/g }],
  },
  {
    bankCode: '17012435',
    bankName: '四平铁西敦银村镇银行',
    patterns: [{ reg: /^(62367934)\d{10}$/g }],
  },
  {
    bankCode: '17012492',
    bankName: '图们敦银村镇银行',
    patterns: [{ reg: /^(62367935)\d{10}$/g }],
  },
  {
    bankCode: '17012496',
    bankName: '和龙敦银村镇银行',
    patterns: [{ reg: /^(62367936)\d{10}$/g }],
  },
  {
    bankCode: '17062261',
    bankName: '凤城丰益村镇银行',
    patterns: [{ reg: /^(62707501)\d{11}$/g }],
  },
  {
    bankCode: '17082753',
    bankName: '穆棱远东村镇银行',
    patterns: [{ reg: /^(62360530)\d{10}$/g }],
  },
  {
    bankCode: '17114753',
    bankName: '定陶河海村镇银行',
    patterns: [{ reg: /^(62354700)\d{11}$/g }],
  },
  {
    bankCode: '17124665',
    bankName: '沾化青云村镇银行',
    patterns: [{ reg: /^(62149445)\d{10}$/g }],
  },
  {
    bankCode: '17197045',
    bankName: '遵义新浦长征村镇银行',
    patterns: [{ reg: /^(62316424)\d{10}$/g }],
  },
  {
    bankCode: '17221667',
    bankName: '壶关晋融村镇银行',
    patterns: [{ reg: /^(62704000)\d{11}$/g }],
  },
  {
    bankCode: '25020344',
    bankName: '东亚银行有限公司',
    patterns: [{ reg: /^(622471)\d{10}$/g }],
  },
  {
    bankCode: '25020344',
    bankName: '东亚银行有限公司',
    patterns: [{ reg: /^(622372)\d{10}$/g }],
  },
  {
    bankCode: '25020344',
    bankName: '东亚银行有限公司',
    patterns: [{ reg: /^(622365)\d{11}$/g }],
  },
  {
    bankCode: '25020344',
    bankName: '东亚银行有限公司',
    patterns: [{ reg: /^(622472)\d{10}$/g }],
  },
  {
    bankCode: '25020344',
    bankName: '东亚银行有限公司',
    patterns: [{ reg: /^(623318)\d{13}$/g }],
  },
  {
    bankCode: '25020344',
    bankName: '东亚银行有限公司',
    patterns: [{ reg: /^(622943)\d{13}$/g }],
  },
  {
    bankCode: '25020446',
    bankName: '东亚银行澳门分行',
    patterns: [{ reg: /^(621411)\d{13}$/g }],
  },
  {
    bankCode: '25030344',
    bankName: '花旗银行有限公司',
    patterns: [{ reg: /^(625091)\d{10}$/g }],
  },
  {
    bankCode: '25030344',
    bankName: '花旗银行有限公司',
    patterns: [{ reg: /^(622371)\d{10}$/g }],
  },
  {
    bankCode: '25040344',
    bankName: '大新银行有限公司',
    patterns: [{ reg: /^(622293)\d{10}$/g }],
  },
  {
    bankCode: '25040344',
    bankName: '大新银行有限公司',
    patterns: [{ reg: /^(622294)\d{10}$/g }],
  },
  {
    bankCode: '25040344',
    bankName: '大新银行有限公司',
    patterns: [{ reg: /^(622295)\d{10}$/g }],
  },
  {
    bankCode: '25040344',
    bankName: '大新银行有限公司',
    patterns: [{ reg: /^(622297)\d{10}$/g }],
  },
  {
    bankCode: '25040344',
    bankName: '大新银行有限公司',
    patterns: [{ reg: /^(622373)\d{10}$/g }],
  },
  {
    bankCode: '25040344',
    bankName: '大新银行有限公司',
    patterns: [{ reg: /^(625940)\d{10}$/g }],
  },
  {
    bankCode: '25040344',
    bankName: '大新银行有限公司',
    patterns: [{ reg: /^(622489)\d{11}$/g }],
  },
  {
    bankCode: '25040344',
    bankName: '大新银行有限公司',
    patterns: [{ reg: /^(622451)\d{10}$/g }],
  },
  {
    bankCode: '25040344',
    bankName: '大新银行有限公司',
    patterns: [{ reg: /^(622296)\d{10}$/g }],
  },
  {
    bankCode: '25040344',
    bankName: '大新银行有限公司',
    patterns: [{ reg: /^(622375)\d{11}$/g }],
  },
  {
    bankCode: '25060344',
    bankName: '华侨永亨银行股份有限公司',
    patterns: [{ reg: /^(622871)\d{10}$/g }],
  },
  {
    bankCode: '25060344',
    bankName: '华侨永亨银行股份有限公司',
    patterns: [{ reg: /^(622958)\d{10}$/g }],
  },
  {
    bankCode: '25060344',
    bankName: '华侨永亨银行股份有限公司',
    patterns: [{ reg: /^(622957)\d{10}$/g }],
  },
  {
    bankCode: '25060344',
    bankName: '华侨永亨银行股份有限公司',
    patterns: [{ reg: /^(622798)\d{10}$/g }],
  },
  {
    bankCode: '25060344',
    bankName: '华侨永亨银行股份有限公司',
    patterns: [{ reg: /^(622963)\d{10}$/g }],
  },
  {
    bankCode: '25060344',
    bankName: '华侨永亨银行股份有限公司',
    patterns: [{ reg: /^(625010)\d{10}$/g }],
  },
  {
    bankCode: '25070344',
    bankName: '中国建设银行亚洲股份有限公司',
    patterns: [{ reg: /^(622382)\d{10}$/g }],
  },
  {
    bankCode: '25070344',
    bankName: '中国建设银行亚洲股份有限公司',
    patterns: [{ reg: /^(622675)\d{10}$/g }],
  },
  {
    bankCode: '25070344',
    bankName: '中国建设银行亚洲股份有限公司',
    patterns: [{ reg: /^(622676)\d{10}$/g }],
  },
  {
    bankCode: '25070344',
    bankName: '中国建设银行亚洲股份有限公司',
    patterns: [{ reg: /^(622677)\d{10}$/g }],
  },
  {
    bankCode: '25070344',
    bankName: '中国建设银行亚洲股份有限公司',
    patterns: [{ reg: /^(621083)\d{10}$/g }],
  },
  {
    bankCode: '25070344',
    bankName: '中国建设银行亚洲股份有限公司',
    patterns: [{ reg: /^(621487)\d{10}$/g }],
  },
  {
    bankCode: '25070344',
    bankName: '中国建设银行亚洲股份有限公司',
    patterns: [{ reg: /^(624329)\d{10}$/g }],
  },
  {
    bankCode: '25070344',
    bankName: '中国建设银行亚洲股份有限公司',
    patterns: [{ reg: /^(624458)\d{10}$/g }],
  },
  {
    bankCode: '25070344',
    bankName: '中国建设银行亚洲股份有限公司',
    patterns: [{ reg: /^(622381)\d{10}$/g }],
  },
  {
    bankCode: '25080344',
    bankName: '星展银行香港有限公司',
    patterns: [{ reg: /^(622487)\d{10}$/g }],
  },
  {
    bankCode: '25080344',
    bankName: '星展银行香港有限公司',
    patterns: [{ reg: /^(622490)\d{10}$/g }],
  },
  {
    bankCode: '25080344',
    bankName: '星展银行香港有限公司',
    patterns: [{ reg: /^(622491)\d{10}$/g }],
  },
  {
    bankCode: '25080344',
    bankName: '星展银行香港有限公司',
    patterns: [{ reg: /^(622492)\d{10}$/g }],
  },
  {
    bankCode: '25080344',
    bankName: '星展银行香港有限公司',
    patterns: [{ reg: /^(622492)\d{11}$/g }],
  },
  {
    bankCode: '25080344',
    bankName: '星展银行香港有限公司',
    patterns: [{ reg: /^(621744)\d{11}$/g }],
  },
  {
    bankCode: '25080344',
    bankName: '星展银行香港有限公司',
    patterns: [{ reg: /^(621745)\d{11}$/g }],
  },
  {
    bankCode: '25080344',
    bankName: '星展银行香港有限公司',
    patterns: [{ reg: /^(621746)\d{11}$/g }],
  },
  {
    bankCode: '25080344',
    bankName: '星展银行香港有限公司',
    patterns: [{ reg: /^(621747)\d{11}$/g }],
  },
  {
    bankCode: '25080344',
    bankName: '星展银行香港有限公司',
    patterns: [{ reg: /^(622491)\d{11}$/g }],
  },
  {
    bankCode: '25080344',
    bankName: '星展银行香港有限公司',
    patterns: [{ reg: /^(622487)\d{11}$/g }],
  },
  {
    bankCode: '25080344',
    bankName: '星展银行香港有限公司',
    patterns: [{ reg: /^(622490)\d{11}$/g }],
  },
  {
    bankCode: '25090344',
    bankName: '上海商业银行',
    patterns: [{ reg: /^(622952)\d{10}$/g }],
  },
  {
    bankCode: '25090344',
    bankName: '上海商业银行',
    patterns: [{ reg: /^(621034)\d{10}$/g }],
  },
  {
    bankCode: '25090344',
    bankName: '上海商业银行',
    patterns: [{ reg: /^(622386)\d{10}$/g }],
  },
  {
    bankCode: '25090344',
    bankName: '上海商业银行',
    patterns: [{ reg: /^(625107)\d{10}$/g }],
  },
  {
    bankCode: '25100344',
    bankName: '永隆银行有限公司',
    patterns: [{ reg: /^(622423)\d{10}$/g }],
  },
  {
    bankCode: '25100344',
    bankName: '永隆银行有限公司',
    patterns: [{ reg: /^(622970)\d{11}$/g }],
  },
  {
    bankCode: '25100344',
    bankName: '永隆银行有限公司',
    patterns: [{ reg: /^(622971)\d{11}$/g }],
  },
  {
    bankCode: '25100344',
    bankName: '永隆银行有限公司',
    patterns: [{ reg: /^(622387)\d{10}$/g }],
  },
  {
    bankCode: '25100344',
    bankName: '永隆银行有限公司',
    patterns: [{ reg: /^(625062)\d{10}$/g }],
  },
  {
    bankCode: '25100344',
    bankName: '永隆银行有限公司',
    patterns: [{ reg: /^(625063)\d{10}$/g }],
  },
  {
    bankCode: '25100344',
    bankName: '永隆银行有限公司',
    patterns: [{ reg: /^(623497)\d{11}$/g }],
  },
  {
    bankCode: '25120344',
    bankName: '香港上海汇丰银行有限公司',
    patterns: [{ reg: /^(625034)\d{10}$/g }],
  },
  {
    bankCode: '25120344',
    bankName: '香港上海汇丰银行有限公司',
    patterns: [{ reg: /^(625096)\d{10}$/g }],
  },
  {
    bankCode: '25120344',
    bankName: '香港上海汇丰银行有限公司',
    patterns: [{ reg: /^(622360)\d{10}$/g }],
  },
  {
    bankCode: '25120344',
    bankName: '香港上海汇丰银行有限公司',
    patterns: [{ reg: /^(622361)\d{10}$/g }],
  },
  {
    bankCode: '25120344',
    bankName: '香港上海汇丰银行有限公司',
    patterns: [{ reg: /^(625098)\d{10}$/g }],
  },
  {
    bankCode: '25130344',
    bankName: '香港上海汇丰银行有限公司',
    patterns: [{ reg: /^(622406)\d{11}$/g }],
  },
  {
    bankCode: '25130344',
    bankName: '香港上海汇丰银行有限公司',
    patterns: [{ reg: /^(621442)\d{11}$/g }],
  },
  {
    bankCode: '25130344',
    bankName: '香港上海汇丰银行有限公司',
    patterns: [{ reg: /^(621443)\d{13}$/g }],
  },
  {
    bankCode: '25130344',
    bankName: '香港上海汇丰银行有限公司',
    patterns: [{ reg: /^(622407)\d{13}$/g }],
  },
  {
    bankCode: '25140344',
    bankName: '恒生银行有限公司',
    patterns: [{ reg: /^(622376)\d{10}$/g }],
  },
  {
    bankCode: '25140344',
    bankName: '恒生银行有限公司',
    patterns: [{ reg: /^(622377)\d{10}$/g }],
  },
  {
    bankCode: '25140344',
    bankName: '恒生银行有限公司',
    patterns: [{ reg: /^(625024)\d{10}$/g }],
  },
  {
    bankCode: '25140344',
    bankName: '恒生银行有限公司',
    patterns: [{ reg: /^(625026)\d{10}$/g }],
  },
  {
    bankCode: '25140344',
    bankName: '恒生银行有限公司',
    patterns: [{ reg: /^(625092)\d{10}$/g }],
  },
  {
    bankCode: '25140344',
    bankName: '恒生银行有限公司',
    patterns: [{ reg: /^(622378)\d{10}$/g }],
  },
  {
    bankCode: '25150344',
    bankName: '恒生银行',
    patterns: [{ reg: /^(622409)\d{13}$/g }],
  },
  {
    bankCode: '25150344',
    bankName: '恒生银行',
    patterns: [{ reg: /^(621440)\d{11}$/g }],
  },
  {
    bankCode: '25150344',
    bankName: '恒生银行',
    patterns: [{ reg: /^(621441)\d{13}$/g }],
  },
  {
    bankCode: '25150344',
    bankName: '恒生银行',
    patterns: [{ reg: /^(623106)\d{11}$/g }],
  },
  {
    bankCode: '25150344',
    bankName: '恒生银行',
    patterns: [{ reg: /^(623107)\d{13}$/g }],
  },
  {
    bankCode: '25150344',
    bankName: '恒生银行',
    patterns: [{ reg: /^(622410)\d{11}$/g }],
  },
  {
    bankCode: '25160344',
    bankName: '中信银行（国际）',
    patterns: [{ reg: /^(622453)\d{10}$/g }],
  },
  {
    bankCode: '25160344',
    bankName: '中信银行（国际）',
    patterns: [{ reg: /^(622456)\d{10}$/g }],
  },
  {
    bankCode: '25160344',
    bankName: '中信银行（国际）',
    patterns: [{ reg: /^(622459)\d{11}$/g }],
  },
  {
    bankCode: '25160344',
    bankName: '中信银行（国际）',
    patterns: [{ reg: /^(624303)\d{10}$/g }],
  },
  {
    bankCode: '25160344',
    bankName: '中信银行（国际）',
    patterns: [{ reg: /^(623328)\d{11}$/g }],
  },
  {
    bankCode: '25160344',
    bankName: '中信银行（国际）',
    patterns: [{ reg: /^(623397)\d{11}$/g }],
  },
  {
    bankCode: '25160344',
    bankName: '中信银行（国际）',
    patterns: [{ reg: /^(623465)\d{11}$/g }],
  },
  {
    bankCode: '25170344',
    bankName: '创兴银行有限公司',
    patterns: [{ reg: /^(622463)\d{13}$/g }],
  },
  {
    bankCode: '25170344',
    bankName: '创兴银行有限公司',
    patterns: [{ reg: /^(621087)\d{13}$/g }],
  },
  {
    bankCode: '25170344',
    bankName: '创兴银行有限公司',
    patterns: [{ reg: /^(625008)\d{10}$/g }],
  },
  {
    bankCode: '25170344',
    bankName: '创兴银行有限公司',
    patterns: [{ reg: /^(625009)\d{10}$/g }],
  },
  {
    bankCode: '25170344',
    bankName: '创兴银行有限公司',
    patterns: [{ reg: /^(624337)\d{10}$/g }],
  },
  {
    bankCode: '25170344',
    bankName: '创兴银行有限公司',
    patterns: [{ reg: /^(626396)\d{10}$/g }],
  },
  {
    bankCode: '25180344',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(625040)\d{10}$/g }],
  },
  {
    bankCode: '25180344',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(625042)\d{10}$/g }],
  },
  {
    bankCode: '25180344',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(625044)\d{10}$/g }],
  },
  {
    bankCode: '25180344',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(625046)\d{10}$/g }],
  },
  {
    bankCode: '25180344',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(625058)\d{10}$/g }],
  },
  {
    bankCode: '25180344',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(625055)\d{10}$/g }],
  },
  {
    bankCode: '25180344',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(625136)\d{10}$/g }],
  },
  {
    bankCode: '25180344',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(625060)\d{10}$/g }],
  },
  {
    bankCode: '25180344',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(625172)\d{10}$/g }],
  },
  {
    bankCode: '25180344',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(625174)\d{10}$/g }],
  },
  {
    bankCode: '25180344',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(625176)\d{10}$/g }],
  },
  {
    bankCode: '25180344',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(625053)\d{10}$/g }],
  },
  {
    bankCode: '25180344',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(625048)\d{10}$/g }],
  },
  {
    bankCode: '25180344',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(624483)\d{10}$/g }],
  },
  {
    bankCode: '25180344',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(624472)\d{10}$/g }],
  },
  {
    bankCode: '25180446',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(622751)\d{10}$/g }],
  },
  {
    bankCode: '25180446',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(625145)\d{10}$/g }],
  },
  {
    bankCode: '25180446',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(625147)\d{10}$/g }],
  },
  {
    bankCode: '25180446',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(625196)\d{10}$/g }],
  },
  {
    bankCode: '25180446',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(625141)\d{10}$/g }],
  },
  {
    bankCode: '25180446',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(622750)\d{10}$/g }],
  },
  {
    bankCode: '25180446',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(625198)\d{10}$/g }],
  },
  {
    bankCode: '25180446',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(624485)\d{10}$/g }],
  },
  {
    bankCode: '25180446',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(624474)\d{10}$/g }],
  },
  {
    bankCode: '25180446',
    bankName: '中银信用卡(国际)有限公司',
    patterns: [{ reg: /^(625143)\d{10}$/g }],
  },
  {
    bankCode: '25190344',
    bankName: '中国银行（香港）',
    patterns: [{ reg: /^(623040)\d{10}$/g }],
  },
  {
    bankCode: '25190344',
    bankName: '中国银行（香港）',
    patterns: [{ reg: /^(620202)\d{10}$/g }],
  },
  {
    bankCode: '25190344',
    bankName: '中国银行（香港）',
    patterns: [{ reg: /^(620203)\d{10}$/g }],
  },
  {
    bankCode: '25190344',
    bankName: '中国银行（香港）',
    patterns: [{ reg: /^(623309)\d{13}$/g }],
  },
  {
    bankCode: '25190344',
    bankName: '中国银行（香港）',
    patterns: [{ reg: /^(621782)\d{13}$/g }],
  },
  {
    bankCode: '25190344',
    bankName: '中国银行（香港）',
    patterns: [{ reg: /^(622348)\d{10}$/g }],
  },
  {
    bankCode: '25190344',
    bankName: '中国银行（香港）',
    patterns: [{ reg: /^(621741)\d{13}$/g }],
  },
  {
    bankCode: '25200344',
    bankName: '南洋商业银行',
    patterns: [{ reg: /^(621042)\d{13}$/g }],
  },
  {
    bankCode: '25200344',
    bankName: '南洋商业银行',
    patterns: [{ reg: /^(621743)\d{13}$/g }],
  },
  {
    bankCode: '25200344',
    bankName: '南洋商业银行',
    patterns: [{ reg: /^(623041)\d{10}$/g }],
  },
  {
    bankCode: '25200344',
    bankName: '南洋商业银行',
    patterns: [{ reg: /^(620208)\d{10}$/g }],
  },
  {
    bankCode: '25200344',
    bankName: '南洋商业银行',
    patterns: [{ reg: /^(622351)\d{10}$/g }],
  },
  {
    bankCode: '25200344',
    bankName: '南洋商业银行',
    patterns: [{ reg: /^(623308)\d{13}$/g }],
  },
  {
    bankCode: '25200344',
    bankName: '南洋商业银行',
    patterns: [{ reg: /^(620209)\d{10}$/g }],
  },
  {
    bankCode: '25200344',
    bankName: '南洋商业银行',
    patterns: [{ reg: /^(621783)\d{13}$/g }],
  },
  {
    bankCode: '25210344',
    bankName: '集友银行',
    patterns: [{ reg: /^(622355)\d{10}$/g }],
  },
  {
    bankCode: '25210344',
    bankName: '集友银行',
    patterns: [{ reg: /^(621742)\d{13}$/g }],
  },
  {
    bankCode: '25210344',
    bankName: '集友银行',
    patterns: [{ reg: /^(623042)\d{10}$/g }],
  },
  {
    bankCode: '25210344',
    bankName: '集友银行',
    patterns: [{ reg: /^(620206)\d{10}$/g }],
  },
  {
    bankCode: '25210344',
    bankName: '集友银行',
    patterns: [{ reg: /^(620207)\d{10}$/g }],
  },
  {
    bankCode: '25210344',
    bankName: '集友银行',
    patterns: [{ reg: /^(621784)\d{13}$/g }],
  },
  {
    bankCode: '25210344',
    bankName: '集友银行',
    patterns: [{ reg: /^(621043)\d{13}$/g }],
  },
  {
    bankCode: '25210344',
    bankName: '集友银行',
    patterns: [{ reg: /^(623310)\d{13}$/g }],
  },
  {
    bankCode: '25230344',
    bankName: 'AEON信贷财务亚洲有限公司',
    patterns: [{ reg: /^(622493)\d{10}$/g }],
  },
  {
    bankCode: '25230344',
    bankName: 'AEON信贷财务亚洲有限公司',
    patterns: [{ reg: /^(624489)\d{10}$/g }],
  },
  {
    bankCode: '25250446',
    bankName: '大丰银行有限公司',
    patterns: [{ reg: /^(622546)\d{13}$/g }],
  },
  {
    bankCode: '25250446',
    bankName: '大丰银行有限公司',
    patterns: [{ reg: /^(622547)\d{13}$/g }],
  },
  {
    bankCode: '25250446',
    bankName: '大丰银行有限公司',
    patterns: [{ reg: /^(620204)\d{10}$/g }],
  },
  {
    bankCode: '25250446',
    bankName: '大丰银行有限公司',
    patterns: [{ reg: /^(620205)\d{10}$/g }],
  },
  {
    bankCode: '25250446',
    bankName: '大丰银行有限公司',
    patterns: [{ reg: /^(620072)\d{13}$/g }],
  },
  {
    bankCode: '25250446',
    bankName: '大丰银行有限公司',
    patterns: [{ reg: /^(622548)\d{13}$/g }],
  },
  {
    bankCode: '25270446',
    bankName: '中国建设银行澳门分行',
    patterns: [{ reg: /^(621084)\d{10}$/g }],
  },
  {
    bankCode: '25270446',
    bankName: '中国建设银行澳门分行',
    patterns: [{ reg: /^(623350)\d{10}$/g }],
  },
  {
    bankCode: '25270446',
    bankName: '中国建设银行澳门分行',
    patterns: [{ reg: /^(624412)\d{10}$/g }],
  },
  {
    bankCode: '25280344',
    bankName: '渣打银行（香港）',
    patterns: [{ reg: /^(621740)\d{10}$/g }],
  },
  {
    bankCode: '25280344',
    bankName: '渣打银行香港有限公司',
    patterns: [{ reg: /^(622948)\d{10}$/g }],
  },
  {
    bankCode: '25280344',
    bankName: '渣打银行香港有限公司',
    patterns: [{ reg: /^(622482)\d{10}$/g }],
  },
  {
    bankCode: '25280344',
    bankName: '渣打银行香港有限公司',
    patterns: [{ reg: /^(622483)\d{10}$/g }],
  },
  {
    bankCode: '25280344',
    bankName: '渣打银行香港有限公司',
    patterns: [{ reg: /^(622484)\d{10}$/g }],
  },
  {
    bankCode: '25380344',
    bankName: 'K & R International Limited',
    patterns: [{ reg: /^(623334)\d{10}$/g }],
  },
  {
    bankCode: '25380344',
    bankName: 'K & R International Limited',
    patterns: [{ reg: /^(629131)\d{10}$/g }],
  },
  {
    bankCode: '25380344',
    bankName: 'K & R International Limited',
    patterns: [{ reg: /^(629140)\d{10}$/g }],
  },
  {
    bankCode: '25540344',
    bankName: 'HKT Payment Limited',
    patterns: [{ reg: /^(624468)\d{10}$/g }],
  },
  {
    bankCode: '25540344',
    bankName: 'HKT Payment Limited',
    patterns: [{ reg: /^(626407)\d{10}$/g }],
  },
  {
    bankCode: '25570344',
    bankName: 'PrimeCredit',
    patterns: [{ reg: /^(624477)\d{10}$/g }],
  },
  {
    bankCode: '25570344',
    bankName: 'PrimeCredit',
    patterns: [{ reg: /^(624478)\d{10}$/g }],
  },
  {
    bankCode: '25580344',
    bankName: '33 Financial Services Limited',
    patterns: [{ reg: /^(624488)\d{10}$/g }],
  },
  {
    bankCode: '25580344',
    bankName: '33 Financial Services Limited',
    patterns: [{ reg: /^(629148)\d{10}$/g }],
  },
  {
    bankCode: '25580344',
    bankName: '33 Financial Services Limited',
    patterns: [{ reg: /^(624481)\d{10}$/g }],
  },
  {
    bankCode: '25580344',
    bankName: '33 Financial Services Limited',
    patterns: [{ reg: /^(629139)\d{10}$/g }],
  },
  {
    bankCode: '26030764',
    bankName: 'Kasikorn Bank PCL',
    patterns: [{ reg: /^(625842)\d{10}$/g }],
  },
  {
    bankCode: '26030764',
    bankName: 'Kasikorn Bank PCL',
    patterns: [{ reg: /^(6258433)\d{9}$/g }],
  },
  {
    bankCode: '26030764',
    bankName: 'Kasikorn Bank PCL',
    patterns: [{ reg: /^(6258434)\d{9}$/g }],
  },
  {
    bankCode: '26070702',
    bankName: '新加坡大华银行',
    patterns: [{ reg: /^(622433)\d{10}$/g }],
  },
  {
    bankCode: '26080446',
    bankName: '华侨永亨银行股份有限公司',
    patterns: [{ reg: /^(622861)\d{10}$/g }],
  },
  {
    bankCode: '26080446',
    bankName: '华侨永亨银行股份有限公司',
    patterns: [{ reg: /^(622785)\d{10}$/g }],
  },
  {
    bankCode: '26080446',
    bankName: '华侨永亨银行股份有限公司',
    patterns: [{ reg: /^(622862)\d{10}$/g }],
  },
  {
    bankCode: '26080446',
    bankName: '华侨永亨银行股份有限公司',
    patterns: [{ reg: /^(622775)\d{10}$/g }],
  },
  {
    bankCode: '26080446',
    bankName: '华侨永亨银行股份有限公司',
    patterns: [{ reg: /^(622932)\d{10}$/g }],
  },
  {
    bankCode: '26080446',
    bankName: '华侨永亨银行股份有限公司',
    patterns: [{ reg: /^(624300)\d{10}$/g }],
  },
  {
    bankCode: '26080446',
    bankName: '华侨永亨银行股份有限公司',
    patterns: [{ reg: /^(624302)\d{10}$/g }],
  },
  {
    bankCode: '26080446',
    bankName: '华侨永亨银行股份有限公司',
    patterns: [{ reg: /^(624308)\d{10}$/g }],
  },
  {
    bankCode: '26080446',
    bankName: '华侨永亨银行股份有限公司',
    patterns: [{ reg: /^(624309)\d{10}$/g }],
  },
  {
    bankCode: '26110392',
    bankName: '日本三井住友卡公司',
    patterns: [{ reg: /^(622920)\d{10}$/g }],
  },
  {
    bankCode: '26220446',
    bankName: '澳门国际银行',
    patterns: [{ reg: /^(622434)\d{13}$/g }],
  },
  {
    bankCode: '26220446',
    bankName: '澳门国际银行',
    patterns: [{ reg: /^(622436)\d{13}$/g }],
  },
  {
    bankCode: '26220446',
    bankName: '澳门国际银行',
    patterns: [{ reg: /^(622435)\d{13}$/g }],
  },
  {
    bankCode: '26220446',
    bankName: '澳门国际银行',
    patterns: [{ reg: /^(624407)\d{10}$/g }],
  },
  {
    bankCode: '26220446',
    bankName: '澳门国际银行',
    patterns: [{ reg: /^(624408)\d{10}$/g }],
  },
  {
    bankCode: '26230446',
    bankName: '大西洋银行股份有限公司',
    patterns: [{ reg: /^(623064)\d{10}$/g }],
  },
  {
    bankCode: '26230446',
    bankName: '大西洋银行股份有限公司',
    patterns: [{ reg: /^(624371)\d{10}$/g }],
  },
  {
    bankCode: '26230446',
    bankName: '大西洋银行股份有限公司',
    patterns: [{ reg: /^(624372)\d{10}$/g }],
  },
  {
    bankCode: '26230446',
    bankName: '大西洋银行股份有限公司',
    patterns: [{ reg: /^(624398)\d{10}$/g }],
  },
  {
    bankCode: '26230446',
    bankName: '大西洋银行股份有限公司',
    patterns: [{ reg: /^(623043)\d{10}$/g }],
  },
  {
    bankCode: '26260792',
    bankName: 'T.GARANTI BANKASI A.S.',
    patterns: [{ reg: /^(622403)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(6506)\d{12}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(6507)\d{12}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(6508)\d{12}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601101)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601121)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601122)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601123)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601125)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601126)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601127)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601128)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601136)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601137)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601140)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601142)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601143)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601144)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601145)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601146)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601149)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601174)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601177)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601179)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601186)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601188)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(6011292)\d{9}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(6011293)\d{9}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(6011296)\d{9}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(6011300)\d{9}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(6011391)\d{9}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(6011392)\d{9}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(6011399)\d{9}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60112010)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60110)\d{11}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60114)\d{11}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60119)\d{11}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(644)\d{13}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(65)\d{14}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60112011)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60112013)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60112981)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60112987)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60112990)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60112991)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60112992)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60112994)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60112995)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60112996)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60113080)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60113081)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60113089)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60113941)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60113943)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60113944)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60113945)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60113946)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60113985)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60113988)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60113989)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60112012)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60112089)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60112986)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60112989)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601178)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601187)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601189)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(6011291)\d{9}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(6011294)\d{9}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(6011297)\d{9}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(6011390)\d{9}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(6011393)\d{9}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601100)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601131)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601148)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(6011290)\d{9}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60112)\d{11}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60112980)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60112997)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60113984)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(6011295)\d{9}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60113)\d{11}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60112988)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60112993)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60113940)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(60113986)\d{8}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(6509)\d{12}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601124)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601138)\d{10}$/g }],
  },
  {
    bankCode: '26290840',
    bankName: 'Discover Financial Services，I',
    patterns: [{ reg: /^(601147)\d{10}$/g }],
  },
  {
    bankCode: '26320446',
    bankName: '澳门商业银行',
    patterns: [{ reg: /^(621253)\d{13}$/g }],
  },
  {
    bankCode: '26320446',
    bankName: '澳门商业银行',
    patterns: [{ reg: /^(621254)\d{13}$/g }],
  },
  {
    bankCode: '26320446',
    bankName: '澳门商业银行',
    patterns: [{ reg: /^(625014)\d{10}$/g }],
  },
  {
    bankCode: '26320446',
    bankName: '澳门商业银行',
    patterns: [{ reg: /^(625016)\d{10}$/g }],
  },
  {
    bankCode: '26320446',
    bankName: '澳门商业银行',
    patterns: [{ reg: /^(621255)\d{13}$/g }],
  },
  {
    bankCode: '26330398',
    bankName: '哈萨克斯坦国民储蓄银行',
    patterns: [{ reg: /^(622549)\d{10}$/g }],
  },
  {
    bankCode: '26330398',
    bankName: '哈萨克斯坦国民储蓄银行',
    patterns: [{ reg: /^(622550)\d{10}$/g }],
  },
  {
    bankCode: '26330398',
    bankName: '哈萨克斯坦国民储蓄银行',
    patterns: [{ reg: /^(623357)\d{10}$/g }],
  },
  {
    bankCode: '26330398',
    bankName: '哈萨克斯坦国民储蓄银行',
    patterns: [{ reg: /^(624341)\d{10}$/g }],
  },
  {
    bankCode: '26330398',
    bankName: '哈萨克斯坦国民储蓄银行',
    patterns: [{ reg: /^(6234500)\d{9}$/g }],
  },
  {
    bankCode: '26330398',
    bankName: '哈萨克斯坦国民储蓄银行',
    patterns: [{ reg: /^(6234501)\d{9}$/g }],
  },
  {
    bankCode: '26330398',
    bankName: '哈萨克斯坦国民储蓄银行',
    patterns: [{ reg: /^(6264030)\d{9}$/g }],
  },
  {
    bankCode: '26330398',
    bankName: '哈萨克斯坦国民储蓄银行',
    patterns: [{ reg: /^(6264031)\d{9}$/g }],
  },
  {
    bankCode: '26330398',
    bankName: '哈萨克斯坦国民储蓄银行',
    patterns: [{ reg: /^(6264032)\d{9}$/g }],
  },
  {
    bankCode: '26350764',
    bankName: 'Bangkok Bank Pcl',
    patterns: [{ reg: /^(622354)\d{10}$/g }],
  },
  {
    bankCode: '26470446',
    bankName: '中国工商银行（澳门）',
    patterns: [{ reg: /^(625017)\d{10}$/g }],
  },
  {
    bankCode: '26470446',
    bankName: '中国工商银行（澳门）',
    patterns: [{ reg: /^(625018)\d{10}$/g }],
  },
  {
    bankCode: '26470446',
    bankName: '中国工商银行（澳门）',
    patterns: [{ reg: /^(625019)\d{10}$/g }],
  },
  {
    bankCode: '26520458',
    bankName: 'PUBLIC BANK BERHAD',
    patterns: [{ reg: /^(623488)\d{10}$/g }],
  },
  {
    bankCode: '26530496',
    bankName: '可汗银行',
    patterns: [{ reg: /^(621224)\d{10}$/g }],
  },
  {
    bankCode: '26530496',
    bankName: '可汗银行',
    patterns: [{ reg: /^(622954)\d{10}$/g }],
  },
  {
    bankCode: '26530496',
    bankName: '可汗银行',
    patterns: [{ reg: /^(62345800)\d{8}$/g }],
  },
  {
    bankCode: '26530496',
    bankName: '可汗银行',
    patterns: [{ reg: /^(62445400)\d{8}$/g }],
  },
  {
    bankCode: '26530496',
    bankName: '可汗银行',
    patterns: [{ reg: /^(62927700)\d{8}$/g }],
  },
  {
    bankCode: '26530496',
    bankName: '可汗银行',
    patterns: [{ reg: /^(62345801)\d{8}$/g }],
  },
  {
    bankCode: '26530496',
    bankName: '可汗银行',
    patterns: [{ reg: /^(62345802)\d{8}$/g }],
  },
  {
    bankCode: '26530496',
    bankName: '可汗银行',
    patterns: [{ reg: /^(62345803)\d{8}$/g }],
  },
  {
    bankCode: '26530496',
    bankName: '可汗银行',
    patterns: [{ reg: /^(62927701)\d{8}$/g }],
  },
  {
    bankCode: '26550704',
    bankName: '越南Vietcombank',
    patterns: [{ reg: /^(621295)\d{10}$/g }],
  },
  {
    bankCode: '26550704',
    bankName: '越南Vietcombank',
    patterns: [{ reg: /^(625124)\d{10}$/g }],
  },
  {
    bankCode: '26550704',
    bankName: '越南Vietcombank',
    patterns: [{ reg: /^(625154)\d{10}$/g }],
  },
  {
    bankCode: '26610116',
    bankName: 'Canadia Bank PLC',
    patterns: [{ reg: /^(623457)\d{10}$/g }],
  },
  {
    bankCode: '26620469',
    bankName: 'Golomt bank of Monglia',
    patterns: [{ reg: /^(622445)\d{10}$/g }],
  },
  {
    bankCode: '26620496',
    bankName: '蒙古郭勒姆特银行',
    patterns: [{ reg: /^(622444)\d{10}$/g }],
  },
  {
    bankCode: '26620496',
    bankName: '蒙古郭勒姆特银行',
    patterns: [{ reg: /^(621049)\d{10}$/g }],
  },
  {
    bankCode: '26620496',
    bankName: '蒙古郭勒姆特银行',
    patterns: [{ reg: /^(622414)\d{10}$/g }],
  },
  {
    bankCode: '26620496',
    bankName: '蒙古郭勒姆特银行',
    patterns: [{ reg: /^(626221)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(620106)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(620011)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(620812)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(620123)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(620125)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(620027)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(620132)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(620039)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(620278)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625006)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625011)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625012)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625023)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625027)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625031)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625039)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625078)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625079)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625106)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625111)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625112)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625120)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625123)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625127)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625131)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625132)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625139)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625178)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625179)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(621003)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(621006)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(621011)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(621012)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(621023)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(621025)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(621031)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(621032)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(621039)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625003)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625032)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(620103)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625244)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(621484)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(621640)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625243)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(621641)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625245)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625246)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625025)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(621027)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(620220)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(623395)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(624384)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(624344)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(623451)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(623452)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(623453)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(623391)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(623392)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(624381)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(624382)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(624345)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(624448)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(624375)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(620031)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625020)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625103)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(625125)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(621078)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(624482)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(629141)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(629149)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(629150)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(621639)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(623394)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(626415)\d{10}$/g }],
  },
  {
    bankCode: '26630410',
    bankName: 'BC卡公司',
    patterns: [{ reg: /^(626416)\d{10}$/g }],
  },
  {
    bankCode: '26700860',
    bankName: '丝绸之路银行',
    patterns: [{ reg: /^(621045)\d{10}$/g }],
  },
  {
    bankCode: '26780643',
    bankName: '俄罗斯远东商业银行',
    patterns: [{ reg: /^(621264)\d{10}$/g }],
  },
  {
    bankCode: '26790422',
    bankName: 'CSC',
    patterns: [{ reg: /^(622356)\d{10}$/g }],
  },
  {
    bankCode: '26790422',
    bankName: 'CSC',
    patterns: [{ reg: /^(621234)\d{10}$/g }],
  },
  {
    bankCode: '26790422',
    bankName: 'CSC',
    patterns: [{ reg: /^(62349550)\d{8}$/g }],
  },
  {
    bankCode: '26790422',
    bankName: 'CSC',
    patterns: [{ reg: /^(62235600)\d{8}$/g }],
  },
  {
    bankCode: '26930608',
    bankName: 'Allied Bank',
    patterns: [{ reg: /^(622145)\d{10}$/g }],
  },
  {
    bankCode: '26930608',
    bankName: 'Allied Bank',
    patterns: [{ reg: /^(625013)\d{10}$/g }],
  },
  {
    bankCode: '27030643',
    bankName: 'Commercial bank',
    patterns: [{ reg: /^(62915500)\d{8}$/g }],
  },
  {
    bankCode: '27090392',
    bankName: '日本三菱信用卡公司',
    patterns: [{ reg: /^(622130)\d{10}$/g }],
  },
  {
    bankCode: '27130096',
    bankName: 'Baiduri Bank Berhad',
    patterns: [{ reg: /^(621257)\d{10}$/g }],
  },
  {
    bankCode: '27200704',
    bankName: '越南西贡商业银行',
    patterns: [{ reg: /^(620009)\d{10}$/g }],
  },
  {
    bankCode: '27200704',
    bankName: '越南西贡商业银行',
    patterns: [{ reg: /^(621055)\d{10}$/g }],
  },
  {
    bankCode: '27200704',
    bankName: '越南西贡商业银行',
    patterns: [{ reg: /^(625002)\d{10}$/g }],
  },
  {
    bankCode: '27240608',
    bankName: '菲律宾BDO',
    patterns: [{ reg: /^(625035)\d{10}$/g }],
  },
  {
    bankCode: '27240608',
    bankName: '菲律宾BDO',
    patterns: [{ reg: /^(625033)\d{10}$/g }],
  },
  {
    bankCode: '27250608',
    bankName: '菲律宾RCBC',
    patterns: [{ reg: /^(625007)\d{10}$/g }],
  },
  {
    bankCode: '27300643',
    bankName: 'Gazprombank',
    patterns: [{ reg: /^(6233710)\d{9}$/g }],
  },
  {
    bankCode: '27300643',
    bankName: 'Gazprombank',
    patterns: [{ reg: /^(6233711)\d{9}$/g }],
  },
  {
    bankCode: '27300643',
    bankName: 'Gazprombank',
    patterns: [{ reg: /^(6233712)\d{9}$/g }],
  },
  {
    bankCode: '27300643',
    bankName: 'Gazprombank',
    patterns: [{ reg: /^(6233720)\d{9}$/g }],
  },
  {
    bankCode: '27300643',
    bankName: 'Gazprombank',
    patterns: [{ reg: /^(6233721)\d{9}$/g }],
  },
  {
    bankCode: '27300643',
    bankName: 'Gazprombank',
    patterns: [{ reg: /^(6233722)\d{9}$/g }],
  },
  {
    bankCode: '27300643',
    bankName: 'Gazprombank',
    patterns: [{ reg: /^(6233723)\d{9}$/g }],
  },
  {
    bankCode: '27300643',
    bankName: 'Gazprombank',
    patterns: [{ reg: /^(6233730)\d{9}$/g }],
  },
  {
    bankCode: '27300643',
    bankName: 'Gazprombank',
    patterns: [{ reg: /^(6233731)\d{9}$/g }],
  },
  {
    bankCode: '27300643',
    bankName: 'Gazprombank',
    patterns: [{ reg: /^(6233732)\d{9}$/g }],
  },
  {
    bankCode: '27300643',
    bankName: 'Gazprombank',
    patterns: [{ reg: /^(6233760)\d{9}$/g }],
  },
  {
    bankCode: '27300643',
    bankName: 'Gazprombank',
    patterns: [{ reg: /^(6233761)\d{9}$/g }],
  },
  {
    bankCode: '27300643',
    bankName: 'Gazprombank',
    patterns: [{ reg: /^(6233762)\d{9}$/g }],
  },
  {
    bankCode: '27300643',
    bankName: 'Gazprombank',
    patterns: [{ reg: /^(6243651)\d{9}$/g }],
  },
  {
    bankCode: '27300643',
    bankName: 'Gazprombank',
    patterns: [{ reg: /^(6243652)\d{9}$/g }],
  },
  {
    bankCode: '27300643',
    bankName: 'Gazprombank',
    patterns: [{ reg: /^(6243650)\d{9}$/g }],
  },
  {
    bankCode: '27330524',
    bankName: 'Siddhartha Bank Ltd',
    patterns: [{ reg: /^(62913200)\d{8}$/g }],
  },
  {
    bankCode: '27390404',
    bankName: 'EQUITY BANK KENYA LIMITED',
    patterns: [{ reg: /^(6234280)\d{9}$/g }],
  },
  {
    bankCode: '27390404',
    bankName: 'EQUITY BANK KENYA LIMITED',
    patterns: [{ reg: /^(6234290)\d{9}$/g }],
  },
  {
    bankCode: '27520702',
    bankName: '新加坡星网电子付款私人有限公司',
    patterns: [{ reg: /^(620015)\d{10}$/g }],
  },
  {
    bankCode: '27520702',
    bankName: '新加坡星网电子付款私人有限公司',
    patterns: [{ reg: /^(62446600)\d{8}$/g }],
  },
  {
    bankCode: '27550031',
    bankName: 'Royal Bank Open Stock Company',
    patterns: [{ reg: /^(620024)\d{10}$/g }],
  },
  {
    bankCode: '27550031',
    bankName: 'Royal Bank Open Stock Company',
    patterns: [{ reg: /^(625004)\d{10}$/g }],
  },
  {
    bankCode: '27550031',
    bankName: 'Royal Bank Open Stock Company',
    patterns: [{ reg: /^(621344)\d{13}$/g }],
  },
  {
    bankCode: '27650860',
    bankName: '乌兹别克斯坦INFINBANK',
    patterns: [{ reg: /^(621349)\d{10}$/g }],
  },
  {
    bankCode: '27670643',
    bankName: 'Russian Standard Bank',
    patterns: [{ reg: /^(620108)\d{10}$/g }],
  },
  {
    bankCode: '27670643',
    bankName: 'Russian Standard Bank',
    patterns: [{ reg: /^(6201086)\d{9}$/g }],
  },
  {
    bankCode: '27670643',
    bankName: 'Russian Standard Bank',
    patterns: [{ reg: /^(6201088)\d{9}$/g }],
  },
  {
    bankCode: '27670643',
    bankName: 'Russian Standard Bank',
    patterns: [{ reg: /^(6216846)\d{9}$/g }],
  },
  {
    bankCode: '27670643',
    bankName: 'Russian Standard Bank',
    patterns: [{ reg: /^(6216848)\d{9}$/g }],
  },
  {
    bankCode: '27670643',
    bankName: 'Russian Standard Bank',
    patterns: [{ reg: /^(6250386)\d{9}$/g }],
  },
  {
    bankCode: '27670643',
    bankName: 'Russian Standard Bank',
    patterns: [{ reg: /^(6250388)\d{9}$/g }],
  },
  {
    bankCode: '27710418',
    bankName: 'BCEL',
    patterns: [{ reg: /^(621354)\d{10}$/g }],
  },
  {
    bankCode: '27730417',
    bankName: 'Kyrgyz Investment Credit Bank',
    patterns: [{ reg: /^(623326)\d{10}$/g }],
  },
  {
    bankCode: '27730417',
    bankName: 'Kyrgyz Investment Credit Bank',
    patterns: [{ reg: /^(623327)\d{10}$/g }],
  },
  {
    bankCode: '27730417',
    bankName: 'Kyrgyz Investment Credit Bank',
    patterns: [{ reg: /^(6234610)\d{9}$/g }],
  },
  {
    bankCode: '27730417',
    bankName: 'Kyrgyz Investment Credit Bank',
    patterns: [{ reg: /^(6292740)\d{9}$/g }],
  },
  {
    bankCode: '27860446',
    bankName: '澳门BDA',
    patterns: [{ reg: /^(621274)\d{13}$/g }],
  },
  {
    bankCode: '27860446',
    bankName: '澳门BDA',
    patterns: [{ reg: /^(621324)\d{13}$/g }],
  },
  {
    bankCode: '28020446',
    bankName: '澳门通股份有限公司',
    patterns: [{ reg: /^(620532)\d{10}$/g }],
  },
  {
    bankCode: '28020446',
    bankName: '澳门通股份有限公司',
    patterns: [{ reg: /^(620126)\d{13}$/g }],
  },
  {
    bankCode: '28020446',
    bankName: '澳门通股份有限公司',
    patterns: [{ reg: /^(620537)\d{13}$/g }],
  },
  {
    bankCode: '28030410',
    bankName: '韩国乐天',
    patterns: [{ reg: /^(624313)\d{10}$/g }],
  },
  {
    bankCode: '28030410',
    bankName: '韩国乐天',
    patterns: [{ reg: /^(624333)\d{10}$/g }],
  },
  {
    bankCode: '28030410',
    bankName: '韩国乐天',
    patterns: [{ reg: /^(623358)\d{10}$/g }],
  },
  {
    bankCode: '28030410',
    bankName: '韩国乐天',
    patterns: [{ reg: /^(625904)\d{10}$/g }],
  },
  {
    bankCode: '28040586',
    bankName: '巴基斯坦FAYSAL BANK',
    patterns: [{ reg: /^(621645)\d{10}$/g }],
  },
  {
    bankCode: '28160860',
    bankName: 'OJSCBASIAALLIANCEBANK',
    patterns: [{ reg: /^(621624)\d{10}$/g }],
  },
  {
    bankCode: '28250116',
    bankName: 'Cambodia Mekong Bank PL',
    patterns: [{ reg: /^(623332)\d{10}$/g }],
  },
  {
    bankCode: '28250116',
    bankName: 'Cambodia Mekong Bank PL',
    patterns: [{ reg: /^(624338)\d{10}$/g }],
  },
  {
    bankCode: '28250116',
    bankName: 'Cambodia Mekong Bank PL',
    patterns: [{ reg: /^(624351)\d{10}$/g }],
  },
  {
    bankCode: '28260417',
    bankName: 'OJSC Russian Investment Bank',
    patterns: [{ reg: /^(623339)\d{10}$/g }],
  },
  {
    bankCode: '28260417',
    bankName: 'OJSC Russian Investment Bank',
    patterns: [{ reg: /^(6244760)\d{9}$/g }],
  },
  {
    bankCode: '28280740',
    bankName: 'DE SURINAAMSCHE BANK N.V.',
    patterns: [{ reg: /^(623370)\d{10}$/g }],
  },
  {
    bankCode: '28480410',
    bankName: '"KEB Hana Card Co., Ltd"',
    patterns: [{ reg: /^(624435)\d{10}$/g }],
  },
  {
    bankCode: '28480410',
    bankName: '"KEB Hana Card Co., Ltd"',
    patterns: [{ reg: /^(624436)\d{10}$/g }],
  },
  {
    bankCode: '28480410',
    bankName: '"KEB Hana Card Co., Ltd"',
    patterns: [{ reg: /^(626399)\d{10}$/g }],
  },
  {
    bankCode: '28480410',
    bankName: '"KEB Hana Card Co., Ltd"',
    patterns: [{ reg: /^(626400)\d{10}$/g }],
  },
  {
    bankCode: '28480410',
    bankName: '"KEB Hana Card Co., Ltd"',
    patterns: [{ reg: /^(626409)\d{10}$/g }],
  },
  {
    bankCode: '28530496',
    bankName: 'Mongolia Trade Develop. Bank',
    patterns: [{ reg: /^(621642)\d{10}$/g }],
  },
  {
    bankCode: '28530496',
    bankName: 'Mongolia Trade Develop. Bank',
    patterns: [{ reg: /^(624366)\d{10}$/g }],
  },
  {
    bankCode: '28530496',
    bankName: 'Mongolia Trade Develop. Bank',
    patterns: [{ reg: /^(62445300)\d{8}$/g }],
  },
  {
    bankCode: '28550764',
    bankName: 'Krung Thaj Bank Public Co. Ltd',
    patterns: [{ reg: /^(621654)\d{10}$/g }],
  },
  {
    bankCode: '28590410',
    bankName: '韩国KB',
    patterns: [{ reg: /^(625804)\d{10}$/g }],
  },
  {
    bankCode: '28590410',
    bankName: '韩国KB',
    patterns: [{ reg: /^(623374)\d{10}$/g }],
  },
  {
    bankCode: '28590410',
    bankName: '韩国KB',
    patterns: [{ reg: /^(624370)\d{10}$/g }],
  },
  {
    bankCode: '28590410',
    bankName: '韩国KB',
    patterns: [{ reg: /^(624434)\d{10}$/g }],
  },
  {
    bankCode: '28590410',
    bankName: '韩国KB',
    patterns: [{ reg: /^(626402)\d{10}$/g }],
  },
  {
    bankCode: '28630392',
    bankName: 'Credit Saison',
    patterns: [{ reg: /^(620056)\d{10}$/g }],
  },
  {
    bankCode: '28660410',
    bankName: '韩国三星卡公司',
    patterns: [{ reg: /^(625814)\d{10}$/g }],
  },
  {
    bankCode: '28660410',
    bankName: '韩国三星卡公司',
    patterns: [{ reg: /^(625817)\d{10}$/g }],
  },
  {
    bankCode: '28660410',
    bankName: '韩国三星卡公司',
    patterns: [{ reg: /^(626395)\d{10}$/g }],
  },
  {
    bankCode: '28660410',
    bankName: '韩国三星卡公司',
    patterns: [{ reg: /^(624410)\d{10}$/g }],
  },
  {
    bankCode: '28660410',
    bankName: '韩国三星卡公司',
    patterns: [{ reg: /^(624399)\d{10}$/g }],
  },
  {
    bankCode: '28660410',
    bankName: '韩国三星卡公司',
    patterns: [{ reg: /^(624400)\d{10}$/g }],
  },
  {
    bankCode: '28660410',
    bankName: '韩国三星卡公司',
    patterns: [{ reg: /^(624401)\d{10}$/g }],
  },
  {
    bankCode: '28660410',
    bankName: '韩国三星卡公司',
    patterns: [{ reg: /^(624411)\d{10}$/g }],
  },
  {
    bankCode: '28660410',
    bankName: '韩国三星卡公司',
    patterns: [{ reg: /^(624413)\d{10}$/g }],
  },
  {
    bankCode: '28660410',
    bankName: '韩国三星卡公司',
    patterns: [{ reg: /^(624440)\d{10}$/g }],
  },
  {
    bankCode: '28660410',
    bankName: '韩国三星卡公司',
    patterns: [{ reg: /^(624441)\d{10}$/g }],
  },
  {
    bankCode: '28660410',
    bankName: '韩国三星卡公司',
    patterns: [{ reg: /^(624442)\d{10}$/g }],
  },
  {
    bankCode: '28660410',
    bankName: '韩国三星卡公司',
    patterns: [{ reg: /^(624443)\d{10}$/g }],
  },
  {
    bankCode: '28660410',
    bankName: '韩国三星卡公司',
    patterns: [{ reg: /^(626222)\d{10}$/g }],
  },
  {
    bankCode: '28730834',
    bankName: 'CRDB BANK PLC',
    patterns: [{ reg: /^(623316)\d{10}$/g }],
  },
  {
    bankCode: '28730834',
    bankName: 'CRDB BANK PLC',
    patterns: [{ reg: /^(623317)\d{10}$/g }],
  },
  {
    bankCode: '28730834',
    bankName: 'CRDB BANK PLC',
    patterns: [{ reg: /^(623315)\d{10}$/g }],
  },
  {
    bankCode: '28790784',
    bankName: 'Commercial Bank of Dubai',
    patterns: [{ reg: /^(620079)\d{10}$/g }],
  },
  {
    bankCode: '28790784',
    bankName: 'Commercial Bank of Dubai',
    patterns: [{ reg: /^(620091)\d{10}$/g }],
  },
  {
    bankCode: '28880840',
    bankName: 'The Bancorp Bank',
    patterns: [{ reg: /^(622164)\d{10}$/g }],
  },
  {
    bankCode: '28880840',
    bankName: 'The Bancorp Bank',
    patterns: [{ reg: /^(624357)\d{10}$/g }],
  },
  {
    bankCode: '28990586',
    bankName: '巴基斯坦HabibBank',
    patterns: [{ reg: /^(621657)\d{10}$/g }],
  },
  {
    bankCode: '29010410',
    bankName: '新韩卡公司',
    patterns: [{ reg: /^(623024)\d{10}$/g }],
  },
  {
    bankCode: '29010410',
    bankName: '新韩卡公司',
    patterns: [{ reg: /^(625840)\d{10}$/g }],
  },
  {
    bankCode: '29010410',
    bankName: '新韩卡公司',
    patterns: [{ reg: /^(624331)\d{10}$/g }],
  },
  {
    bankCode: '29010410',
    bankName: '新韩卡公司',
    patterns: [{ reg: /^(624348)\d{10}$/g }],
  },
  {
    bankCode: '29010410',
    bankName: '新韩卡公司',
    patterns: [{ reg: /^(624332)\d{10}$/g }],
  },
  {
    bankCode: '29010410',
    bankName: '新韩卡公司',
    patterns: [{ reg: /^(626394)\d{10}$/g }],
  },
  {
    bankCode: '29010410',
    bankName: '新韩卡公司',
    patterns: [{ reg: /^(624339)\d{10}$/g }],
  },
  {
    bankCode: '29010410',
    bankName: '新韩卡公司',
    patterns: [{ reg: /^(624432)\d{10}$/g }],
  },
  {
    bankCode: '29010410',
    bankName: '新韩卡公司',
    patterns: [{ reg: /^(625841)\d{10}$/g }],
  },
  {
    bankCode: '29010410',
    bankName: '新韩卡公司',
    patterns: [{ reg: /^(624479)\d{10}$/g }],
  },
  {
    bankCode: '29010410',
    bankName: '新韩卡公司',
    patterns: [{ reg: /^(624480)\d{10}$/g }],
  },
  {
    bankCode: '29110418',
    bankName: 'Phongsavanh Bank Limited',
    patterns: [{ reg: /^(621794)\d{10}$/g }],
  },
  {
    bankCode: '29110418',
    bankName: 'Phongsavanh Bank Limited',
    patterns: [{ reg: /^(625944)\d{10}$/g }],
  },
  {
    bankCode: '29120496',
    bankName: 'Capital Bank of Mongolia',
    patterns: [{ reg: /^(621694)\d{10}$/g }],
  },
  {
    bankCode: '29120496',
    bankName: 'Capital Bank of Mongolia',
    patterns: [{ reg: /^(62341602)\d{8}$/g }],
  },
  {
    bankCode: '29120496',
    bankName: 'Capital Bank of Mongolia',
    patterns: [{ reg: /^(62341601)\d{8}$/g }],
  },
  {
    bankCode: '29140268',
    bankName: 'JSC Liberty Bank',
    patterns: [{ reg: /^(6233453)\d{9}$/g }],
  },
  {
    bankCode: '29140268',
    bankName: 'JSC Liberty Bank',
    patterns: [{ reg: /^(6233451)\d{9}$/g }],
  },
  {
    bankCode: '29140268',
    bankName: 'JSC Liberty Bank',
    patterns: [{ reg: /^(6233452)\d{9}$/g }],
  },
  {
    bankCode: '29140268',
    bankName: 'JSC Liberty Bank',
    patterns: [{ reg: /^(623347)\d{10}$/g }],
  },
  {
    bankCode: '29140268',
    bankName: 'JSC Liberty Bank',
    patterns: [{ reg: /^(6233454)\d{9}$/g }],
  },
  {
    bankCode: '29140268',
    bankName: 'JSC Liberty Bank',
    patterns: [{ reg: /^(6233455)\d{9}$/g }],
  },
  {
    bankCode: '29160104',
    bankName: 'Myanmar Oriental Bank Ltd',
    patterns: [{ reg: /^(62443101)\d{8}$/g }],
  },
  {
    bankCode: '29160104',
    bankName: 'Myanmar Oriental Bank Ltd',
    patterns: [{ reg: /^(62443100)\d{8}$/g }],
  },
  {
    bankCode: '29170480',
    bankName: 'The Mauritius Commercial Bank',
    patterns: [{ reg: /^(620129)\d{10}$/g }],
  },
  {
    bankCode: '29180643',
    bankName: 'Non-banking credit',
    patterns: [{ reg: /^(62927300)\d{8}$/g }],
  },
  {
    bankCode: '29270360',
    bankName: '"PT Bank Sinarmas,Tbk"',
    patterns: [{ reg: /^(6214458)\d{9}$/g }],
  },
  {
    bankCode: '29270360',
    bankName: '"PT Bank Sinarmas,Tbk"',
    patterns: [{ reg: /^(6214455)\d{9}$/g }],
  },
  {
    bankCode: '29340268',
    bankName: 'Jsc Basisbank',
    patterns: [{ reg: /^(624428)\d{10}$/g }],
  },
  {
    bankCode: '29340268',
    bankName: 'Jsc Basisbank',
    patterns: [{ reg: /^(624429)\d{10}$/g }],
  },
  {
    bankCode: '29340268',
    bankName: 'Jsc Basisbank',
    patterns: [{ reg: /^(626398)\d{10}$/g }],
  },
  {
    bankCode: '29430398',
    bankName: 'JSC Kazkommertsbank',
    patterns: [{ reg: /^(6234240)\d{9}$/g }],
  },
  {
    bankCode: '29430398',
    bankName: 'JSC Kazkommertsbank',
    patterns: [{ reg: /^(6234241)\d{9}$/g }],
  },
  {
    bankCode: '29430398',
    bankName: 'JSC Kazkommertsbank',
    patterns: [{ reg: /^(6234242)\d{9}$/g }],
  },
  {
    bankCode: '29430398',
    bankName: 'JSC Kazkommertsbank',
    patterns: [{ reg: /^(6244570)\d{9}$/g }],
  },
  {
    bankCode: '29440480',
    bankName: 'Cim Finance Ltd',
    patterns: [{ reg: /^(624306)\d{10}$/g }],
  },
  {
    bankCode: '29440480',
    bankName: 'Cim Finance Ltd',
    patterns: [{ reg: /^(624322)\d{10}$/g }],
  },
  {
    bankCode: '29460180',
    bankName: 'Rawbank S.a.r.l',
    patterns: [{ reg: /^(623300)\d{10}$/g }],
  },
  {
    bankCode: '29470608',
    bankName: 'PVB Card Corporation',
    patterns: [{ reg: /^(623304)\d{10}$/g }],
  },
  {
    bankCode: '29470608',
    bankName: 'PVB Card Corporation',
    patterns: [{ reg: /^(623324)\d{10}$/g }],
  },
  {
    bankCode: '29470608',
    bankName: 'PVB Card Corporation',
    patterns: [{ reg: /^(623302)\d{10}$/g }],
  },
  {
    bankCode: '29470608',
    bankName: 'PVB Card Corporation',
    patterns: [{ reg: /^(623303)\d{10}$/g }],
  },
  {
    bankCode: '29470608',
    bankName: 'PVB Card Corporation',
    patterns: [{ reg: /^(623492)\d{10}$/g }],
  },
  {
    bankCode: '29470608',
    bankName: 'PVB Card Corporation',
    patterns: [{ reg: /^(623398)\d{10}$/g }],
  },
  {
    bankCode: '29470608',
    bankName: 'PVB Card Corporation',
    patterns: [{ reg: /^(62334910)\d{8}$/g }],
  },
  {
    bankCode: '29470608',
    bankName: 'PVB Card Corporation',
    patterns: [{ reg: /^(62334911)\d{8}$/g }],
  },
  {
    bankCode: '29470608',
    bankName: 'PVB Card Corporation',
    patterns: [{ reg: /^(62334913)\d{8}$/g }],
  },
  {
    bankCode: '29470608',
    bankName: 'PVB Card Corporation',
    patterns: [{ reg: /^(62334923)\d{8}$/g }],
  },
  {
    bankCode: '29470608',
    bankName: 'PVB Card Corporation',
    patterns: [{ reg: /^(62334912)\d{8}$/g }],
  },
  {
    bankCode: '29470608',
    bankName: 'PVB Card Corporation',
    patterns: [{ reg: /^(6233493)\d{9}$/g }],
  },
  {
    bankCode: '29470608',
    bankName: 'PVB Card Corporation',
    patterns: [{ reg: /^(6233494)\d{9}$/g }],
  },
  {
    bankCode: '29470608',
    bankName: 'PVB Card Corporation',
    patterns: [{ reg: /^(62334921)\d{8}$/g }],
  },
  {
    bankCode: '29530360',
    bankName: 'PT BANK SINARMAS TBK',
    patterns: [{ reg: /^(6243051)\d{9}$/g }],
  },
  {
    bankCode: '29530360',
    bankName: 'PT BANK SINARMAS TBK',
    patterns: [{ reg: /^(6243052)\d{9}$/g }],
  },
  {
    bankCode: '29600586',
    bankName: 'U Microfinance Bank Limited',
    patterns: [{ reg: /^(623307)\d{10}$/g }],
  },
  {
    bankCode: '29620566',
    bankName: 'Ecobank Nigeria',
    patterns: [{ reg: /^(623311)\d{10}$/g }],
  },
  {
    bankCode: '29630586',
    bankName: 'Al Baraka Bank(Pakistan)',
    patterns: [{ reg: /^(623312)\d{10}$/g }],
  },
  {
    bankCode: '29640860',
    bankName: 'OJSC Hamkor bank',
    patterns: [{ reg: /^(623313)\d{10}$/g }],
  },
  {
    bankCode: '29650410',
    bankName: 'NongHyup Bank',
    patterns: [{ reg: /^(623323)\d{10}$/g }],
  },
  {
    bankCode: '29650410',
    bankName: 'NongHyup Bank',
    patterns: [{ reg: /^(623341)\d{10}$/g }],
  },
  {
    bankCode: '29650410',
    bankName: 'NongHyup Bank',
    patterns: [{ reg: /^(624320)\d{10}$/g }],
  },
  {
    bankCode: '29650410',
    bankName: 'NongHyup Bank',
    patterns: [{ reg: /^(624321)\d{10}$/g }],
  },
  {
    bankCode: '29650410',
    bankName: 'NongHyup Bank',
    patterns: [{ reg: /^(624324)\d{10}$/g }],
  },
  {
    bankCode: '29650410',
    bankName: 'NongHyup Bank',
    patterns: [{ reg: /^(624325)\d{10}$/g }],
  },
  {
    bankCode: '29650410',
    bankName: 'NongHyup Bank',
    patterns: [{ reg: /^(624387)\d{10}$/g }],
  },
  {
    bankCode: '29650410',
    bankName: 'NongHyup Bank',
    patterns: [{ reg: /^(624388)\d{10}$/g }],
  },
  {
    bankCode: '29650410',
    bankName: 'NongHyup Bank',
    patterns: [{ reg: /^(624349)\d{10}$/g }],
  },
  {
    bankCode: '29650410',
    bankName: 'NongHyup Bank',
    patterns: [{ reg: /^(624350)\d{10}$/g }],
  },
  {
    bankCode: '29660566',
    bankName: 'Fidelity Bank Plc',
    patterns: [{ reg: /^(623314)\d{10}$/g }],
  },
  {
    bankCode: '29700116',
    bankName: 'ACLEDA Bank Plc.',
    patterns: [{ reg: /^(624490)\d{10}$/g }],
  },
  {
    bankCode: '29700116',
    bankName: 'ACLEDA Bank Plc.',
    patterns: [{ reg: /^(624494)\d{10}$/g }],
  },
  {
    bankCode: '29710860',
    bankName: 'Davr Bank',
    patterns: [{ reg: /^(623325)\d{10}$/g }],
  },
  {
    bankCode: '29740116',
    bankName: 'Advanced Bank of Asia Ltd.',
    patterns: [{ reg: /^(623375)\d{10}$/g }],
  },
  {
    bankCode: '29740116',
    bankName: 'Advanced Bank of Asia Ltd.',
    patterns: [{ reg: /^(629144)\d{10}$/g }],
  },
  {
    bankCode: '29810480',
    bankName: 'State Bank of Mauritius',
    patterns: [{ reg: /^(623331)\d{10}$/g }],
  },
  {
    bankCode: '29810480',
    bankName: 'State Bank of Mauritius',
    patterns: [{ reg: /^(623348)\d{10}$/g }],
  },
  {
    bankCode: '29810480',
    bankName: 'State Bank of Mauritius',
    patterns: [{ reg: /^(62641000)\d{8}$/g }],
  },
  {
    bankCode: '29810480',
    bankName: 'State Bank of Mauritius',
    patterns: [{ reg: /^(62621700)\d{8}$/g }],
  },
  {
    bankCode: '29820028',
    bankName: 'Global Bank of Commerce Ltd',
    patterns: [{ reg: /^(6243550)\d{9}$/g }],
  },
  {
    bankCode: '29820028',
    bankName: 'Global Bank of Commerce Ltd',
    patterns: [{ reg: /^(6243551)\d{9}$/g }],
  },
  {
    bankCode: '29820028',
    bankName: 'Global Bank of Commerce Ltd',
    patterns: [{ reg: /^(6243560)\d{9}$/g }],
  },
  {
    bankCode: '29820028',
    bankName: 'Global Bank of Commerce Ltd',
    patterns: [{ reg: /^(6243561)\d{9}$/g }],
  },
  {
    bankCode: '29830398',
    bankName: 'JSC ATFBank',
    patterns: [{ reg: /^(623336)\d{10}$/g }],
  },
  {
    bankCode: '29830398',
    bankName: 'JSC ATFBank',
    patterns: [{ reg: /^(623337)\d{10}$/g }],
  },
  {
    bankCode: '29830398',
    bankName: 'JSC ATFBank',
    patterns: [{ reg: /^(624323)\d{10}$/g }],
  },
  {
    bankCode: '29830398',
    bankName: 'JSC ATFBank',
    patterns: [{ reg: /^(623338)\d{10}$/g }],
  },
  {
    bankCode: '29830417',
    bankName: 'Optima Bank OJSC',
    patterns: [{ reg: /^(623360)\d{10}$/g }],
  },
  {
    bankCode: '29900031',
    bankName: 'International BankofAzerbaijan',
    patterns: [{ reg: /^(623344)\d{10}$/g }],
  },
  {
    bankCode: '29900031',
    bankName: 'International BankofAzerbaijan',
    patterns: [{ reg: /^(6233461)\d{9}$/g }],
  },
  {
    bankCode: '29900031',
    bankName: 'International BankofAzerbaijan',
    patterns: [{ reg: /^(6233462)\d{9}$/g }],
  },
  {
    bankCode: '29900031',
    bankName: 'International BankofAzerbaijan',
    patterns: [{ reg: /^(6233463)\d{9}$/g }],
  },
  {
    bankCode: '29920496',
    bankName: 'State bank',
    patterns: [{ reg: /^(62335201)\d{8}$/g }],
  },
  {
    bankCode: '29920496',
    bankName: 'State bank',
    patterns: [{ reg: /^(62335202)\d{8}$/g }],
  },
  {
    bankCode: '29920496',
    bankName: 'State bank',
    patterns: [{ reg: /^(62335203)\d{8}$/g }],
  },
  {
    bankCode: '30020524',
    bankName: 'Himalayan Bank Limited',
    patterns: [{ reg: /^(623499)\d{10}$/g }],
  },
  {
    bankCode: '30030762',
    bankName: 'CJSC “Spitamen Bank”',
    patterns: [{ reg: /^(62335101)\d{8}$/g }],
  },
  {
    bankCode: '30030762',
    bankName: 'CJSC “Spitamen Bank”',
    patterns: [{ reg: /^(62335102)\d{8}$/g }],
  },
  {
    bankCode: '30030762',
    bankName: 'CJSC “Spitamen Bank”',
    patterns: [{ reg: /^(62335103)\d{8}$/g }],
  },
  {
    bankCode: '30030762',
    bankName: 'CJSC “Spitamen Bank”',
    patterns: [{ reg: /^(62335104)\d{8}$/g }],
  },
  {
    bankCode: '30030762',
    bankName: 'CJSC “Spitamen Bank”',
    patterns: [{ reg: /^(62335105)\d{8}$/g }],
  },
  {
    bankCode: '30030762',
    bankName: 'CJSC “Spitamen Bank”',
    patterns: [{ reg: /^(62335106)\d{8}$/g }],
  },
  {
    bankCode: '30030762',
    bankName: 'CJSC “Spitamen Bank”',
    patterns: [{ reg: /^(62335107)\d{8}$/g }],
  },
  {
    bankCode: '30030762',
    bankName: 'CJSC “Spitamen Bank”',
    patterns: [{ reg: /^(62335108)\d{8}$/g }],
  },
  {
    bankCode: '30040643',
    bankName: 'Light Bank',
    patterns: [{ reg: /^(6233531)\d{9}$/g }],
  },
  {
    bankCode: '30040643',
    bankName: 'Light Bank',
    patterns: [{ reg: /^(6233532)\d{9}$/g }],
  },
  {
    bankCode: '30040643',
    bankName: 'Light Bank',
    patterns: [{ reg: /^(6233533)\d{9}$/g }],
  },
  {
    bankCode: '30040643',
    bankName: 'Light Bank',
    patterns: [{ reg: /^(6233534)\d{9}$/g }],
  },
  {
    bankCode: '30040643',
    bankName: 'Light Bank',
    patterns: [{ reg: /^(6233535)\d{9}$/g }],
  },
  {
    bankCode: '30040643',
    bankName: 'Light Bank',
    patterns: [{ reg: /^(6233536)\d{9}$/g }],
  },
  {
    bankCode: '30040643',
    bankName: 'Light Bank',
    patterns: [{ reg: /^(6234980)\d{9}$/g }],
  },
  {
    bankCode: '30040643',
    bankName: 'Light Bank',
    patterns: [{ reg: /^(6234981)\d{9}$/g }],
  },
  {
    bankCode: '30040643',
    bankName: 'Light Bank',
    patterns: [{ reg: /^(6233537)\d{9}$/g }],
  },
  {
    bankCode: '30040643',
    bankName: 'Light Bank',
    patterns: [{ reg: /^(6233538)\d{9}$/g }],
  },
  {
    bankCode: '30040643',
    bankName: 'Light Bank',
    patterns: [{ reg: /^(6233539)\d{9}$/g }],
  },
  {
    bankCode: '30090104',
    bankName: 'Co-Operative Bank Limited',
    patterns: [{ reg: /^(623493)\d{10}$/g }],
  },
  {
    bankCode: '30090104',
    bankName: 'Co-Operative Bank Limited',
    patterns: [{ reg: /^(62441901)\d{8}$/g }],
  },
  {
    bankCode: '30090104',
    bankName: 'Co-Operative Bank Limited',
    patterns: [{ reg: /^(62441900)\d{8}$/g }],
  },
  {
    bankCode: '30090104',
    bankName: 'Co-Operative Bank Limited',
    patterns: [{ reg: /^(62441902)\d{8}$/g }],
  },
  {
    bankCode: '30170392',
    bankName: 'Travelex Japan KK',
    patterns: [{ reg: /^(6221441)\d{9}$/g }],
  },
  {
    bankCode: '30180586',
    bankName: 'Bank AL Habib Limited',
    patterns: [{ reg: /^(623359)\d{10}$/g }],
  },
  {
    bankCode: '30230036',
    bankName: 'Bank of China(Australia)',
    patterns: [{ reg: /^(623362)\d{10}$/g }],
  },
  {
    bankCode: '30280643',
    bankName: 'OSJC MTS Bank',
    patterns: [{ reg: /^(6243420)\d{9}$/g }],
  },
  {
    bankCode: '30280643',
    bankName: 'OSJC MTS Bank',
    patterns: [{ reg: /^(6243421)\d{9}$/g }],
  },
  {
    bankCode: '30280643',
    bankName: 'OSJC MTS Bank',
    patterns: [{ reg: /^(6243422)\d{9}$/g }],
  },
  {
    bankCode: '30280643',
    bankName: 'OSJC MTS Bank',
    patterns: [{ reg: /^(6243423)\d{9}$/g }],
  },
  {
    bankCode: '30280643',
    bankName: 'OSJC MTS Bank',
    patterns: [{ reg: /^(6243424)\d{9}$/g }],
  },
  {
    bankCode: '30280643',
    bankName: 'OSJC MTS Bank',
    patterns: [{ reg: /^(6243425)\d{9}$/g }],
  },
  {
    bankCode: '30350084',
    bankName: 'Heritage International Bank',
    patterns: [{ reg: /^(623369)\d{10}$/g }],
  },
  {
    bankCode: '30400762',
    bankName: 'OJSC Tojiksodirotbank',
    patterns: [{ reg: /^(6233681)\d{9}$/g }],
  },
  {
    bankCode: '30420840',
    bankName: 'MetaBank',
    patterns: [{ reg: /^(624364)\d{10}$/g }],
  },
  {
    bankCode: '30430404',
    bankName: 'KCB BANK LIMITED',
    patterns: [{ reg: /^(62348700)\d{8}$/g }],
  },
  {
    bankCode: '30430404',
    bankName: 'KCB BANK LIMITED',
    patterns: [{ reg: /^(62928400)\d{8}$/g }],
  },
  {
    bankCode: '30470418',
    bankName: 'Banque Pour Le Commerce',
    patterns: [{ reg: /^(624352)\d{10}$/g }],
  },
  {
    bankCode: '30470418',
    bankName: 'Banque Pour Le Commerce',
    patterns: [{ reg: /^(624353)\d{10}$/g }],
  },
  {
    bankCode: '30470418',
    bankName: 'Banque Pour Le Commerce',
    patterns: [{ reg: /^(624354)\d{10}$/g }],
  },
  {
    bankCode: '30590586',
    bankName: 'Bank Alfalah Limited',
    patterns: [{ reg: /^(623381)\d{10}$/g }],
  },
  {
    bankCode: '30590586',
    bankName: 'Bank Alfalah Limited',
    patterns: [{ reg: /^(62340500)\d{8}$/g }],
  },
  {
    bankCode: '30590586',
    bankName: 'Bank Alfalah Limited',
    patterns: [{ reg: /^(623402)\d{10}$/g }],
  },
  {
    bankCode: '30650840',
    bankName: 'NXSystems Limited',
    patterns: [{ reg: /^(6221740)\d{9}$/g }],
  },
  {
    bankCode: '30700887',
    bankName: 'Cooperative & Agricultural',
    patterns: [{ reg: /^(623380)\d{10}$/g }],
  },
  {
    bankCode: '30700887',
    bankName: 'Cooperative & Agricultural',
    patterns: [{ reg: /^(624367)\d{10}$/g }],
  },
  {
    bankCode: '30770643',
    bankName: 'Open Joint-stock Company',
    patterns: [{ reg: /^(6233780)\d{9}$/g }],
  },
  {
    bankCode: '30770643',
    bankName: 'Open Joint-stock Company',
    patterns: [{ reg: /^(6233781)\d{9}$/g }],
  },
  {
    bankCode: '30780024',
    bankName: '"BANCO SOL,S.A."',
    patterns: [{ reg: /^(6233840)\d{9}$/g }],
  },
  {
    bankCode: '30780024',
    bankName: '"BANCO SOL,S.A."',
    patterns: [{ reg: /^(6233841)\d{9}$/g }],
  },
  {
    bankCode: '30780024',
    bankName: '"BANCO SOL,S.A."',
    patterns: [{ reg: /^(623385)\d{10}$/g }],
  },
  {
    bankCode: '30810398',
    bankName: 'Subsidiary Bank Sberbank RUS',
    patterns: [{ reg: /^(6233820)\d{9}$/g }],
  },
  {
    bankCode: '30810398',
    bankName: 'Subsidiary Bank Sberbank RUS',
    patterns: [{ reg: /^(6233821)\d{9}$/g }],
  },
  {
    bankCode: '30810398',
    bankName: 'Subsidiary Bank Sberbank RUS',
    patterns: [{ reg: /^(6233822)\d{9}$/g }],
  },
  {
    bankCode: '30810398',
    bankName: 'Subsidiary Bank Sberbank RUS',
    patterns: [{ reg: /^(6233823)\d{9}$/g }],
  },
  {
    bankCode: '30810398',
    bankName: 'Subsidiary Bank Sberbank RUS',
    patterns: [{ reg: /^(6233824)\d{9}$/g }],
  },
  {
    bankCode: '30850418',
    bankName: '"Lao China Bank Co.,Ltd"',
    patterns: [{ reg: /^(623383)\d{10}$/g }],
  },
  {
    bankCode: '30850418',
    bankName: '"Lao China Bank Co.,Ltd"',
    patterns: [{ reg: /^(623386)\d{10}$/g }],
  },
  {
    bankCode: '30850418',
    bankName: '"Lao China Bank Co.,Ltd"',
    patterns: [{ reg: /^(623388)\d{10}$/g }],
  },
  {
    bankCode: '30880410',
    bankName: 'Hyundaicard',
    patterns: [{ reg: /^(624368)\d{10}$/g }],
  },
  {
    bankCode: '30880410',
    bankName: 'Hyundaicard',
    patterns: [{ reg: /^(624376)\d{10}$/g }],
  },
  {
    bankCode: '30880410',
    bankName: 'Hyundaicard',
    patterns: [{ reg: /^(624377)\d{10}$/g }],
  },
  {
    bankCode: '30880410',
    bankName: 'Hyundaicard',
    patterns: [{ reg: /^(624378)\d{10}$/g }],
  },
  {
    bankCode: '31020643',
    bankName: 'Bank of Moscow OJSC',
    patterns: [{ reg: /^(6233960)\d{9}$/g }],
  },
  {
    bankCode: '31020643',
    bankName: 'Bank of Moscow OJSC',
    patterns: [{ reg: /^(6233961)\d{9}$/g }],
  },
  {
    bankCode: '31090586',
    bankName: 'Sindh Bank Limited',
    patterns: [{ reg: /^(623389)\d{10}$/g }],
  },
  {
    bankCode: '31150643',
    bankName: 'Russian Agricultural Bank',
    patterns: [{ reg: /^(6234460)\d{9}$/g }],
  },
  {
    bankCode: '31150643',
    bankName: 'Russian Agricultural Bank',
    patterns: [{ reg: /^(6234461)\d{9}$/g }],
  },
  {
    bankCode: '31150643',
    bankName: 'Russian Agricultural Bank',
    patterns: [{ reg: /^(6234462)\d{9}$/g }],
  },
  {
    bankCode: '31340643',
    bankName: 'PJSC Bank ZENIT',
    patterns: [{ reg: /^(6234470)\d{9}$/g }],
  },
  {
    bankCode: '31360398',
    bankName: 'Subsidiary JSC VTB Bank',
    patterns: [{ reg: /^(623417)\d{10}$/g }],
  },
  {
    bankCode: '31360398',
    bankName: 'Subsidiary JSC VTB Bank',
    patterns: [{ reg: /^(623418)\d{10}$/g }],
  },
  {
    bankCode: '31360398',
    bankName: 'Subsidiary JSC VTB Bank',
    patterns: [{ reg: /^(623419)\d{10}$/g }],
  },
  {
    bankCode: '31360398',
    bankName: 'Subsidiary JSC VTB Bank',
    patterns: [{ reg: /^(623420)\d{10}$/g }],
  },
  {
    bankCode: '31360398',
    bankName: 'Subsidiary JSC VTB Bank',
    patterns: [{ reg: /^(623421)\d{10}$/g }],
  },
  {
    bankCode: '31360398',
    bankName: 'Subsidiary JSC VTB Bank',
    patterns: [{ reg: /^(629180)\d{10}$/g }],
  },
  {
    bankCode: '31360398',
    bankName: 'Subsidiary JSC VTB Bank',
    patterns: [{ reg: /^(6234211)\d{9}$/g }],
  },
  {
    bankCode: '31360398',
    bankName: 'Subsidiary JSC VTB Bank',
    patterns: [{ reg: /^(6291802)\d{9}$/g }],
  },
  {
    bankCode: '31370400',
    bankName: 'international crads company',
    patterns: [{ reg: /^(623410)\d{10}$/g }],
  },
  {
    bankCode: '31370400',
    bankName: 'international crads company',
    patterns: [{ reg: /^(623411)\d{10}$/g }],
  },
  {
    bankCode: '31370400',
    bankName: 'international crads company',
    patterns: [{ reg: /^(624392)\d{10}$/g }],
  },
  {
    bankCode: '31370400',
    bankName: 'international crads company',
    patterns: [{ reg: /^(624393)\d{10}$/g }],
  },
  {
    bankCode: '31370400',
    bankName: 'international crads company',
    patterns: [{ reg: /^(624394)\d{10}$/g }],
  },
  {
    bankCode: '31370400',
    bankName: 'international crads company',
    patterns: [{ reg: /^(624395)\d{10}$/g }],
  },
  {
    bankCode: '31370400',
    bankName: 'international crads company',
    patterns: [{ reg: /^(624396)\d{10}$/g }],
  },
  {
    bankCode: '31370400',
    bankName: 'international crads company',
    patterns: [{ reg: /^(62916100)\d{8}$/g }],
  },
  {
    bankCode: '31370400',
    bankName: 'international crads company',
    patterns: [{ reg: /^(62916101)\d{8}$/g }],
  },
  {
    bankCode: '31510643',
    bankName: 'Credit Ural Bank Joint Stock',
    patterns: [{ reg: /^(6234090)\d{9}$/g }],
  },
  {
    bankCode: '31510643',
    bankName: 'Credit Ural Bank Joint Stock',
    patterns: [{ reg: /^(6243900)\d{9}$/g }],
  },
  {
    bankCode: '31510643',
    bankName: 'Credit Ural Bank Joint Stock',
    patterns: [{ reg: /^(6243901)\d{9}$/g }],
  },
  {
    bankCode: '31510643',
    bankName: 'Credit Ural Bank Joint Stock',
    patterns: [{ reg: /^(6243902)\d{9}$/g }],
  },
  {
    bankCode: '31570288',
    bankName: 'FIDELITY BANK GHANA LIMITED',
    patterns: [{ reg: /^(6233990)\d{9}$/g }],
  },
  {
    bankCode: '31570288',
    bankName: 'FIDELITY BANK GHANA LIMITED',
    patterns: [{ reg: /^(6233991)\d{9}$/g }],
  },
  {
    bankCode: '31600702',
    bankName: 'DBS Bank Ltd',
    patterns: [{ reg: /^(621052)\d{10}$/g }],
  },
  {
    bankCode: '31700496',
    bankName: 'XacBank',
    patterns: [{ reg: /^(62341401)\d{8}$/g }],
  },
  {
    bankCode: '31700496',
    bankName: 'XacBank',
    patterns: [{ reg: /^(62341402)\d{8}$/g }],
  },
  {
    bankCode: '31700496',
    bankName: 'XacBank',
    patterns: [{ reg: /^(62341403)\d{8}$/g }],
  },
  {
    bankCode: '31700496',
    bankName: 'XacBank',
    patterns: [{ reg: /^(623414)\d{10}$/g }],
  },
  {
    bankCode: '31700496',
    bankName: 'XacBank',
    patterns: [{ reg: /^(62341407)\d{8}$/g }],
  },
  {
    bankCode: '31700496',
    bankName: 'XacBank',
    patterns: [{ reg: /^(62341408)\d{8}$/g }],
  },
  {
    bankCode: '31700496',
    bankName: 'XacBank',
    patterns: [{ reg: /^(62341409)\d{8}$/g }],
  },
  {
    bankCode: '31730702',
    bankName: 'DBS Bank Ltd',
    patterns: [{ reg: /^(624391)\d{10}$/g }],
  },
  {
    bankCode: '31760702',
    bankName: 'Sinopay（Singapore）PTE Ltd',
    patterns: [{ reg: /^(6234151)\d{9}$/g }],
  },
  {
    bankCode: '31760702',
    bankName: 'Sinopay（Singapore）PTE Ltd',
    patterns: [{ reg: /^(6234150)\d{9}$/g }],
  },
  {
    bankCode: '31760702',
    bankName: 'Sinopay（Singapore）PTE Ltd',
    patterns: [{ reg: /^(6234153)\d{12}$/g }],
  },
  {
    bankCode: '31760702',
    bankName: 'Sinopay（Singapore）PTE Ltd',
    patterns: [{ reg: /^(6234152)\d{9}$/g }],
  },
  {
    bankCode: '31760702',
    bankName: 'Sinopay（Singapore）PTE Ltd',
    patterns: [{ reg: /^(6234154)\d{9}$/g }],
  },
  {
    bankCode: '31870524',
    bankName: 'SmartChoice Technologies',
    patterns: [{ reg: /^(623459)\d{13}$/g }],
  },
  {
    bankCode: '31870524',
    bankName: 'SmartChoice Technologies',
    patterns: [{ reg: /^(623477)\d{13}$/g }],
  },
  {
    bankCode: '31910643',
    bankName: 'JSCB Primorye',
    patterns: [{ reg: /^(6234250)\d{9}$/g }],
  },
  {
    bankCode: '31910643',
    bankName: 'JSCB Primorye',
    patterns: [{ reg: /^(6234251)\d{9}$/g }],
  },
  {
    bankCode: '31910643',
    bankName: 'JSCB Primorye',
    patterns: [{ reg: /^(6234252)\d{9}$/g }],
  },
  {
    bankCode: '31910643',
    bankName: 'JSCB Primorye',
    patterns: [{ reg: /^(6234253)\d{9}$/g }],
  },
  {
    bankCode: '31920764',
    bankName: 'Kiatnakin Bank Pubulic CL',
    patterns: [{ reg: /^(6234220)\d{9}$/g }],
  },
  {
    bankCode: '31930404',
    bankName: 'Habib Bank Limited',
    patterns: [{ reg: /^(623448)\d{10}$/g }],
  },
  {
    bankCode: '31930480',
    bankName: 'HBL',
    patterns: [{ reg: /^(6234270)\d{9}$/g }],
  },
  {
    bankCode: '31930690',
    bankName: 'Habib Bank Limited',
    patterns: [{ reg: /^(623443)\d{10}$/g }],
  },
  {
    bankCode: '31950643',
    bankName: 'Joint-Stock Commercial Bank',
    patterns: [{ reg: /^(6244092)\d{9}$/g }],
  },
  {
    bankCode: '31950643',
    bankName: 'Joint-Stock Commercial Bank',
    patterns: [{ reg: /^(6244096)\d{9}$/g }],
  },
  {
    bankCode: '31960764',
    bankName: 'Bangkok Bank Public Company Li',
    patterns: [{ reg: /^(623355)\d{10}$/g }],
  },
  {
    bankCode: '32040178',
    bankName: 'Banque S C pour Afrique',
    patterns: [{ reg: /^(62344901)\d{8}$/g }],
  },
  {
    bankCode: '32040178',
    bankName: 'Banque S C pour Afrique',
    patterns: [{ reg: /^(62441701)\d{8}$/g }],
  },
  {
    bankCode: '32040178',
    bankName: 'Banque S C pour Afrique',
    patterns: [{ reg: /^(62347800)\d{8}$/g }],
  },
  {
    bankCode: '32040178',
    bankName: 'Banque S C pour Afrique',
    patterns: [{ reg: /^(62927800)\d{8}$/g }],
  },
  {
    bankCode: '32060643',
    bankName: 'OJS SCBP Primsotsbank',
    patterns: [{ reg: /^(6234320)\d{9}$/g }],
  },
  {
    bankCode: '32060643',
    bankName: 'OJS SCBP Primsotsbank',
    patterns: [{ reg: /^(6234321)\d{9}$/g }],
  },
  {
    bankCode: '32060643',
    bankName: 'OJS SCBP Primsotsbank',
    patterns: [{ reg: /^(6234322)\d{9}$/g }],
  },
  {
    bankCode: '32060643',
    bankName: 'OJS SCBP Primsotsbank',
    patterns: [{ reg: /^(6234323)\d{9}$/g }],
  },
  {
    bankCode: '32090104',
    bankName: 'AGD Bank Ltd',
    patterns: [{ reg: /^(6234330)\d{9}$/g }],
  },
  {
    bankCode: '32100764',
    bankName: 'Land and Houses Bank PCL',
    patterns: [{ reg: /^(6234300)\d{12}$/g }],
  },
  {
    bankCode: '32200643',
    bankName: 'Russian Regional Development',
    patterns: [{ reg: /^(62915700)\d{8}$/g }],
  },
  {
    bankCode: '32230643',
    bankName: 'Conservative commercial bank',
    patterns: [{ reg: /^(6234350)\d{9}$/g }],
  },
  {
    bankCode: '32230643',
    bankName: 'Conservative commercial bank',
    patterns: [{ reg: /^(6234351)\d{9}$/g }],
  },
  {
    bankCode: '32230643',
    bankName: 'Conservative commercial bank',
    patterns: [{ reg: /^(6234352)\d{9}$/g }],
  },
  {
    bankCode: '32270784',
    bankName: 'Noor Bank PJSC',
    patterns: [{ reg: /^(6234420)\d{9}$/g }],
  },
  {
    bankCode: '32280643',
    bankName: 'Joint-Stock bank',
    patterns: [{ reg: /^(6234450)\d{9}$/g }],
  },
  {
    bankCode: '32280643',
    bankName: 'Joint-Stock bank',
    patterns: [{ reg: /^(6234451)\d{9}$/g }],
  },
  {
    bankCode: '32280643',
    bankName: 'Joint-Stock bank',
    patterns: [{ reg: /^(6234452)\d{9}$/g }],
  },
  {
    bankCode: '32280643',
    bankName: 'Joint-Stock bank',
    patterns: [{ reg: /^(6234453)\d{9}$/g }],
  },
  {
    bankCode: '32320586',
    bankName: 'National Bank of Pakistan',
    patterns: [{ reg: /^(62438500)\d{8}$/g }],
  },
  {
    bankCode: '32390180',
    bankName: 'PROCREDIT BANK CONGO',
    patterns: [{ reg: /^(62343800)\d{8}$/g }],
  },
  {
    bankCode: '32430784',
    bankName: 'AL HAIL ORIX FINANCE',
    patterns: [{ reg: /^(623471)\d{10}$/g }],
  },
  {
    bankCode: '32460404',
    bankName: 'National Bank of Kenya Limited',
    patterns: [{ reg: /^(62344000)\d{8}$/g }],
  },
  {
    bankCode: '32460404',
    bankName: 'National Bank of Kenya Limited',
    patterns: [{ reg: /^(62344001)\d{8}$/g }],
  },
  {
    bankCode: '32460404',
    bankName: 'National Bank of Kenya Limited',
    patterns: [{ reg: /^(62441500)\d{8}$/g }],
  },
  {
    bankCode: '32460404',
    bankName: 'National Bank of Kenya Limited',
    patterns: [{ reg: /^(62441501)\d{8}$/g }],
  },
  {
    bankCode: '32460404',
    bankName: 'National Bank of Kenya Limited',
    patterns: [{ reg: /^(62344100)\d{8}$/g }],
  },
  {
    bankCode: '32570484',
    bankName: 'Financiera Cuallix',
    patterns: [{ reg: /^(624416)\d{10}$/g }],
  },
  {
    bankCode: '32570484',
    bankName: 'Financiera Cuallix',
    patterns: [{ reg: /^(6244166)\d{9}$/g }],
  },
  {
    bankCode: '32570484',
    bankName: 'Financiera Cuallix',
    patterns: [{ reg: /^(6244160)\d{9}$/g }],
  },
  {
    bankCode: '32570484',
    bankName: 'Financiera Cuallix',
    patterns: [{ reg: /^(6244161)\d{9}$/g }],
  },
  {
    bankCode: '32570484',
    bankName: 'Financiera Cuallix',
    patterns: [{ reg: /^(6244162)\d{9}$/g }],
  },
  {
    bankCode: '32570484',
    bankName: 'Financiera Cuallix',
    patterns: [{ reg: /^(6244163)\d{9}$/g }],
  },
  {
    bankCode: '32570484',
    bankName: 'Financiera Cuallix',
    patterns: [{ reg: /^(6244164)\d{9}$/g }],
  },
  {
    bankCode: '32590548',
    bankName: 'Asia Merchant Bank Limited',
    patterns: [{ reg: /^(6234440)\d{9}$/g }],
  },
  {
    bankCode: '32590548',
    bankName: 'Asia Merchant Bank Limited',
    patterns: [{ reg: /^(6234441)\d{9}$/g }],
  },
  {
    bankCode: '32590548',
    bankName: 'Asia Merchant Bank Limited',
    patterns: [{ reg: /^(6292710)\d{9}$/g }],
  },
  {
    bankCode: '32590548',
    bankName: 'Asia Merchant Bank Limited',
    patterns: [{ reg: /^(6292711)\d{9}$/g }],
  },
  {
    bankCode: '32640398',
    bankName: 'Tsesnabank Joint Stock Company',
    patterns: [{ reg: /^(6234670)\d{9}$/g }],
  },
  {
    bankCode: '32640398',
    bankName: 'Tsesnabank Joint Stock Company',
    patterns: [{ reg: /^(6234671)\d{9}$/g }],
  },
  {
    bankCode: '32640398',
    bankName: 'Tsesnabank Joint Stock Company',
    patterns: [{ reg: /^(6263740)\d{9}$/g }],
  },
  {
    bankCode: '32640398',
    bankName: 'Tsesnabank Joint Stock Company',
    patterns: [{ reg: /^(6263741)\d{9}$/g }],
  },
  {
    bankCode: '32680048',
    bankName: 'CrediMax',
    patterns: [{ reg: /^(624418)\d{10}$/g }],
  },
  {
    bankCode: '32710368',
    bankName: 'Al Tail Money Transfer',
    patterns: [{ reg: /^(6292790)\d{9}$/g }],
  },
  {
    bankCode: '32710368',
    bankName: 'Al Tail Money Transfer',
    patterns: [{ reg: /^(6292791)\d{9}$/g }],
  },
  {
    bankCode: '32710368',
    bankName: 'Al Tail Money Transfer',
    patterns: [{ reg: /^(6292720)\d{9}$/g }],
  },
  {
    bankCode: '32770646',
    bankName: 'BRD Commercal Bank Limited',
    patterns: [{ reg: /^(62345500)\d{8}$/g }],
  },
  {
    bankCode: '32780480',
    bankName: 'ABC BANKING CORPORATION LTD',
    patterns: [{ reg: /^(62346000)\d{8}$/g }],
  },
  {
    bankCode: '32780480',
    bankName: 'ABC BANKING CORPORATION LTD',
    patterns: [{ reg: /^(62346001)\d{8}$/g }],
  },
  {
    bankCode: '32880586',
    bankName: 'MCB Islamic Bank Limited',
    patterns: [{ reg: /^(62340410)\d{8}$/g }],
  },
  {
    bankCode: '32880586',
    bankName: 'MCB Islamic Bank Limited',
    patterns: [{ reg: /^(62340420)\d{8}$/g }],
  },
  {
    bankCode: '32920762',
    bankName: 'CJSC Spitamen Bank',
    patterns: [{ reg: /^(6234620)\d{9}$/g }],
  },
  {
    bankCode: '32920762',
    bankName: 'CJSC Spitamen Bank',
    patterns: [{ reg: /^(6234621)\d{9}$/g }],
  },
  {
    bankCode: '32920762',
    bankName: 'CJSC Spitamen Bank',
    patterns: [{ reg: /^(6234622)\d{9}$/g }],
  },
  {
    bankCode: '32920762',
    bankName: 'CJSC Spitamen Bank',
    patterns: [{ reg: /^(6234623)\d{9}$/g }],
  },
  {
    bankCode: '32950860',
    bankName: 'PJSCB ORIENT FINANS',
    patterns: [{ reg: /^(62348100)\d{8}$/g }],
  },
  {
    bankCode: '32950860',
    bankName: 'PJSCB ORIENT FINANS',
    patterns: [{ reg: /^(62348101)\d{8}$/g }],
  },
  {
    bankCode: '33030410',
    bankName: '"Woori Card Co.,Ltd"',
    patterns: [{ reg: /^(620120)\d{10}$/g }],
  },
  {
    bankCode: '33030410',
    bankName: '"Woori Card Co.,Ltd"',
    patterns: [{ reg: /^(625320)\d{10}$/g }],
  },
  {
    bankCode: '33030410',
    bankName: '"Woori Card Co.,Ltd"',
    patterns: [{ reg: /^(621220)\d{10}$/g }],
  },
  {
    bankCode: '33030410',
    bankName: '"Woori Card Co.,Ltd"',
    patterns: [{ reg: /^(624346)\d{10}$/g }],
  },
  {
    bankCode: '33030410',
    bankName: '"Woori Card Co.,Ltd"',
    patterns: [{ reg: /^(624373)\d{10}$/g }],
  },
  {
    bankCode: '33030410',
    bankName: '"Woori Card Co.,Ltd"',
    patterns: [{ reg: /^(624374)\d{10}$/g }],
  },
  {
    bankCode: '33030410',
    bankName: '"Woori Card Co.,Ltd"',
    patterns: [{ reg: /^(624420)\d{10}$/g }],
  },
  {
    bankCode: '33030410',
    bankName: '"Woori Card Co.,Ltd"',
    patterns: [{ reg: /^(623379)\d{10}$/g }],
  },
  {
    bankCode: '33030410',
    bankName: '"Woori Card Co.,Ltd"',
    patterns: [{ reg: /^(624424)\d{10}$/g }],
  },
  {
    bankCode: '33030410',
    bankName: '"Woori Card Co.,Ltd"',
    patterns: [{ reg: /^(624446)\d{10}$/g }],
  },
  {
    bankCode: '33030410',
    bankName: '"Woori Card Co.,Ltd"',
    patterns: [{ reg: /^(624380)\d{10}$/g }],
  },
  {
    bankCode: '33030410',
    bankName: '"Woori Card Co.,Ltd"',
    patterns: [{ reg: /^(624404)\d{10}$/g }],
  },
  {
    bankCode: '33030410',
    bankName: '"Woori Card Co.,Ltd"',
    patterns: [{ reg: /^(623454)\d{10}$/g }],
  },
  {
    bankCode: '33030410',
    bankName: '"Woori Card Co.,Ltd"',
    patterns: [{ reg: /^(623393)\d{10}$/g }],
  },
  {
    bankCode: '33030410',
    bankName: '"Woori Card Co.,Ltd"',
    patterns: [{ reg: /^(624343)\d{10}$/g }],
  },
  {
    bankCode: '33030410',
    bankName: '"Woori Card Co.,Ltd"',
    patterns: [{ reg: /^(623470)\d{10}$/g }],
  },
  {
    bankCode: '33030410',
    bankName: '"Woori Card Co.,Ltd"',
    patterns: [{ reg: /^(624437)\d{10}$/g }],
  },
  {
    bankCode: '33030410',
    bankName: '"Woori Card Co.,Ltd"',
    patterns: [{ reg: /^(625220)\d{10}$/g }],
  },
  {
    bankCode: '33030410',
    bankName: '"Woori Card Co.,Ltd"',
    patterns: [{ reg: /^(621020)\d{10}$/g }],
  },
  {
    bankCode: '33120116',
    bankName: 'VATTANAC BANK LIMITED',
    patterns: [{ reg: /^(62346400)\d{8}$/g }],
  },
  {
    bankCode: '33120116',
    bankName: 'VATTANAC BANK LIMITED',
    patterns: [{ reg: /^(62442600)\d{8}$/g }],
  },
  {
    bankCode: '33120116',
    bankName: 'VATTANAC BANK LIMITED',
    patterns: [{ reg: /^(62442601)\d{8}$/g }],
  },
  {
    bankCode: '33180116',
    bankName: 'Cambodia Asia Bank (CAB)',
    patterns: [{ reg: /^(624423)\d{10}$/g }],
  },
  {
    bankCode: '33180116',
    bankName: 'Cambodia Asia Bank (CAB)',
    patterns: [{ reg: /^(624425)\d{10}$/g }],
  },
  {
    bankCode: '33180116',
    bankName: 'Cambodia Asia Bank (CAB)',
    patterns: [{ reg: /^(624459)\d{10}$/g }],
  },
  {
    bankCode: '33670398',
    bankName: 'JSC Bank CenterCredit',
    patterns: [{ reg: /^(6244650)\d{9}$/g }],
  },
  {
    bankCode: '33670398',
    bankName: 'JSC Bank CenterCredit',
    patterns: [{ reg: /^(6244651)\d{9}$/g }],
  },
  {
    bankCode: '33670398',
    bankName: 'JSC Bank CenterCredit',
    patterns: [{ reg: /^(6244652)\d{9}$/g }],
  },
  {
    bankCode: '33670398',
    bankName: 'JSC Bank CenterCredit',
    patterns: [{ reg: /^(6244653)\d{9}$/g }],
  },
  {
    bankCode: '33740104',
    bankName: 'AYA BANK',
    patterns: [{ reg: /^(62346600)\d{8}$/g }],
  },
  {
    bankCode: '33740104',
    bankName: 'AYA BANK',
    patterns: [{ reg: /^(62443000)\d{8}$/g }],
  },
  {
    bankCode: '33740104',
    bankName: 'AYA BANK',
    patterns: [{ reg: /^(62443001)\d{8}$/g }],
  },
  {
    bankCode: '33740104',
    bankName: 'AYA BANK',
    patterns: [{ reg: /^(62443002)\d{8}$/g }],
  },
  {
    bankCode: '33860566',
    bankName: 'ACCESS BANK PLC',
    patterns: [{ reg: /^(62446300)\d{8}$/g }],
  },
  {
    bankCode: '33860566',
    bankName: 'ACCESS BANK PLC',
    patterns: [{ reg: /^(62640400)\d{8}$/g }],
  },
  {
    bankCode: '33900840',
    bankName: 'MetaBank',
    patterns: [{ reg: /^(62443800)\d{8}$/g }],
  },
  {
    bankCode: '34140104',
    bankName: 'KANBAWZA BANK LIMITED',
    patterns: [{ reg: /^(62347600)\d{8}$/g }],
  },
  {
    bankCode: '34140104',
    bankName: 'KANBAWZA BANK LIMITED',
    patterns: [{ reg: /^(62444500)\d{8}$/g }],
  },
  {
    bankCode: '34140104',
    bankName: 'KANBAWZA BANK LIMITED',
    patterns: [{ reg: /^(62444501)\d{8}$/g }],
  },
  {
    bankCode: '34230591',
    bankName: 'CREDICORP BANK S.A',
    patterns: [{ reg: /^(62913000)\d{8}$/g }],
  },
  {
    bankCode: '34230591',
    bankName: 'CREDICORP BANK S.A',
    patterns: [{ reg: /^(62913002)\d{8}$/g }],
  },
  {
    bankCode: '34230591',
    bankName: 'CREDICORP BANK S.A',
    patterns: [{ reg: /^(62913003)\d{8}$/g }],
  },
  {
    bankCode: '34230591',
    bankName: 'CREDICORP BANK S.A',
    patterns: [{ reg: /^(62622300)\d{8}$/g }],
  },
  {
    bankCode: '34260496',
    bankName: 'CAPITRON BANK',
    patterns: [{ reg: /^(62348000)\d{8}$/g }],
  },
  {
    bankCode: '34260496',
    bankName: 'CAPITRON BANK',
    patterns: [{ reg: /^(62348001)\d{8}$/g }],
  },
  {
    bankCode: '34320586',
    bankName: 'Askari Bank Limited',
    patterns: [{ reg: /^(62340610)\d{8}$/g }],
  },
  {
    bankCode: '34320586',
    bankName: 'Askari Bank Limited',
    patterns: [{ reg: /^(62340620)\d{8}$/g }],
  },
  {
    bankCode: '34320586',
    bankName: 'Askari Bank Limited',
    patterns: [{ reg: /^(62340630)\d{8}$/g }],
  },
  {
    bankCode: '34410288',
    bankName: 'UNITED BANK FOR AFRICA GHANA',
    patterns: [{ reg: /^(62446700)\d{8}$/g }],
  },
  {
    bankCode: '34410508',
    bankName: 'UNITED BANK FOR AFRICA',
    patterns: [{ reg: /^(62446720)\d{8}$/g }],
  },
  {
    bankCode: '34410566',
    bankName: 'UNITED BANK FOR AFRICA PLC',
    patterns: [{ reg: /^(62446710)\d{8}$/g }],
  },
  {
    bankCode: '34420288',
    bankName: 'CAPITAL BANK GHANA',
    patterns: [{ reg: /^(62348400)\d{8}$/g }],
  },
  {
    bankCode: '34420288',
    bankName: 'CAPITAL BANK GHANA',
    patterns: [{ reg: /^(62348300)\d{8}$/g }],
  },
  {
    bankCode: '34420288',
    bankName: 'CAPITAL BANK GHANA',
    patterns: [{ reg: /^(62348301)\d{8}$/g }],
  },
  {
    bankCode: '34520762',
    bankName: 'OJSC BANK ESKHATA',
    patterns: [{ reg: /^(6244700)\d{9}$/g }],
  },
  {
    bankCode: '34520762',
    bankName: 'OJSC BANK ESKHATA',
    patterns: [{ reg: /^(6244701)\d{9}$/g }],
  },
  {
    bankCode: '34520762',
    bankName: 'OJSC BANK ESKHATA',
    patterns: [{ reg: /^(6244702)\d{9}$/g }],
  },
  {
    bankCode: '34520762',
    bankName: 'OJSC BANK ESKHATA',
    patterns: [{ reg: /^(6264080)\d{9}$/g }],
  },
  {
    bankCode: '34520762',
    bankName: 'OJSC BANK ESKHATA',
    patterns: [{ reg: /^(6264081)\d{9}$/g }],
  },
  {
    bankCode: '34520762',
    bankName: 'OJSC BANK ESKHATA',
    patterns: [{ reg: /^(6264082)\d{9}$/g }],
  },
  {
    bankCode: '34530116',
    bankName: 'Canadia Band Plc',
    patterns: [{ reg: /^(623456)\d{10}$/g }],
  },
  {
    bankCode: '34590418',
    bankName: 'Lao Development Bank',
    patterns: [{ reg: /^(62347900)\d{8}$/g }],
  },
  {
    bankCode: '34600566',
    bankName: 'PROVIDUSBANK PLC',
    patterns: [{ reg: /^(62349600)\d{9}$/g }],
  },
  {
    bankCode: '34610566',
    bankName: 'PROVIDUSBANK PLC',
    patterns: [{ reg: /^(62349100)\d{9}$/g }],
  },
  {
    bankCode: '34610566',
    bankName: 'PROVIDUSBANK PLC',
    patterns: [{ reg: /^(62349101)\d{9}$/g }],
  },
  {
    bankCode: '34680288',
    bankName: 'UNIVERSAL MERCHANT BANK',
    patterns: [{ reg: /^(62914700)\d{8}$/g }],
  },
  {
    bankCode: '34680288',
    bankName: 'UNIVERSAL MERCHANT BANK',
    patterns: [{ reg: /^(62928100)\d{8}$/g }],
  },
  {
    bankCode: '34790104',
    bankName: 'UNITED AMARA BANK',
    patterns: [{ reg: /^(62446900)\d{8}$/g }],
  },
  {
    bankCode: '34800690',
    bankName: 'NOUVOBANQ',
    patterns: [{ reg: /^(62913800)\d{8}$/g }],
  },
  {
    bankCode: '34840104',
    bankName: 'Myanma Apex Bank Limited',
    patterns: [{ reg: /^(62913300)\d{8}$/g }],
  },
  {
    bankCode: '34840104',
    bankName: 'Myanma Apex Bank Limited',
    patterns: [{ reg: /^(62622000)\d{8}$/g }],
  },
  {
    bankCode: '34850418',
    bankName: 'Join Development Bank',
    patterns: [{ reg: /^(62620401)\d{8}$/g }],
  },
  {
    bankCode: '34850418',
    bankName: 'Join Development Bank',
    patterns: [{ reg: /^(62620402)\d{8}$/g }],
  },
  {
    bankCode: '34850418',
    bankName: 'Join Development Bank',
    patterns: [{ reg: /^(62915800)\d{8}$/g }],
  },
  {
    bankCode: '34860458',
    bankName: 'Bank of China Malaysia Berhad',
    patterns: [{ reg: /^(624455)\d{10}$/g }],
  },
  {
    bankCode: '34890418',
    bankName: 'Banque Pour Le Commerce Exteri',
    patterns: [{ reg: /^(62913500)\d{8}$/g }],
  },
  {
    bankCode: '35000258',
    bankName: 'BANQUE SOCREDO',
    patterns: [{ reg: /^(629142)\d{10}$/g }],
  },
  {
    bankCode: '35060784',
    bankName: 'AI-Hail ORIX Finance PSC',
    patterns: [{ reg: /^(626202)\d{10}$/g }],
  },
  {
    bankCode: '35090784',
    bankName: 'AL Hail Orix Finance PSC',
    patterns: [{ reg: /^(626401)\d{10}$/g }],
  },
  {
    bankCode: '35110586',
    bankName: 'Summit Bank Ltd',
    patterns: [{ reg: /^(62340800)\d{11}$/g }],
  },
  {
    bankCode: '35250288',
    bankName: 'PRUDENTIAL BANK GHANA LIMITED',
    patterns: [{ reg: /^(62915100)\d{8}$/g }],
  },
  {
    bankCode: '35350031',
    bankName: 'Muganbank OJSC',
    patterns: [{ reg: /^(62915400)\d{8}$/g }],
  },
  {
    bankCode: '35350031',
    bankName: 'Muganbank OJSC',
    patterns: [{ reg: /^(62915401)\d{8}$/g }],
  },
  {
    bankCode: '35350031',
    bankName: 'Muganbank OJSC',
    patterns: [{ reg: /^(62915402)\d{8}$/g }],
  },
  {
    bankCode: '35350031',
    bankName: 'Muganbank OJSC',
    patterns: [{ reg: /^(62915403)\d{8}$/g }],
  },
  {
    bankCode: '35420104',
    bankName: 'Global Treasure Bank',
    patterns: [{ reg: /^(62449600)\d{8}$/g }],
  },
  {
    bankCode: '35420104',
    bankName: 'Global Treasure Bank',
    patterns: [{ reg: /^(62449601)\d{8}$/g }],
  },
  {
    bankCode: '35450458',
    bankName: 'Bank of china(Malaysia) Berhad',
    patterns: [{ reg: /^(629152)\d{10}$/g }],
  },
  {
    bankCode: '35460112',
    bankName: 'BPS-Sberbank',
    patterns: [{ reg: /^(62641100)\d{8}$/g }],
  },
  {
    bankCode: '35460112',
    bankName: 'BPS-Sberbank',
    patterns: [{ reg: /^(62449700)\d{8}$/g }],
  },
  {
    bankCode: '35460112',
    bankName: 'BPS-Sberbank',
    patterns: [{ reg: /^(62449701)\d{8}$/g }],
  },
  {
    bankCode: '35570643',
    bankName: 'Joint Stock Commercial Bank',
    patterns: [{ reg: /^(62915600)\d{8}$/g }],
  },
  {
    bankCode: '35570643',
    bankName: 'Joint Stock Commercial Bank',
    patterns: [{ reg: /^(62915601)\d{8}$/g }],
  },
  {
    bankCode: '35570643',
    bankName: 'Joint Stock Commercial Bank',
    patterns: [{ reg: /^(62915602)\d{8}$/g }],
  },
  {
    bankCode: '35790762',
    bankName: 'Open Joint Stock Company',
    patterns: [{ reg: /^(6262300)\d{9}$/g }],
  },
  {
    bankCode: '35820496',
    bankName: 'BOGD BANK',
    patterns: [{ reg: /^(62620500)\d{8}$/g }],
  },
  {
    bankCode: '35820496',
    bankName: 'BOGD BANK',
    patterns: [{ reg: /^(62916200)\d{8}$/g }],
  },
  {
    bankCode: '35820496',
    bankName: 'BOGD BANK',
    patterns: [{ reg: /^(62916201)\d{8}$/g }],
  },
  {
    bankCode: '35850586',
    bankName: 'National Bank of Pakistan',
    patterns: [{ reg: /^(62438600)\d{8}$/g }],
  },
  {
    bankCode: '35850586',
    bankName: 'National Bank of Pakistan',
    patterns: [{ reg: /^(62438601)\d{8}$/g }],
  },
  {
    bankCode: '35910762',
    bankName: 'IinternationalbankofTajikistan',
    patterns: [{ reg: /^(6262180)\d{9}$/g }],
  },
  {
    bankCode: '35910762',
    bankName: 'IinternationalbankofTajikistan',
    patterns: [{ reg: /^(6262181)\d{9}$/g }],
  },
  {
    bankCode: '35910762',
    bankName: 'IinternationalbankofTajikistan',
    patterns: [{ reg: /^(6262182)\d{9}$/g }],
  },
  {
    bankCode: '35910762',
    bankName: 'IinternationalbankofTajikistan',
    patterns: [{ reg: /^(6262183)\d{9}$/g }],
  },
  {
    bankCode: '35910762',
    bankName: 'IinternationalbankofTajikistan',
    patterns: [{ reg: /^(6262184)\d{9}$/g }],
  },
  {
    bankCode: '35910762',
    bankName: 'IinternationalbankofTajikistan',
    patterns: [{ reg: /^(6262185)\d{9}$/g }],
  },
  {
    bankCode: '36010840',
    bankName: 'Global Bank',
    patterns: [{ reg: /^(62622500)\d{8}$/g }],
  },
  {
    bankCode: '36010840',
    bankName: 'Global Bank',
    patterns: [{ reg: /^(62622600)\d{8}$/g }],
  },
  {
    bankCode: '36040496',
    bankName: 'Transport and Development Bank',
    patterns: [{ reg: /^(62916800)\d{8}$/g }],
  },
  {
    bankCode: '47980344',
    bankName: '中国银行香港有限公司',
    patterns: [{ reg: /^(622346)\d{10}$/g }],
  },
  {
    bankCode: '47980344',
    bankName: '中国银行香港有限公司',
    patterns: [{ reg: /^(622347)\d{10}$/g }],
  },
  {
    bankCode: '47980344',
    bankName: '南洋商业银行',
    patterns: [{ reg: /^(622350)\d{10}$/g }],
  },
  {
    bankCode: '47980344',
    bankName: '集友银行',
    patterns: [{ reg: /^(622352)\d{10}$/g }],
  },
  {
    bankCode: '47980344',
    bankName: '集友银行',
    patterns: [{ reg: /^(622353)\d{10}$/g }],
  },
  {
    bankCode: '47980344',
    bankName: '中国银行(香港)',
    patterns: [{ reg: /^(621041)\d{13}$/g }],
  },
  {
    bankCode: '47980344',
    bankName: '南洋商业银行',
    patterns: [{ reg: /^(622349)\d{10}$/g }],
  },
  {
    bankCode: '48027901',
    bankName: '甘肃省农村信用社联合社',
    patterns: [{ reg: /^(159)\d{16}$/g }],
  },
  {
    bankCode: '48080000',
    bankName: '中银通商务支付有限公司',
    patterns: [{ reg: /^(620048)\d{10}$/g }],
  },
  {
    bankCode: '48080000',
    bankName: '中银通商务支付有限公司',
    patterns: [{ reg: /^(620515)\d{10}$/g }],
  },
  {
    bankCode: '48080000',
    bankName: '中银通商务支付有限公司',
    patterns: [{ reg: /^(920000)\d{10}$/g }],
  },
  {
    bankCode: '48080000',
    bankName: '中银通商务支付有限公司',
    patterns: [{ reg: /^(620550)\d{13}$/g }],
  },
  {
    bankCode: '48080000',
    bankName: '中银通商务支付有限公司',
    patterns: [{ reg: /^(921001)\d{13}$/g }],
  },
  {
    bankCode: '48080000',
    bankName: '中银通商务支付有限公司',
    patterns: [{ reg: /^(921002)\d{13}$/g }],
  },
  {
    bankCode: '48080000',
    bankName: '中银通商务支付有限公司',
    patterns: [{ reg: /^(62053801)\d{11}$/g }],
  },
  {
    bankCode: '48080000',
    bankName: '中银通商务支付有限公司',
    patterns: [{ reg: /^(620559)\d{13}$/g }],
  },
  {
    bankCode: '48080000',
    bankName: '中银通商务支付有限公司',
    patterns: [{ reg: /^(62053802)\d{11}$/g }],
  },
  {
    bankCode: '48080000',
    bankName: '中银通商务支付有限公司',
    patterns: [{ reg: /^(62053804)\d{11}$/g }],
  },
  {
    bankCode: '48080001',
    bankName: '中银通支付',
    patterns: [{ reg: /^(921000)\d{13}$/g }],
  },
  {
    bankCode: '48080002',
    bankName: '中银通商务支付有限公司',
    patterns: [{ reg: /^(621563)\d{13}$/g }],
  },
  {
    bankCode: '48080710',
    bankName: '中银通支付商务有限公司',
    patterns: [{ reg: /^(6234390)\d{12}$/g }],
  },
  {
    bankCode: '48100000',
    bankName: '中银通商务支付有限公司',
    patterns: [{ reg: /^(620038)\d{13}$/g }],
  },
  {
    bankCode: '61000000',
    bankName: '中国邮政储蓄银行信用卡中心',
    patterns: [{ reg: /^(628310)\d{10}$/g }],
  },
  {
    bankCode: '61000000',
    bankName: '中国邮政储蓄银行信用卡中心',
    patterns: [{ reg: /^(625919)\d{10}$/g }],
  },
  {
    bankCode: '61000000',
    bankName: '中国邮政储蓄银行信用卡中心',
    patterns: [{ reg: /^(622810)\d{10}$/g }],
  },
  {
    bankCode: '61000000',
    bankName: '中国邮政储蓄银行信用卡中心',
    patterns: [{ reg: /^(625367)\d{10}$/g }],
  },
  {
    bankCode: '61000000',
    bankName: '中国邮政储蓄银行信用卡中心',
    patterns: [{ reg: /^(625368)\d{10}$/g }],
  },
  {
    bankCode: '61000000',
    bankName: '中国邮政储蓄银行信用卡中心',
    patterns: [{ reg: /^(518905)\d{10}$/g }],
  },
  {
    bankCode: '61000000',
    bankName: '中国邮政储蓄银行信用卡中心',
    patterns: [{ reg: /^(625605)\d{10}$/g }],
  },
  {
    bankCode: '61000000',
    bankName: '中国邮政储蓄银行信用卡中心',
    patterns: [{ reg: /^(622835)\d{10}$/g }],
  },
  {
    bankCode: '61000000',
    bankName: '中国邮政储蓄银行信用卡中心',
    patterns: [{ reg: /^(625603)\d{10}$/g }],
  },
  {
    bankCode: '61000000',
    bankName: '中国邮政储蓄银行信用卡中心',
    patterns: [{ reg: /^(622811)\d{10}$/g }],
  },
  {
    bankCode: '61000000',
    bankName: '中国邮政储蓄银行信用卡中心',
    patterns: [{ reg: /^(622812)\d{10}$/g }],
  },
  {
    bankCode: '61100000',
    bankName: '长春农村商业银行',
    patterns: [{ reg: /^(625206)\d{10}$/g }],
  },
  {
    bankCode: '61130000',
    bankName: '昆仑银行',
    patterns: [{ reg: /^(625052)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(514906)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(518212)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(520108)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(376966)\d{9}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(376969)\d{9}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(400360)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(403391)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(403392)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(403393)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(404158)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(404159)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(404171)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(404172)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(404173)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(433666)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(433667)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(433669)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(558916)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(622916)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(622918)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(622919)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(628206)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(628208)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(622679)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(622680)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(622688)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(622689)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(356390)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(356391)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(356392)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(404157)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(628370)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(628371)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(628372)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(628209)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(622766)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(622767)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(622768)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(556617)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(622678)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(376968)\d{9}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(404174)\d{10}$/g }],
  },
  {
    bankCode: '63020000',
    bankName: '中信银行信用卡中心',
    patterns: [{ reg: /^(62844806)\d{8}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(356840)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(406254)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(425862)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(543159)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(628201)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(628202)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(622650)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(622655)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(622658)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(524090)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(622570)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(622685)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(622657)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(622161)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '光大银行',
    patterns: [{ reg: /^(622659)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(625978)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(625979)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(625980)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(481699)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(625975)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(625976)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(625977)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(625339)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(356839)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(406252)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(622801)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(625974)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(622687)\d{10}$/g }],
  },
  {
    bankCode: '63030000',
    bankName: '中国光大银行',
    patterns: [{ reg: /^(625981)\d{10}$/g }],
  },
  {
    bankCode: '63040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(523959)\d{10}$/g }],
  },
  {
    bankCode: '63040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(528708)\d{10}$/g }],
  },
  {
    bankCode: '63040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(528709)\d{10}$/g }],
  },
  {
    bankCode: '63040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(539867)\d{10}$/g }],
  },
  {
    bankCode: '63040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(539868)\d{10}$/g }],
  },
  {
    bankCode: '63040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(622637)\d{10}$/g }],
  },
  {
    bankCode: '63040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(622638)\d{10}$/g }],
  },
  {
    bankCode: '63040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(625967)\d{10}$/g }],
  },
  {
    bankCode: '63040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(625968)\d{10}$/g }],
  },
  {
    bankCode: '63040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(628318)\d{10}$/g }],
  },
  {
    bankCode: '63040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(625969)\d{10}$/g }],
  },
  {
    bankCode: '63040000',
    bankName: '华夏银行',
    patterns: [{ reg: /^(622636)\d{10}$/g }],
  },
  {
    bankCode: '63100000',
    bankName: '浦发银行信用卡中心',
    patterns: [{ reg: /^(628221)\d{10}$/g }],
  },
  {
    bankCode: '63100000',
    bankName: '浦发银行信用卡中心',
    patterns: [{ reg: /^(625970)\d{10}$/g }],
  },
  {
    bankCode: '63100000',
    bankName: '浦发银行信用卡中心',
    patterns: [{ reg: /^(625971)\d{10}$/g }],
  },
  {
    bankCode: '63100000',
    bankName: '浦发银行信用卡中心',
    patterns: [{ reg: /^(377187)\d{9}$/g }],
  },
  {
    bankCode: '63100000',
    bankName: '浦发银行信用卡中心',
    patterns: [{ reg: /^(625831)\d{10}$/g }],
  },
  {
    bankCode: '63100000',
    bankName: '浦发银行信用卡中心',
    patterns: [{ reg: /^(622693)\d{10}$/g }],
  },
  {
    bankCode: '63100000',
    bankName: '浦发银行信用卡中心',
    patterns: [{ reg: /^(625833)\d{10}$/g }],
  },
  {
    bankCode: '63100000',
    bankName: '浦发银行信用卡中心',
    patterns: [{ reg: /^(625993)\d{10}$/g }],
  },
  {
    bankCode: '63110000',
    bankName: '恒丰银行',
    patterns: [{ reg: /^(625191)\d{10}$/g }],
  },
  {
    bankCode: '63200000',
    bankName: '东亚银行(中国)有限公司',
    patterns: [{ reg: /^(622265)\d{10}$/g }],
  },
  {
    bankCode: '63200000',
    bankName: '东亚银行(中国)有限公司',
    patterns: [{ reg: /^(622266)\d{10}$/g }],
  },
  {
    bankCode: '63200000',
    bankName: '东亚银行(中国)有限公司',
    patterns: [{ reg: /^(625972)\d{10}$/g }],
  },
  {
    bankCode: '63200000',
    bankName: '东亚银行(中国)有限公司',
    patterns: [{ reg: /^(625973)\d{10}$/g }],
  },
  {
    bankCode: '63200000',
    bankName: '东亚银行(中国)有限公司',
    patterns: [{ reg: /^(622883)\d{10}$/g }],
  },
  {
    bankCode: '63320000',
    bankName: '南洋商业银行',
    patterns: [{ reg: /^(625093)\d{10}$/g }],
  },
  {
    bankCode: '63320000',
    bankName: '南洋商业银行',
    patterns: [{ reg: /^(625095)\d{10}$/g }],
  },
  {
    bankCode: '64031000',
    bankName: '北京银行',
    patterns: [{ reg: /^(622853)\d{10}$/g }],
  },
  {
    bankCode: '64031000',
    bankName: '北京银行',
    patterns: [{ reg: /^(622163)\d{10}$/g }],
  },
  {
    bankCode: '64031000',
    bankName: '北京银行',
    patterns: [{ reg: /^(622852)\d{10}$/g }],
  },
  {
    bankCode: '64031000',
    bankName: '北京银行',
    patterns: [{ reg: /^(622851)\d{10}$/g }],
  },
  {
    bankCode: '64031000',
    bankName: '北京银行',
    patterns: [{ reg: /^(522001)\d{10}$/g }],
  },
  {
    bankCode: '64031000',
    bankName: '北京银行',
    patterns: [{ reg: /^(625816)\d{10}$/g }],
  },
  {
    bankCode: '64031000',
    bankName: '北京银行',
    patterns: [{ reg: /^(628203)\d{10}$/g }],
  },
  {
    bankCode: '64033055',
    bankName: '常熟农村商业银行',
    patterns: [{ reg: /^(625165)\d{10}$/g }],
  },
  {
    bankCode: '64033055',
    bankName: '常熟农村商业银行',
    patterns: [{ reg: /^(628314)\d{10}$/g }],
  },
  {
    bankCode: '64045840',
    bankName: '深圳农村商业银行',
    patterns: [{ reg: /^(625169)\d{10}$/g }],
  },
  {
    bankCode: '64083300',
    bankName: '宁波银行',
    patterns: [{ reg: /^(512431)\d{10}$/g }],
  },
  {
    bankCode: '64083300',
    bankName: '宁波银行',
    patterns: [{ reg: /^(520194)\d{10}$/g }],
  },
  {
    bankCode: '64083300',
    bankName: '宁波银行',
    patterns: [{ reg: /^(622778)\d{10}$/g }],
  },
  {
    bankCode: '64083300',
    bankName: '宁波银行',
    patterns: [{ reg: /^(622282)\d{10}$/g }],
  },
  {
    bankCode: '64083300',
    bankName: '宁波银行',
    patterns: [{ reg: /^(622318)\d{10}$/g }],
  },
  {
    bankCode: '64083300',
    bankName: '宁波银行',
    patterns: [{ reg: /^(628207)\d{10}$/g }],
  },
  {
    bankCode: '64083300',
    bankName: '宁波银行',
    patterns: [{ reg: /^(625903)\d{10}$/g }],
  },
  {
    bankCode: '64094510',
    bankName: '齐鲁银行股份有限公司',
    patterns: [{ reg: /^(628379)\d{10}$/g }],
  },
  {
    bankCode: '64094510',
    bankName: '齐鲁银行股份有限公司',
    patterns: [{ reg: /^(625890)\d{10}$/g }],
  },
  {
    bankCode: '64135810',
    bankName: '广州银行股份有限公司',
    patterns: [{ reg: /^(628367)\d{10}$/g }],
  },
  {
    bankCode: '64135810',
    bankName: '广州银行股份有限公司',
    patterns: [{ reg: /^(625050)\d{10}$/g }],
  },
  {
    bankCode: '64135810',
    bankName: '广州银行股份有限公司',
    patterns: [{ reg: /^(625836)\d{10}$/g }],
  },
  {
    bankCode: '64135810',
    bankName: '广州银行股份有限公司',
    patterns: [{ reg: /^(622875)\d{10}$/g }],
  },
  {
    bankCode: '64162640',
    bankName: '齐齐哈尔商行',
    patterns: [{ reg: /^(628333)\d{10}$/g }],
  },
  {
    bankCode: '64163056',
    bankName: '张家港农村商业银行',
    patterns: [{ reg: /^(625208)\d{10}$/g }],
  },
  {
    bankCode: '64163056',
    bankName: '张家港农村商业银行',
    patterns: [{ reg: /^(628349)\d{10}$/g }],
  },
  {
    bankCode: '64221210',
    bankName: '河北银行股份有限公司',
    patterns: [{ reg: /^(628321)\d{10}$/g }],
  },
  {
    bankCode: '64221210',
    bankName: '河北银行股份有限公司',
    patterns: [{ reg: /^(622921)\d{10}$/g }],
  },
  {
    bankCode: '64221210',
    bankName: '河北银行股份有限公司',
    patterns: [{ reg: /^(625598)\d{10}$/g }],
  },
  {
    bankCode: '64233310',
    bankName: '杭州市商业银行',
    patterns: [{ reg: /^(603367)\d{13}$/g }],
  },
  {
    bankCode: '64233311',
    bankName: '杭州市商业银行',
    patterns: [{ reg: /^(622286)\d{10}$/g }],
  },
  {
    bankCode: '64233311',
    bankName: '杭州市商业银行',
    patterns: [{ reg: /^(628236)\d{10}$/g }],
  },
  {
    bankCode: '64233311',
    bankName: '杭州市商业银行',
    patterns: [{ reg: /^(625800)\d{10}$/g }],
  },
  {
    bankCode: '64243010',
    bankName: '南京银行',
    patterns: [{ reg: /^(621777)\d{10}$/g }],
  },
  {
    bankCode: '64296510',
    bankName: '成都市商业银行',
    patterns: [{ reg: /^(622813)\d{10}$/g }],
  },
  {
    bankCode: '64296510',
    bankName: '成都市商业银行',
    patterns: [{ reg: /^(622818)\d{10}$/g }],
  },
  {
    bankCode: '64296510',
    bankName: '成都市商业银行',
    patterns: [{ reg: /^(628228)\d{10}$/g }],
  },
  {
    bankCode: '64303050',
    bankName: '苏州银行',
    patterns: [{ reg: /^(625166)\d{10}$/g }],
  },
  {
    bankCode: '64314730',
    bankName: '临商银行',
    patterns: [{ reg: /^(628359)\d{10}$/g }],
  },
  {
    bankCode: '64330000',
    bankName: '葫芦岛银行',
    patterns: [{ reg: /^(628274)\d{10}$/g }],
  },
  {
    bankCode: '64354910',
    bankName: '郑州银行',
    patterns: [{ reg: /^(625163)\d{10}$/g }],
  },
  {
    bankCode: '64367000',
    bankName: '贵州省农村信用联合社',
    patterns: [{ reg: /^(628341)\d{10}$/g }],
  },
  {
    bankCode: '64367000',
    bankName: '贵州省农村信用联合社',
    patterns: [{ reg: /^(625216)\d{10}$/g }],
  },
  {
    bankCode: '64375850',
    bankName: '珠海华润银行',
    patterns: [{ reg: /^(628270)\d{10}$/g }],
  },
  {
    bankCode: '64384530',
    bankName: '齐商银行',
    patterns: [{ reg: /^(628311)\d{10}$/g }],
  },
  {
    bankCode: '64392270',
    bankName: '锦州银行',
    patterns: [{ reg: /^(628261)\d{10}$/g }],
  },
  {
    bankCode: '64392270',
    bankName: '锦州银行',
    patterns: [{ reg: /^(622710)\d{10}$/g }],
  },
  {
    bankCode: '64392270',
    bankName: '锦州银行',
    patterns: [{ reg: /^(628294)\d{10}$/g }],
  },
  {
    bankCode: '64403600',
    bankName: '徽商银行',
    patterns: [{ reg: /^(628251)\d{10}$/g }],
  },
  {
    bankCode: '64403600',
    bankName: '徽商银行',
    patterns: [{ reg: /^(622651)\d{10}$/g }],
  },
  {
    bankCode: '64403600',
    bankName: '徽商银行',
    patterns: [{ reg: /^(625828)\d{10}$/g }],
  },
  {
    bankCode: '64403600',
    bankName: '徽商银行',
    patterns: [{ reg: /^(625652)\d{10}$/g }],
  },
  {
    bankCode: '64403600',
    bankName: '徽商银行',
    patterns: [{ reg: /^(625700)\d{10}$/g }],
  },
  {
    bankCode: '64403600',
    bankName: '徽商银行',
    patterns: [{ reg: /^(623664)\d{13}$/g }],
  },
  {
    bankCode: '64403600',
    bankName: '徽商银行',
    patterns: [{ reg: /^(625358)\d{10}$/g }],
  },
  {
    bankCode: '64416910',
    bankName: '重庆银行股份有限公司',
    patterns: [{ reg: /^(622613)\d{10}$/g }],
  },
  {
    bankCode: '64416910',
    bankName: '重庆银行股份有限公司',
    patterns: [{ reg: /^(628220)\d{10}$/g }],
  },
  {
    bankCode: '64422610',
    bankName: '哈尔滨商行',
    patterns: [{ reg: /^(622809)\d{10}$/g }],
  },
  {
    bankCode: '64422610',
    bankName: '哈尔滨商行',
    patterns: [{ reg: /^(628224)\d{10}$/g }],
  },
  {
    bankCode: '64422610',
    bankName: '哈尔滨银行',
    patterns: [{ reg: /^(625577)\d{10}$/g }],
  },
  {
    bankCode: '64422610',
    bankName: '哈尔滨银行',
    patterns: [{ reg: /^(625119)\d{10}$/g }],
  },
  {
    bankCode: '64422610',
    bankName: '哈尔滨银行',
    patterns: [{ reg: /^(625952)\d{10}$/g }],
  },
  {
    bankCode: '64422611',
    bankName: '哈尔滨银行',
    patterns: [{ reg: /^(621752)\d{13}$/g }],
  },
  {
    bankCode: '64437010',
    bankName: '贵阳银行股份有限公司',
    patterns: [{ reg: /^(628213)\d{10}$/g }],
  },
  {
    bankCode: '64437010',
    bankName: '贵阳银行股份有限公司',
    patterns: [{ reg: /^(622533)\d{10}$/g }],
  },
  {
    bankCode: '64437010',
    bankName: '贵阳银行股份有限公司',
    patterns: [{ reg: /^(622537)\d{10}$/g }],
  },
  {
    bankCode: '64437010',
    bankName: '贵阳银行股份有限公司',
    patterns: [{ reg: /^(62519301)\d{8}$/g }],
  },
  {
    bankCode: '64447910',
    bankName: '西安银行',
    patterns: [{ reg: /^(628345)\d{10}$/g }],
  },
  {
    bankCode: '64447910',
    bankName: '西安银行',
    patterns: [{ reg: /^(625167)\d{10}$/g }],
  },
  {
    bankCode: '64478210',
    bankName: '兰州银行',
    patterns: [{ reg: /^(628263)\d{10}$/g }],
  },
  {
    bankCode: '64478210',
    bankName: '兰州银行',
    patterns: [{ reg: /^(622416)\d{10}$/g }],
  },
  {
    bankCode: '64478210',
    bankName: '兰州银行',
    patterns: [{ reg: /^(625370)\d{10}$/g }],
  },
  {
    bankCode: '64484210',
    bankName: '江西银行',
    patterns: [{ reg: /^(628305)\d{10}$/g }],
  },
  {
    bankCode: '64484210',
    bankName: '江西银行',
    patterns: [{ reg: /^(628361)\d{10}$/g }],
  },
  {
    bankCode: '64484210',
    bankName: '江西银行',
    patterns: [{ reg: /^(622718)\d{10}$/g }],
  },
  {
    bankCode: '64484210',
    bankName: '江西银行',
    patterns: [{ reg: /^(621246)\d{13}$/g }],
  },
  {
    bankCode: '64491610',
    bankName: '晋商银行',
    patterns: [{ reg: /^(625202)\d{10}$/g }],
  },
  {
    bankCode: '64504520',
    bankName: '青岛银行',
    patterns: [{ reg: /^(628239)\d{10}$/g }],
  },
  {
    bankCode: '64540000',
    bankName: '九江银行',
    patterns: [{ reg: /^(625195)\d{10}$/g }],
  },
  {
    bankCode: '64540000',
    bankName: '九江银行',
    patterns: [{ reg: /^(62844700)\d{8}$/g }],
  },
  {
    bankCode: '64544240',
    bankName: '九江银行股份有限公司',
    patterns: [{ reg: /^(628238)\d{10}$/g }],
  },
  {
    bankCode: '64554770',
    bankName: '日照银行',
    patterns: [{ reg: /^(628257)\d{10}$/g }],
  },
  {
    bankCode: '64588510',
    bankName: '青海银行',
    patterns: [{ reg: /^(622817)\d{10}$/g }],
  },
  {
    bankCode: '64588510',
    bankName: '青海银行',
    patterns: [{ reg: /^(628287)\d{10}$/g }],
  },
  {
    bankCode: '64588510',
    bankName: '青海银行',
    patterns: [{ reg: /^(625959)\d{10}$/g }],
  },
  {
    bankCode: '64588510',
    bankName: '青海银行',
    patterns: [{ reg: /^(62536601)\d{8}$/g }],
  },
  {
    bankCode: '64603040',
    bankName: '江南农村商业银行',
    patterns: [{ reg: /^(625129)\d{10}$/g }],
  },
  {
    bankCode: '64624580',
    bankName: '潍坊银行',
    patterns: [{ reg: /^(628391)\d{10}$/g }],
  },
  {
    bankCode: '64634280',
    bankName: '赣州银行股份有限公司',
    patterns: [{ reg: /^(628233)\d{10}$/g }],
  },
  {
    bankCode: '64652280',
    bankName: '营口银行',
    patterns: [{ reg: /^(628264)\d{10}$/g }],
  },
  {
    bankCode: '64667310',
    bankName: '富滇银行',
    patterns: [{ reg: /^(628231)\d{10}$/g }],
  },
  {
    bankCode: '64667310',
    bankName: '富滇银行',
    patterns: [{ reg: /^(625157)\d{10}$/g }],
  },
  {
    bankCode: '64672290',
    bankName: '阜新银行股份有限公司',
    patterns: [{ reg: /^(628353)\d{10}$/g }],
  },
  {
    bankCode: '64680000',
    bankName: '陕西秦农农村商业银行',
    patterns: [{ reg: /^(625187)\d{10}$/g }],
  },
  {
    bankCode: '64690000',
    bankName: '哈尔滨农村商业银行',
    patterns: [{ reg: /^(625209)\d{10}$/g }],
  },
  {
    bankCode: '64703350',
    bankName: '嘉兴银行',
    patterns: [{ reg: /^(628327)\d{10}$/g }],
  },
  {
    bankCode: '64710000',
    bankName: '吉林九台农村商业银行',
    patterns: [{ reg: /^(625205)\d{10}$/g }],
  },
  {
    bankCode: '64720000',
    bankName: '长春发展农村商业银行',
    patterns: [{ reg: /^(625203)\d{10}$/g }],
  },
  {
    bankCode: '64733450',
    bankName: '浙江泰隆商业银行',
    patterns: [{ reg: /^(622287)\d{10}$/g }],
  },
  {
    bankCode: '64733450',
    bankName: '浙江泰隆商业银行',
    patterns: [{ reg: /^(628275)\d{10}$/g }],
  },
  {
    bankCode: '64733450',
    bankName: '浙江泰隆商业银行',
    patterns: [{ reg: /^(622717)\d{10}$/g }],
  },
  {
    bankCode: '64733450',
    bankName: '浙江泰隆商业银行',
    patterns: [{ reg: /^(622565)\d{10}$/g }],
  },
  {
    bankCode: '64741910',
    bankName: '内蒙古银行',
    patterns: [{ reg: /^(628252)\d{10}$/g }],
  },
  {
    bankCode: '64753360',
    bankName: '湖州银行',
    patterns: [{ reg: /^(628306)\d{10}$/g }],
  },
  {
    bankCode: '64786110',
    bankName: '广西北部湾银行',
    patterns: [{ reg: /^(628227)\d{10}$/g }],
  },
  {
    bankCode: '64786110',
    bankName: '广西北部湾银行',
    patterns: [{ reg: /^(62519308)\d{8}$/g }],
  },
  {
    bankCode: '64814650',
    bankName: '威海市商业银行',
    patterns: [{ reg: /^(628234)\d{10}$/g }],
  },
  {
    bankCode: '64814650',
    bankName: '威海市商业银行',
    patterns: [{ reg: /^(62519305)\d{8}$/g }],
  },
  {
    bankCode: '64895910',
    bankName: '广东南粤银行股份有限公司',
    patterns: [{ reg: /^(621727)\d{13}$/g }],
  },
  {
    bankCode: '64895910',
    bankName: '广东南粤银行股份有限公司',
    patterns: [{ reg: /^(623128)\d{13}$/g }],
  },
  {
    bankCode: '64895919',
    bankName: '广东南粤银行',
    patterns: [{ reg: /^(628237)\d{10}$/g }],
  },
  {
    bankCode: '64901380',
    bankName: '张家口银行',
    patterns: [{ reg: /^(628365)\d{10}$/g }],
  },
  {
    bankCode: '64916170',
    bankName: '桂林银行',
    patterns: [{ reg: /^(628219)\d{10}$/g }],
  },
  {
    bankCode: '64916170',
    bankName: '桂林银行',
    patterns: [{ reg: /^(625168)\d{10}$/g }],
  },
  {
    bankCode: '64916170',
    bankName: '桂林银行',
    patterns: [{ reg: /^(625369)\d{10}$/g }],
  },
  {
    bankCode: '64922690',
    bankName: '龙江银行股份有限公司',
    patterns: [{ reg: /^(622270)\d{10}$/g }],
  },
  {
    bankCode: '64922690',
    bankName: '龙江银行',
    patterns: [{ reg: /^(625588)\d{10}$/g }],
  },
  {
    bankCode: '64922690',
    bankName: '龙江银行股份有限公司',
    patterns: [{ reg: /^(625090)\d{10}$/g }],
  },
  {
    bankCode: '64922690',
    bankName: '龙江银行股份有限公司',
    patterns: [{ reg: /^(62536602)\d{8}$/g }],
  },
  {
    bankCode: '64922690',
    bankName: '龙江银行股份有限公司',
    patterns: [{ reg: /^(628368)\d{10}$/g }],
  },
  {
    bankCode: '64950000',
    bankName: '柳州银行',
    patterns: [{ reg: /^(625212)\d{10}$/g }],
  },
  {
    bankCode: '64956140',
    bankName: '柳州银行',
    patterns: [{ reg: /^(628293)\d{10}$/g }],
  },
  {
    bankCode: '64956140',
    bankName: '柳州银行',
    patterns: [{ reg: /^(628373)\d{10}$/g }],
  },
  {
    bankCode: '64966730',
    bankName: '四川天府银行',
    patterns: [{ reg: /^(625192)\d{10}$/g }],
  },
  {
    bankCode: '64966730',
    bankName: '四川天府银行',
    patterns: [{ reg: /^(628276)\d{10}$/g }],
  },
  {
    bankCode: '65012900',
    bankName: '上海农商银行贷记卡',
    patterns: [{ reg: /^(622611)\d{10}$/g }],
  },
  {
    bankCode: '65012900',
    bankName: '上海农商银行贷记卡',
    patterns: [{ reg: /^(628211)\d{10}$/g }],
  },
  {
    bankCode: '65012900',
    bankName: '上海农商银行贷记卡',
    patterns: [{ reg: /^(622722)\d{10}$/g }],
  },
  {
    bankCode: '65012900',
    bankName: '上海农商银行贷记卡',
    patterns: [{ reg: /^(625500)\d{10}$/g }],
  },
  {
    bankCode: '65012900',
    bankName: '上海农商银行贷记卡',
    patterns: [{ reg: /^(625989)\d{10}$/g }],
  },
  {
    bankCode: '65012900',
    bankName: '上海农商银行贷记卡',
    patterns: [{ reg: /^(625701)\d{10}$/g }],
  },
  {
    bankCode: '65023052',
    bankName: '昆山农村商业银行',
    patterns: [{ reg: /^(625838)\d{10}$/g }],
  },
  {
    bankCode: '65031680',
    bankName: '晋城银行',
    patterns: [{ reg: /^(628243)\d{10}$/g }],
  },
  {
    bankCode: '65055810',
    bankName: '广州农村商业银行',
    patterns: [{ reg: /^(625080)\d{10}$/g }],
  },
  {
    bankCode: '65055810',
    bankName: '广州农村商业银行',
    patterns: [{ reg: /^(628235)\d{10}$/g }],
  },
  {
    bankCode: '65085883',
    bankName: '广东顺德农村商业银行',
    patterns: [{ reg: /^(625088)\d{10}$/g }],
  },
  {
    bankCode: '65085883',
    bankName: '广东顺德农村商业银行',
    patterns: [{ reg: /^(628322)\d{10}$/g }],
  },
  {
    bankCode: '65097300',
    bankName: '云南省农村信用社',
    patterns: [{ reg: /^(622469)\d{10}$/g }],
  },
  {
    bankCode: '65097300',
    bankName: '云南省农村信用社',
    patterns: [{ reg: /^(628307)\d{10}$/g }],
  },
  {
    bankCode: '65131410',
    bankName: '承德银行',
    patterns: [{ reg: /^(628229)\d{10}$/g }],
  },
  {
    bankCode: '65154680',
    bankName: '德州银行',
    patterns: [{ reg: /^(628397)\d{10}$/g }],
  },
  {
    bankCode: '65173900',
    bankName: '福建省农村信用社联合社',
    patterns: [{ reg: /^(622802)\d{10}$/g }],
  },
  {
    bankCode: '65173900',
    bankName: '福建省农村信用社联合社',
    patterns: [{ reg: /^(625357)\d{10}$/g }],
  },
  {
    bankCode: '65173900',
    bankName: '福建省农村信用社联合社',
    patterns: [{ reg: /^(622290)\d{10}$/g }],
  },
  {
    bankCode: '65173900',
    bankName: '福建省农村信用社联合社',
    patterns: [{ reg: /^(625128)\d{10}$/g }],
  },
  {
    bankCode: '65173900',
    bankName: '福建省农村信用社联合社',
    patterns: [{ reg: /^(628232)\d{10}$/g }],
  },
  {
    bankCode: '65191100',
    bankName: '天津农村商业银行',
    patterns: [{ reg: /^(622829)\d{10}$/g }],
  },
  {
    bankCode: '65191100',
    bankName: '天津农村商业银行',
    patterns: [{ reg: /^(628301)\d{10}$/g }],
  },
  {
    bankCode: '65191100',
    bankName: '天津农村商业银行',
    patterns: [{ reg: /^(625819)\d{10}$/g }],
  },
  {
    bankCode: '65226510',
    bankName: '成都农村商业银行股份有限公司',
    patterns: [{ reg: /^(622808)\d{10}$/g }],
  },
  {
    bankCode: '65226510',
    bankName: '成都农村商业银行股份有限公司',
    patterns: [{ reg: /^(628308)\d{10}$/g }],
  },
  {
    bankCode: '65226510',
    bankName: '成都农村商业银行股份有限公司',
    patterns: [{ reg: /^(623088)\d{13}$/g }],
  },
  {
    bankCode: '65243000',
    bankName: '江苏省农村信用社联合社',
    patterns: [{ reg: /^(622816)\d{10}$/g }],
  },
  {
    bankCode: '65243000',
    bankName: '江苏省农村信用社联合社',
    patterns: [{ reg: /^(628226)\d{10}$/g }],
  },
  {
    bankCode: '65243000',
    bankName: '江苏省农村信用社联合社',
    patterns: [{ reg: /^(622815)\d{10}$/g }],
  },
  {
    bankCode: '65243000',
    bankName: '江苏省农村信用社联合社',
    patterns: [{ reg: /^(625189)\d{10}$/g }],
  },
  {
    bankCode: '65243000',
    bankName: '江苏省农村信用社联合社',
    patterns: [{ reg: /^(62844807)\d{8}$/g }],
  },
  {
    bankCode: '65264330',
    bankName: '上饶银行',
    patterns: [{ reg: /^(628223)\d{10}$/g }],
  },
  {
    bankCode: '65264331',
    bankName: '上饶银行',
    patterns: [{ reg: /^(621416)\d{10}$/g }],
  },
  {
    bankCode: '65274550',
    bankName: '东营银行',
    patterns: [{ reg: /^(628217)\d{10}$/g }],
  },
  {
    bankCode: '65284630',
    bankName: '泰安银行',
    patterns: [{ reg: /^(628284)\d{10}$/g }],
  },
  {
    bankCode: '65341770',
    bankName: '临汾市尧都区农村信用合作联社',
    patterns: [{ reg: /^(625158)\d{10}$/g }],
  },
  {
    bankCode: '65341770',
    bankName: '临汾市尧都区农村信用合作联社',
    patterns: [{ reg: /^(628382)\d{10}$/g }],
  },
  {
    bankCode: '65341770',
    bankName: '临汾市尧都区农村信用合作联社',
    patterns: [{ reg: /^(625820)\d{10}$/g }],
  },
  {
    bankCode: '65373020',
    bankName: '无锡农村商业银行',
    patterns: [{ reg: /^(628369)\d{10}$/g }],
  },
  {
    bankCode: '65373020',
    bankName: '无锡农村商业银行',
    patterns: [{ reg: /^(622569)\d{10}$/g }],
  },
  {
    bankCode: '65385500',
    bankName: '湖南农村信用社联合社',
    patterns: [{ reg: /^(622906)\d{10}$/g }],
  },
  {
    bankCode: '65385500',
    bankName: '湖南农村信用社联合社',
    patterns: [{ reg: /^(628386)\d{10}$/g }],
  },
  {
    bankCode: '65385500',
    bankName: '湖南省农村信用联合社',
    patterns: [{ reg: /^(625519)\d{10}$/g }],
  },
  {
    bankCode: '65385500',
    bankName: '湖南农信',
    patterns: [{ reg: /^(625506)\d{10}$/g }],
  },
  {
    bankCode: '65394200',
    bankName: '江西省农村信用社联合社',
    patterns: [{ reg: /^(628392)\d{10}$/g }],
  },
  {
    bankCode: '65394200',
    bankName: '江西省农村信用社联合社',
    patterns: [{ reg: /^(625992)\d{10}$/g }],
  },
  {
    bankCode: '65394200',
    bankName: '江西省农村信用社联合社',
    patterns: [{ reg: /^(623092)\d{10}$/g }],
  },
  {
    bankCode: '65473600',
    bankName: '安徽省农村信用社',
    patterns: [{ reg: /^(621778)\d{13}$/g }],
  },
  {
    bankCode: '65473600',
    bankName: '安徽省农村信用社',
    patterns: [{ reg: /^(623220)\d{13}$/g }],
  },
  {
    bankCode: '65473600',
    bankName: '安徽省农村信用社',
    patterns: [{ reg: /^(623637)\d{13}$/g }],
  },
  {
    bankCode: '65473600',
    bankName: '安徽省农村信用社',
    patterns: [{ reg: /^(621550)\d{13}$/g }],
  },
  {
    bankCode: '65492340',
    bankName: '朝阳银行',
    patterns: [{ reg: /^(628244)\d{10}$/g }],
  },
  {
    bankCode: '65520000',
    bankName: '保定银行',
    patterns: [{ reg: /^(628364)\d{10}$/g }],
  },
  {
    bankCode: '65541310',
    bankName: '邢台银行',
    patterns: [{ reg: /^(620528)\d{13}$/g }],
  },
  {
    bankCode: '65541310',
    bankName: '邢台银行',
    patterns: [{ reg: /^(62326551)\d{11}$/g }],
  },
  {
    bankCode: '65550000',
    bankName: '山西省农村信用社联合社',
    patterns: [{ reg: /^(628350)\d{10}$/g }],
  },
  {
    bankCode: '65561100',
    bankName: '天津滨海农村商业银行',
    patterns: [{ reg: /^(625152)\d{10}$/g }],
  },
  {
    bankCode: '65595210',
    bankName: '武汉农村商业银行',
    patterns: [{ reg: /^(625156)\d{10}$/g }],
  },
  {
    bankCode: '65675061',
    bankName: '商丘市商业银行',
    patterns: [{ reg: /^(628271)\d{10}$/g }],
  },
  {
    bankCode: '65705500',
    bankName: '华融湘江银行',
    patterns: [{ reg: /^(625886)\d{10}$/g }],
  },
  {
    bankCode: '65705500',
    bankName: '华融湘江银行',
    patterns: [{ reg: /^(628328)\d{10}$/g }],
  },
  {
    bankCode: '65864910',
    bankName: '中原银行',
    patterns: [{ reg: /^(625200)\d{10}$/g }],
  },
  {
    bankCode: '65864910',
    bankName: '中原银行',
    patterns: [{ reg: /^(628343)\d{10}$/g }],
  },
  {
    bankCode: '66666666',
    bankName: '兰州市商业银行',
    patterns: [{ reg: /^(94004009)\d{8}$/g }],
  },
  {
    bankCode: '69410000',
    bankName: '河北省农村信用社联合社',
    patterns: [{ reg: /^(625837)\d{10}$/g }],
  },
  {
    bankCode: '69410000',
    bankName: '河北省农村信用社联合社',
    patterns: [{ reg: /^(62519303)\d{8}$/g }],
  },
  {
    bankCode: '69551750',
    bankName: '晋中银行',
    patterns: [{ reg: /^(628354)\d{10}$/g }],
  },
  {
    bankCode: '99900036',
    bankName: '中行悉尼',
    patterns: [{ reg: /^(621293)\d{10}$/g }],
  },
  {
    bankCode: '99900036',
    bankName: '中行悉尼',
    patterns: [{ reg: /^(621294)\d{10}$/g }],
  },
  {
    bankCode: '99900036',
    bankName: '中行悉尼',
    patterns: [{ reg: /^(621342)\d{10}$/g }],
  },
  {
    bankCode: '99900036',
    bankName: '中行悉尼',
    patterns: [{ reg: /^(621364)\d{10}$/g }],
  },
  {
    bankCode: '99900036',
    bankName: '中行悉尼',
    patterns: [{ reg: /^(621394)\d{10}$/g }],
  },
  {
    bankCode: '99900036',
    bankName: '中行悉尼',
    patterns: [{ reg: /^(621343)\d{10}$/g }],
  },
  {
    bankCode: '99900124',
    bankName: '"Bank of China,Canada"',
    patterns: [{ reg: /^(623423)\d{10}$/g }],
  },
  {
    bankCode: '99900250',
    bankName: 'Bank of China Paris Branch',
    patterns: [{ reg: /^(629153)\d{10}$/g }],
  },
  {
    bankCode: '99900348',
    bankName: 'Bank of China (Hungary) Close',
    patterns: [{ reg: /^(623485)\d{10}$/g }],
  },
  {
    bankCode: '99900360',
    bankName: '中行印尼分行',
    patterns: [{ reg: /^(621248)\d{10}$/g }],
  },
  {
    bankCode: '99900392',
    bankName: '中行日本分行',
    patterns: [{ reg: /^(621215)\d{10}$/g }],
  },
  {
    bankCode: '99900410',
    bankName: '中国银行首尔分行',
    patterns: [{ reg: /^(621249)\d{10}$/g }],
  },
  {
    bankCode: '99900458',
    bankName: 'Bank of China(Malaysia)',
    patterns: [{ reg: /^(625829)\d{10}$/g }],
  },
  {
    bankCode: '99900458',
    bankName: 'Bank of China(Malaysia)',
    patterns: [{ reg: /^(625943)\d{10}$/g }],
  },
  {
    bankCode: '99900608',
    bankName: '中行菲律宾分行',
    patterns: [{ reg: /^(621231)\d{10}$/g }],
  },
  {
    bankCode: '99900702',
    bankName: '中行新加坡分行',
    patterns: [{ reg: /^(622790)\d{10}$/g }],
  },
  {
    bankCode: '99900702',
    bankName: '中行新加坡分行',
    patterns: [{ reg: /^(6227890)\d{9}$/g }],
  },
  {
    bankCode: '99900702',
    bankName: '中行新加坡分行',
    patterns: [{ reg: /^(6227891)\d{9}$/g }],
  },
  {
    bankCode: '99900702',
    bankName: '中行新加坡分行',
    patterns: [{ reg: /^(6227892)\d{9}$/g }],
  },
  {
    bankCode: '99900702',
    bankName: '中行新加坡分行',
    patterns: [{ reg: /^(6227893)\d{9}$/g }],
  },
  {
    bankCode: '99900702',
    bankName: '中行新加坡分行',
    patterns: [{ reg: /^(6227894)\d{9}$/g }],
  },
  {
    bankCode: '99900702',
    bankName: '中行新加坡分行',
    patterns: [{ reg: /^(6227895)\d{9}$/g }],
  },
  {
    bankCode: '99900702',
    bankName: '中行新加坡分行',
    patterns: [{ reg: /^(6227896)\d{9}$/g }],
  },
  {
    bankCode: '99900702',
    bankName: '中行新加坡分行',
    patterns: [{ reg: /^(6227897)\d{9}$/g }],
  },
  {
    bankCode: '99900702',
    bankName: '中行新加坡分行',
    patterns: [{ reg: /^(6227898)\d{9}$/g }],
  },
  {
    bankCode: '99900702',
    bankName: '中行新加坡分行',
    patterns: [{ reg: /^(6227899)\d{9}$/g }],
  },
  {
    bankCode: '99900702',
    bankName: '中行新加坡分行',
    patterns: [{ reg: /^(624405)\d{10}$/g }],
  },
];

module.exports =  bankCardList;