<div align="center">

# ✨ 오늘의 별자리 운세

**별자리를 고르거나 생일을 입력하면, 오늘의 운세를 바로 보여주는 인터랙티브 웹페이지**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/dependencies-none-8A2BE2?style=for-the-badge)

♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓

</div>

---

## 🔮 소개

설치도, 서버도, 라이브러리도 필요 없는 **순수 HTML · CSS · JavaScript** 프로젝트예요.
`index.html`만 열면 12개 별자리의 오늘 운세를 확인할 수 있어요.

## 🌟 주요 기능

| 기능 | 설명 |
| --- | --- |
| 🪐 **12별자리 선택** | 카드를 눌러 해당 별자리의 오늘 운세를 확인해요 |
| 🎂 **생일로 찾기** | 월·일을 고르면 내 별자리를 찾아주고 바로 운세로 이동해요 |
| 💘 **6가지 운세** | 연애운 · 대인운 · 합격운 · 계약운 · 금전운 · 건강운을 ★ 1~5점으로 보여줘요 |
| 🎨 **행운 아이템** | 행운의 색과 행운의 숫자, 오늘의 한 줄 조언을 알려줘요 |
| 🧊 **3D 별자리 심볼** | 마우스를 올리면 입체 심볼이 움직이는 인터랙션이 있어요 |
| 💾 **마지막 선택 기억** | 브라우저에 저장해서 다시 열면 보던 별자리를 복원해요 |

## 🎲 운세는 어떻게 정해지나요?

운세는 `날짜 + 별자리 이름`을 시드로 한 **하루 고정 난수**로 계산해요.

- 같은 날에는 언제, 몇 번을 열어도 **같은 결과**가 나와요.
- 날짜가 바뀌면 결과도 새로 바뀌어요.
- 가장 높은 점수의 운세는 행운의 숫자에, 평균 점수는 한 줄 조언의 톤(살리기 / 보완하기)에 반영돼요.
- 한 줄 조언은 별자리끼리 최대한 겹치지 않게 배정돼요.

> ⚠️ 재미로 보는 운세예요. 실제 점성술 계산이 아니에요.

## 🚀 실행 방법

```bash
git clone https://github.com/ke2ke2on/horoscope.git
cd horoscope
```

이후 `index.html`을 브라우저로 열면 끝이에요. (빌드 과정 없음)

## 📁 프로젝트 구조

```
horoscope/
├── index.html   # 페이지 구조
├── style.css    # 스타일 · 별 배경 · 3D 심볼 · 애니메이션
└── script.js    # 별자리 데이터 · 운세 생성 · 화면 렌더링
```

## 🛠️ 커스터마이징

`script.js`의 데이터만 고치면 돼요.

- **운세 항목 추가** — `LUCKS` 배열에 `{ key, label, texts }` 한 줄을 추가해요. (`texts`는 1~5점에 해당하는 멘트 5개)
- **멘트 수정** — `SUMMARIES`, `ADVICE_BY_LUCK`의 문장을 바꿔요.
- **행운의 색 변경** — `COLORS` 배열을 수정해요.
