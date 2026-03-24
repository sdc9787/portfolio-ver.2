export const portfolioData = {
  "aboutMe": [
    {
      "title": "최신 기술 스택 활용",
      "content": ["Next.js App Router, TanStack Query, Msw 등 최신 프론트엔드 기술을 활용하여 5개의 프로젝트를 성공적으로 완수했습니다. ", "FSD 아키텍처, Prefetch 서버 구조, middleware를 통한 인증/권한 관리 등 실무 중심의 개발 경험을 보유하고 있습니다."],
      "bold": ["Next.js App Router, TanStack Query, Msw", "5개의 프로젝트를 성공적으로 완수", "FSD 아키텍처, Prefetch 서버 구조, middleware"]
    },
    {
      "title": "성능 최적화 및 SEO",
      "content": ["이미지 최적화를 통해 용량 25% 감소, AWS S3와 CDN 활용으로 로딩 속도 53% 향상을 달성했습니다.", "SEO 최적화를 통해 구글 서치 콘솔 기준 노출 232% 증가, 클릭 40% 증가, 검색 최상단 노출 성과를 달성했습니다."],
      "bold": ["용량 25% 감소", "로딩 속도 53% 향상", "노출 232% 증가, 클릭 40% 증가"]
    },
    {
      "title": "실전 협업 및 문제 해결",
      "content": [
        "7인 팀 프로젝트에서 FE 기본 구조 설계 및 컨벤션 설정을 주도하여 팀 협업 효율성을 향상시켰습니다.",
        "Jira, Swagger, Postman을 활용한 이슈 관리 및 API 문서화로 백엔드/디자이너와의 원활한 협업을 구축했습니다. 프로젝트 전반에 걸쳐 발생한 기술적 문제들을 지속적으로 분석하고 해결한 트러블슈팅 개선 경험이 있습니다."
      ],
      "bold": ["FE 기본 구조 설계 및 컨벤션 설정", "트러블슈팅 개선 경험"]
    }
  ],

  "skills": {
    "Frontend": [
      { "name": "HTML", "img": "/skill/HTML.svg" },
      { "name": "CSS", "img": "/skill/CSS.svg" },
      { "name": "JavaScript", "img": "/skill/JavaScript.svg" },
      { "name": "TypeScript", "img": "/skill/TypeScript.svg" },
      { "name": "React", "img": "/skill/React-Light.svg" },
      { "name": "Next.js", "img": "/skill/NextJS-Light.svg" },
      { "name": "Tailwind", "img": "/skill/TailwindCSS-Light.svg" },
      { "name": "TanStack Query", "img": "/skill/TanStackQuery.svg" },
      { "name": "Msw", "img": "/skill/Msw.svg" }
    ],
    "StateManagement": [
      { "name": "Redux", "img": "/skill/Redux.svg" },
      { "name": "Zustand", "img": "/skill/Zustand.svg" }
    ],
    "Deployment": [
      { "name": "AWS", "img": "/skill/AWS-Light.svg" },
      { "name": "Cloudflare", "img": "/skill/Cloudflare-Light.svg" },
      { "name": "Vercel", "img": "/skill/Vercel-Light.svg" }
    ],
    "Tools": [
      { "name": "Git", "img": "/skill/Git.svg" },
      { "name": "Jira", "img": "/skill/Jira.svg" },
      { "name": "Postman", "img": "/skill/Postman.svg" },
      { "name": "Swagger", "img": "/skill/Swagger.svg" }
    ]
  },
  "projects": [
    {
      "title": "자기소개서 AI 첨삭 서비스",
      "content": "사용자가 작성한 자기소개서를 AI가 분석하고 첨삭을 제공하는 서비스입니다. 사용자는 첨삭된 내용으로 모의 면접을 연습할 수 있습니다.",
      "projectFunction": ["AI 기반 자기소개서 첨삭 기능 제공", "첨삭된 내용을 바탕으로 모의 면접 연습 기능 제공", "이력서 변환 기능 및 다운로드 제공", "관리자 페이지 구현"],
      "projectGoal": "이번 프로젝트에서는 새롭게 습득한 기술(TanStack Query, Msw)을 연습하고, 관리자 페이지를 중점적으로 개발했습니다.",
      "projectOverview": "취업 준비 과정에서 많은 구직자들이 이력서와 자기소개서를 효율적으로 개선하기 어렵고, 전문적인 피드백을 받기 위해서는 시간과비용이 많이 드는 문제가 있었습니다. 또한 기존 서비스들은 단순 문장 교정에 그치거나, 실제 면접 대비로 이어지지 않는 한계가 있었습니다.",
      "detailContent": [
        {
          "title": "프로젝트 기획 및 설계",
          "content": ["프로젝트 초기 기획 단계에서 요구사항 분석 및 기능 정의", "Figma를 활용하여 UI/UX 디자인 및 프로토타입 제작"]
        },
        {
          "title": "Msw를 활용한 프론트엔드 개발",
          "content": ["Msw를 활용하여 백엔드 API를 모킹하고, 프론트엔드 개발 및 테스트 진행", "백엔드와 병렬 개발을 통해 개발 효율성 향상"]
        },
        {
          "title": "middleware를 사용한 관리자 페이지 구현",
          "content": ["middleware를 사용하여 관리자 페이지의 보안 강화", "관리자 전용 기능 구현 및 사용자 관리 기능 제공"]
        },
        {
          "title": "TanStack Query를 활용한 데이터 관리",
          "content": ["TanStack Query를 활용하여 서버 상태 관리 및 데이터 패칭 최적화", "캐싱 및 자동 갱신 기능을 통해 사용자 경험 향상"]
        }
      ],
      "troubleshooting": [
        {
          "title": "React-pdf Font 미적용 문제 해결",
          "problem": "React-pdf 라이브러리를 사용하여 PDF 문서를 렌더링할 때, 폰트가 제대로 적용되지 않는 문제를 발견했습니다.",
          "cause": "현재 프로젝트에서는 구글 폰트를 사용하고 있었으나, React-pdf가 기본적으로 웹 폰트를 지원하지 않아 폰트가 올바르게 렌더링되지 않았습니다.",
          "solution": "해결책으로, 필요한 폰트 파일을 프로젝트에 추가하고, React-pdf의 Font.register 메서드를 사용하여 폰트를 등록했습니다. 이를 통해 PDF 문서에서 원하는 폰트가 올바르게 적용되도록 했습니다."
        },
        {
          "title": "Refresh Token 갱신 문제 해결",
          "problem": "Access Token이 만료된 후, Refresh Token을 사용하여 새로운 Access Token을 발급받는 과정에서 Refresh Token이 정상적으로 쿠키에 저장되지 않는 문제를 발견했습니다.",
          "cause": "일반적인 fetch 요청에서는 Refresh Token이 정상적으로 쿠키에 저장되었으나, middleware를 통한 요청에서는 쿠키가 클라이언트에 전달되지 않는 문제가 있었습니다. 이는 middleware가 쿠키를 처리하는 방식과 관련이 있었습니다.",
          "solution": "해결책으로, Access Token이 만료됬을때 Refresh 페이지로 리다이렉트 시키는 방식으로 변경했습니다. 이를 통해 Refresh Token이 쿠키에 정상적으로 저장되고, 새로운 Access Token을 발급받을 수 있도록 했습니다."
        },
        {
          "title": "글로벌 로딩 모달중 이동시 유지 문제 해결",
          "problem": "글로벌 로딩 모달이 활성화된 상태에서 페이지 이동 시, 모달이 유지되는 문제를 발견했습니다.",
          "cause": "글로벌 상태 관리 라이브러리인 Zustand를 사용하여 로딩 상태를 관리하고 있었으나, 페이지 이동 시 로딩 상태가 초기화되지 않아 모달이 계속 표시되는 문제가 있었습니다.",
          "solution": "해결책으로, Router Handler를 사용하여 페이지 이동 시 로딩 상태를 초기화하도록 구현했습니다. 이를 통해 페이지 이동 시 모달이 정상적으로 사라지도록 했습니다."
        }
      ],
      "team": "5인 팀 프로젝트[FE 1, BE 4]",
      "role": "FE 개발 기여도 100%",
      "period": "2025.09 ~ 2025.09",
      "imgUrl": "cvmento",
      "img": 11,
      "images": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      "link": "https://cvmento.shop",
      "github": "https://github.com/sdc9787/AIBE2_FinalProject_CodeHansabari_FE",
      "skills": {
        "Frontend": [
          { "name": "Next.js", "img": "/skill/NextJS-Light.svg" },
          { "name": "TypeScript", "img": "/skill/TypeScript.svg" },
          { "name": "Tailwind", "img": "/skill/TailwindCSS-Light.svg" },
          { "name": "TanStack Query", "img": "/skill/TanStackQuery.svg" },
          { "name": "Msw", "img": "/skill/Msw.svg" }
        ],
        "StateManagement": [{ "name": "Zustand", "img": "/skill/Zustand.svg" }],
        "Deployment": [{ "name": "Vercel", "img": "/skill/Vercel-Light.svg" }],
        "Tools": [
          { "name": "Git", "img": "/skill/Git.svg" },
          { "name": "Jira", "img": "/skill/Jira.svg" },
          { "name": "Swagger", "img": "/skill/Swagger.svg" }
        ]
      }
    },
    {
      "title": "팀 스터디 투두리스트",
      "content": "스터디 팀원들과 함께하는 스터디 투두리스트입니다. 스터디 내 공용 및 개인 투두 관리 기능과 노트 작성 및 진행률 공유를 통한 효율적인 스터디 관리를 지원합니다.",
      "projectFunction": ["공용 및 개인 투두 관리 기능 제공", "투두별 노트 작성 및 관리", "스터디원간 진행률 공유 및 랭킹 기능 제공"],
      "projectGoal": "이번 프로젝트에서는 새로운 기술 습득, 백엔드와 디자이너와 협업을 중심으로 작업했습니다.",
      "projectOverview": "기존에는 개인 공부용 Todo 리스트를 제작하려 했으나, 혼자 관리하는 것보다 스터디 구성원들과 함께 진행 상황을 공유하며 동기부여를 얻는 방식이 필요했습니다.",
      "detailContent": [
        {
          "title": "FSD 구조 설계 및 적용",
          "content": ["프로젝트 초기 기획 단계에서 요구사항 분석 및 기능 정의", "FSD(Feature-Sliced Design) 구조를 설계하고 적용하여 코드의 유지보수성과 확장성 향상"]
        },
        {
          "title": "Prefetch 서버 구조 설계 및 적용",
          "content": ["서버 사이드 렌더링(SSR)과 클라이언트 사이드 렌더링(CSR)의 장점을 결합한 Prefetch 서버 구조 설계", "초기 데이터 로딩 속도 향상 및 사용자 경험 개선"]
        },
        { "title": "공용 QueryKey 적용", "content": ["공용 QueryKey를 설정하여 데이터 패칭 시 일관된 키 사용", "팀원 간 데이터 패칭 로직 공유 및 협업 효율성 향상"] },
        {
          "title": "프론트엔드 컨벤션 설정",
          "content": ["Nameing Convention, Git Commit Convention, Git Flow 등 프론트엔드 개발에 필요한 컨벤션 설정", "팀원 간 일관된 코드 스타일 유지 및 협업 효율성 향상"]
        },
        {
          "title": "협업 도구 활용",
          "content": ["Figma를 활용하여 UI/UX 디자인 및 와이어프레임 공유", "Jira를 활용한 이슈 관리 및 스프린트 진행", "Swagger를 활용한 API 문서화 및 백엔드와의 원활한 커뮤니케이션"]
        },
        {
          "title": "HttpOnly 보안 강화",
          "content": ["HttpOnly 쿠키를 적용함에 따라 XSS 공격 방지", "HttpOnly와 Secure 옵션만으로는 CSRF 공격을 완전히 막을 수 없기 때문에, SameSite 옵션을 추가하여 CSRF 공격을 방지"]
        }
      ],
      "troubleshooting": [
        {
          "title": "Next.js App Router에서 FSD 구조 적용 시 pages 폴더 충돌 문제 해결",
          "problem": "FSD 구조 도입 시 pages/ 폴더로 인해 Next.js App Router와 충돌이 발생하여 app/ 디렉토리의 라우트가 정상 동작하지 않았습니다.",
          "cause": "Next.js는 pages/ 디렉토리를 우선적으로 Pages Router로 인식하여 App Router와 동시 사용이 불가능했습니다.",
          "solution": "root/pages/ 디렉토리를 비워두고 실질적인 라우팅은 app/ 디렉토리에서만 처리하도록 변경하여, FSD 아키텍처를 src/ 내에 유지하면서도 라우팅 충돌을 방지했습니다."
        },
        {
          "title": "Prefetch 서버 구조 적용 시 초기 데이터 로딩 문제 해결",
          "problem": "Prefetch 서버 구조를 적용하는 과정에서 초기 데이터 로딩이 지연되어 사용자 경험이 저하되는 문제를 발견했습니다.",
          "cause": "서버에서 데이터를 미리 가져오는 과정에서 불필요한 네트워크 요청이 발생하고, 클라이언트 측에서 데이터가 준비되기 전에 렌더링이 시작되어 로딩 시간이 길어졌습니다.",
          "solution": "데이터 패칭 로직을 최적화하고, TanStack Query의 prefetch 기능을 활용하여 필요한 데이터만 미리 로드하도록 개선했습니다. 또한, Suspense와 로딩 상태 관리를 통해 사용자에게 더 나은 경험을 제공했습니다."
        }
      ],
      "team": "7인 팀 프로젝트[FE 4, BE 2, DE 1]",
      "role": "프로젝트 기획 및 FE 기본 구조 및 대시보드 개발",
      "period": "2025.07 ~ 2025.08",
      "imgUrl": "todolist",
      "img": 7,
      "images": [4, 5, 6, 7],
      "link": null,
      "github": "https://github.com/CODEIT-FESI-10-5/frontend",
      "skills": {
        "Frontend": [
          { "name": "Next.js", "img": "/skill/NextJS-Light.svg" },
          { "name": "TypeScript", "img": "/skill/TypeScript.svg" },
          { "name": "Tailwind", "img": "/skill/TailwindCSS-Light.svg" },
          { "name": "TanStack Query", "img": "/skill/TanStackQuery.svg" },
          { "name": "Msw", "img": "/skill/Msw.svg" }
        ],
        "StateManagement": [{ "name": "Zustand", "img": "/skill/Zustand.svg" }],
        "Deployment": [{ "name": "Vercel", "img": "/skill/Vercel-Light.svg" }],
        "Tools": [
          { "name": "Git", "img": "/skill/Git.svg" },
          { "name": "Jira", "img": "/skill/Jira.svg" },
          { "name": "Swagger", "img": "/skill/Swagger.svg" }
        ]
      }
    },
    {
      "title": "관리자용 대시보드",
      "content": "Next.js middleware를 활용한 관리자용 대시보드입니다. 사용자 인증 및 권한 관리를 위한 기능을 포함하고 있습니다.",
      "projectFunction": ["Next.js middleware를 활용한 인증 및 권한 관리", "http only cookies를 활용한 보안 강화"],
      "projectGoal": "이번 프로젝트에서는 Next.js의 최신 기능을 습득(App Router, middleware)에 중점을 두었습니다.",
      "projectOverview": "이 프로젝트는 Next.js로 관리자용 대시보드를 개발하였습니다.middleware와 http only cookies를 사용해 사용자 인증 및 권한 관리 기능을 통해 보안을 강화하였습니다.",
      "detailContent": [
        {
          "title": "Next.js Middleware 활용",
          "content": ["Next.js의 middleware 기능을 활용하여 요청 전 처리 로직 구현", "인증 및 권한 관리 기능을 효율적으로 처리"]
        },
        {
          "title": "HttpOnly + JWT를 통한 보안 강화",
          "content": ["http only cookies를 활용하여 XSS 공격 방지", "JWT 토큰을 이용한 안전한 인증 시스템 구축"]
        }
      ],
      "troubleshooting": [
        {
          "title": "middleware 적용 범위 문제 해결",
          "problem": "Next.js middleware를 적용할 때, 관리자 페이지에만 적용되도록 설정했으나, 일부 일반 사용자 페이지에도 middleware가 적용되는 문제를 발견했습니다.",
          "cause": "middleware의 적용 범위 설정을 잘못 지정하여, 특정 경로에만 적용되도록 설정하지 못한 것이 원인이었습니다.",
          "solution": "해결책으로, middleware의 적용 범위를 명확히 정의하고, 관리자 페이지와 일반 사용자 페이지에 대해 각각 다른 middleware를 적용하도록 설정했습니다."
        }
      ],
      "team": "2인 팀 프로젝트[FE 1, BE 1]",
      "role": "프로젝트 기획 및 FE 개발 기여도 100%",
      "period": "2025.06 ~ 2025.07",
      "imgUrl": "admindashboard",
      "img": 3,
      "images": [1, 2, 3, 4, 5, 6, 7, 8],
      "link": "https://senahaza.store",
      "github": "https://github.com/msw-Hub/senahaza",
      "skills": {
        "Frontend": [
          { "name": "Next.js", "img": "/skill/NextJS-Light.svg" },
          { "name": "TypeScript", "img": "/skill/TypeScript.svg" },
          { "name": "Tailwind", "img": "/skill/TailwindCSS-Light.svg" }
        ],
        "StateManagement": [{ "name": "Zustand", "img": "/skill/Zustand.svg" }],
        "Deployment": [{ "name": "Vercel", "img": "/skill/Vercel-Light.svg" }],
        "Tools": [
          { "name": "Git", "img": "/skill/Git.svg" },
          { "name": "Jira", "img": "/skill/Jira.svg" },
          { "name": "Postman", "img": "/skill/Postman.svg" }
        ]
      }
    },
    {
      "title": "게임 정보 제공 사이트",
      "content": "로스트아크라는 게임의 실시간 게임 정보를 제공하는 사이트입니다. 게임 정보를 제공하는 API를 활용하여 사용자가 원하는 게임 정보를 쉽게 찾을 수 있도록 구현했습니다.",
      "projectFunction": ["보석 검색", "영지 제작", "생활 재료 판매", "경매 입찰"],
      "projectGoal": "이번 프로젝트에서는 SEO 최적화, Google Analytics 및 Google Search Console 연동, 반응형 디자인, 이미지 최적화에 중점을 두었습니다.",
      "projectOverview": "출시된지 오래된 게임이다보니 대부분의 추가기능을 가진 웹사이트들이 존재했습니다. 실제 유저들이 사이트에 접근하기 위해서는 기존 사이트들에 추가된 기능이 필요하다고 판단하여, 새로운 기능을 추가하거나 기존 사이트들에 없는 기능을 추가하기로 했습니다.",
      "detailContent": [
        {
          "title": "SEO 최적화",
          "content": ["Helmet, Lighthouse을 활용하여 페이지별 메타 태그 추가 및 SEO 최적화", "구글 및 네이버 검색 최적화를 통해 최상단 검색 결과 달성", "SEO 최적화를 통해 구글 서치 콘솔기준 노출 약 232% 증가, 클릭 약 40% 증가"]
        },
        {
          "title": "Google Analytics 및 Google Search Console 연동",
          "content": ["Google Analytics를 활용하여 사용자 행동 분석, 트래픽 모니터링 및 유입경로 분석", "Google Search Console을 통해 사이트 인덱싱 상태 및 검색 성능 관리"]
        },
        {
          "title": "반응형 디자인",
          "content": ["모바일 및 데스크톱 등 다양한 화면 크기에 대응하는 반응형 디자인 구현", "Tailwind를 활용하여 유연한 레이아웃 구성"]
        },
        {
          "title": "이미지 최적화",
          "content": ["PNG를 WebP 형식으로 변환하여 이미지 용량 약 25% 감소", "AWS S3와 CDN을 활용하여 이미지 로딩 속도 약 53% 향상"]
        }
      ],
      "troubleshooting": [
        {
          "title": "SEO 최적화 문제 해결",
          "problem": "초기 SEO 최적화 작업 후에도 검색 엔진에서 사이트의 노출이 기대에 미치지 못하는 문제를 발견했습니다.",
          "cause": "메타 태그 설정이 불완전하거나, google search console에 사이트맵이 제대로 제출되지 않은 것이 원인이었습니다.",
          "solution": "해결책으로, Helmet을 사용하여 각 페이지에 적절한 메타 태그를 추가하고, 사이트맵을 생성하여 Google Search Console에 제출했습니다. 또한, Lighthouse를 활용하여 SEO 점수를 지속적으로 모니터링하고 개선했습니다."
        },
        {
          "title": "이미지 최적화 문제 해결",
          "problem": "사이트의 이미지 로딩 속도가 느려 사용자 경험이 저하되는 문제를 발견했습니다.",
          "cause": "이미지 파일 크기가 크고, CDN이 제대로 설정되지 않아 이미지 로딩에 시간이 많이 소요된 것이 원인이었습니다.",
          "solution": "해결책으로, PNG 이미지를 WebP 형식으로 변환하여 파일 크기를 약 25% 감소시켰습니다. 또한, AWS S3와 CDN을 활용하여 이미지 로딩 속도를 약 53% 향상시켰습니다."
        },
        {
          "title": "특정 map 함수내 중복 렌더링 문제 해결",
          "problem": "특정 map 함수 내에서 컴포넌트가 불필요하게 여러 번 렌더링되는 문제를 발견했습니다.",
          "cause": "컴포넌트의 key를 Image URL로 설정했으나, 동일한 이미지 URL이 여러 개 존재하여 React가 각 항목을 고유하게 식별하지 못한 것이 원인이었습니다.",
          "solution": "해결책으로, key를 Image URL 대신 이름과 Image URL을 조합한 고유한 값으로 변경하여 중복 렌더링 문제를 해결했습니다."
        }
      ],
      "team": "2인 팀 프로젝트[FE 1, BE 1]",
      "role": "프로젝트 기획 및 FE 개발 기여도 100%",
      "period": "2024.10 ~ 2024.12",
      "imgUrl": "moaloa",
      "img": 6,
      "images": [1, 2, 3, 4, 5, 6],
      "link": "https://moaloa.org",
      "github": "https://github.com/msw-Hub/moaloa",
      "skills": {
        "Frontend": [
          { "name": "React", "img": "/skill/React-Light.svg" },
          { "name": "TypeScript", "img": "/skill/TypeScript.svg" },
          { "name": "Tailwind", "img": "/skill/TailwindCSS-Light.svg" }
        ],
        "StateManagement": [{ "name": "Redux", "img": "/skill/Redux.svg" }],
        "Deployment": [
          { "name": "AWS", "img": "/skill/AWS-Light.svg" },
          { "name": "Cloudflare", "img": "/skill/Cloudflare-Light.svg" }
        ],
        "Tools": [
          { "name": "Git", "img": "/skill/Git.svg" },
          { "name": "Jira", "img": "/skill/Jira.svg" },
          { "name": "Postman", "img": "/skill/Postman.svg" }
        ]
      }
    },
    {
      "title": "반려동물 돌보미 플랫폼",
      "content": "반려동물을 위한 돌보미 플랫폼으로, 산책 및 돌봄 매칭, 커뮤니티, 플레이스(지도)등의 서비스를 제공합니다.",
      "projectFunction": ["산책 대행 및 돌봄 서비스", "반려동물 동반 가능 장소 안내 기능", "반려동물 관련 정보 공유 및 소통을 위한 커뮤니티 기능", "결제 시스템 구현"],
      "projectGoal": "이번 프로젝트에서는 PWA, 웹소켓, JWT 인증, Toss Payments API 연동에 중점을 두었습니다.",
      "projectOverview": "최근 증가하는 1인 가구와 반려동물 양육 가구에 주목하여, 전문적인 반려동물 산책 대행 서비스인 Dog Walker에서 아이디어를 착안하였습니다.",
      "detailContent": [
        {
          "title": "웹소켓을 활용한 실시간 위치 공유 및 채팅",
          "content": ["웹소켓을 활용하여 실시간 위치 공유 기능 구현", "실시간 채팅 기능을 통해 사용자 간 원활한 소통 지원"]
        },
        {
          "title": "회원 관리 및 보안을 위한 JWT 인증",
          "content": ["회원가입 시 이메일 인증을 통한 계정 활성화", "소셜 로그인 기능 지원으로 간편한 회원가입 제공", "JWT를 활용한 로그인 및 사용자 인증 강화"]
        },
        {
          "title": "Toss Payments API를 활용한 결제 시스템",
          "content": ["Toss Payments API를 이용한 결제 시스템 구현", "안전하고 편리한 결제 프로세스 제공"]
        }
      ],
      "troubleshooting": [
        {
          "title": "PWA 적용 문제 해결",
          "problem": "PWA 기능을 적용하는 과정에서 서비스 워커가 제대로 등록되지 않아 오프라인 상태에서 앱이 정상적으로 작동하지 않는 문제를 발견했습니다.",
          "cause": "서비스 워커 파일의 경로 설정이 잘못되어 브라우저가 서비스를 올바르게 인식하지 못한 것이 원인이었습니다.",
          "solution": "해결책으로, 서비스 워커 파일의 경로를 올바르게 수정하고, manifest.json 파일을 정확히 설정하여 PWA 기능이 정상적으로 작동하도록 했습니다."
        },
        {
          "title": "웹소켓 연결 문제 해결",
          "problem": "웹소켓을 통한 실시간 위치 공유 기능 구현 시, 특정 상황에서 연결이 끊어지는 문제를 발견했습니다.",
          "cause": "서버와 클라이언트 간의 네트워크 불안정성 및 타임아웃 설정이 원인이었습니다.",
          "solution": "해결책으로, 웹소켓 연결 유지 로직을 개선하고, 재연결 메커니즘을 추가하여 안정적인 실시간 통신을 구현했습니다."
        },
        {
          "title": "JWT 인증 문제 해결",
          "problem": "JWT 토큰을 활용한 인증 시스템에서 토큰 만료 후 자동 로그아웃이 제대로 작동하지 않는 문제를 발견했습니다.",
          "cause": "토큰 갱신 로직이 클라이언트 측에서 제대로 구현되지 않아 만료된 토큰으로 인해 인증 오류가 발생한 것이 원인이었습니다.",
          "solution": "해결책으로, 토큰 만료 시 자동으로 갱신하는 로직을 추가하고, 갱신 실패 시 사용자에게 알림을 제공하여 원활한 인증 경험을 제공했습니다."
        }
      ],
      "team": "3인 팀 프로젝트[FE 1, BE 2]",
      "role": "프로젝트 기획 및 FE 개발 기여도 100%",
      "period": "2024.03 ~ 2024.06",
      "imgUrl": "pet",
      "img": 19,
      "images": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      "link": null,
      "github": "https://github.com/sdc9787/pet-sitter-pwa",
      "isVertical": true,
      "skills": {
        "Frontend": [
          { "name": "React", "img": "/skill/React-Light.svg" },
          { "name": "TypeScript", "img": "/skill/TypeScript.svg" },
          { "name": "Tailwind", "img": "/skill/TailwindCSS-Light.svg" },
          { "name": "PWA", "img": "/skill/PWA.svg" }
        ],
        "StateManagement": [{ "name": "Redux", "img": "/skill/Redux.svg" }],
        "Deployment": [
          { "name": "AWS", "img": "/skill/AWS-Light.svg" },
          { "name": "Cloudflare", "img": "/skill/Cloudflare-Light.svg" }
        ],
        "Tools": [
          { "name": "Git", "img": "/skill/Git.svg" },
          { "name": "Postman", "img": "/skill/Postman.svg" }
        ]
      }
    }
  ],
  "education": [
    {
      "title": "코드잇 부트캠프",
      "subtitle": "프론트엔드 단기심화 과정 수료",
      "period": "2025.06 ~ 2025.08",
      "content": ["Next.js, Tanstack Query, Msw 등 프론트엔드 기술 습득", "백엔드, 디자이너와의 협업을 통한 실무 경험 쌓기", "코드 리뷰 및 피드백을 통한 코드 품질 향상"]
    },
    {
      "title": "성결대학교",
      "subtitle": "정보통신공학과 학사 졸업",
      "period": "2019.03 ~ 2025.02",
      "content": ["자료구조, 알고리즘, 운영체제 등의 컴퓨터 공학 기초 지식 습득"]
    }
  ]
};
