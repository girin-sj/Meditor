export const INITIAL_TREAT = [
    {   
        id: 1,
        title: '유착성 관절낭염(Frozen shoulder)',
        subtitle: '오십견 진료 요약',
        diagnosis: [
            '어깨 운동 범위 제한',
            '근육 긴장도 증가 → 오십견 의심',
        ],
        prescriptions: [
            {
                name: '근육 이완제(Persion 50mg)',
                description: '어깨 근육을 풀어주는 약',
                dosage: '1정 | 하루 3회 | 식후',
                warning: null,
            },
            {
                name: '보조 진통제(Acetaminopen 500mg)',
                description: '통증을 완화하고 열을 낮추는 약',
                dosage: '1정 | 통증이 있을 때 복용(특히 야간)',
                warning: '※ 하루에 4회 이상 복용 금지',
            },
        ],
        treatmentAndCare: [
            '매일 꾸준한 어깨 스트레칭',
            '물리 치료 병행 권장',
            '수술 없이 회복 가능 \n (단, 6개월 이상 증상 지속 시 수술 고려)',
        ],
    },
    {
        id: 2,
        title: '고혈압(Hypertension)',
        subtitle: '고혈압 진료 요약',
        diagnosis: [
            '혈압 상승',
            '심장 부담 증가 → 고혈압 의심',
        ],
        prescriptions: [
            {
                name: '이뇨제(Diuretic 25mg)',
                description: '체내 나트륨과 수분 배출을 돕는 약',
                dosage: '1정 | 하루 1회 | 아침 식후',
                warning: null,
            },
            {
                name: '베타 차단제(Beta Blocker 50mg)',
                description: '심장 박동수를 낮추는 약',
                dosage: '1정 | 하루 2회 | 식전',
                warning: '※ 저혈압 증상 주의',
            },
        ],
        treatmentAndCare: [
            '저염식 식단 유지',
            '규칙적인 유산소 운동 권장',
            '정기적인 혈압 체크',
        ], 
    },
    {
        id: 3,
        title: '당뇨병(Diabetes Mellitus)',
        subtitle: '당뇨병 진료 요약',
        diagnosis: [
            '혈당 수치 상승',
            '인슐린 저항성 증가 → 당뇨병 의심',
        ],
        prescriptions: [
            {
                name: '메트포르민(Metformin 500mg)',
                description: '혈당 수치를 낮추는 약',
                dosage: '1정 | 하루 2회 | 식후',
                warning: null,
            },
            {
                name: '인슐린 주사(Insulin Injection)',
                description: '혈당 조절을 위한 인슐린 보충',
                dosage: '식전 30분 | 필요 시 투여',
                warning: '※ 저혈당 증상 주의',
            },
        ],
        treatmentAndCare: [
            '균형 잡힌 식단 유지',
            '규칙적인 운동 권장',
            '정기적인 혈당 체크',
        ],
    },
    {
        id: 4,
        title: '천식(Asthma)',
        subtitle: '천식 진료 요약',
        diagnosis: [
            '기도 염증 및 협착',
            '호흡 곤란 증가 → 천식 의심',
        ],
        prescriptions: [
            {
                name: '흡입 스테로이드(Inhaled Steroid)',
                description: '기도 염증 완화를 위한 약',
                dosage: '하루 2회 | 흡입',
                warning: null,
            },
            {
                name: '기관지 확장제(Bronchodilator)',
                description: '기도를 확장시켜 호흡을 돕는 약',
                dosage: '필요 시 사용',
                warning: '※ 과다 사용 주의',
            },
        ],
        treatmentAndCare: [
            '알레르기 유발 요인 회피',
            '정기적인 폐 기능 검사',
            '증상 악화 시 즉시 의료진 상담',
        ],
    }
]

// --------------------------
// 질환별 대화 스크립트 더미데이터
// --------------------------

export const SCRIPT_FROZEN_SHOULDER = [
    {
        id: 1,
        speaker: "doctor",
        message: "어떤 증상으로 내원하셨나요?"
    },
    {
        id: 2,
        speaker: "patient",
        message: "오른쪽 어깨가 아파서 팔이 잘 안 올라가요. 옷 입거나 머리 감을 때 특히 불편합니다."
    },
    {
        id: 3,
        speaker: "doctor",
        message: "통증은 계속 있으신가요? 아니면 움직일 때만 아프신가요?"
    },
    {
        id: 4,
        speaker: "patient",
        message: "평소에도 욱신거리지만 움직이면 더 아파요. 특히 밤에 자다가 깨요."
    },
    {
        id: 5,
        speaker: "doctor",
        message: "진찰해보니 관절의 움직임 범위가 제한되어 있고 근육 긴장도도 높습니다."
    },
    {
        id: 6,
        speaker: "doctor",
        message: "진단상 유착성 관절낭염, 즉 '오십견'이 의심됩니다.",
        keyword: "유착성 관절낭염"
    },
    {
        id: 7,
        speaker: "patient",
        message: "어떤 병인가요?"
    },
    {
        id: 8,
        speaker: "doctor",
        message: "어깨 관절막에 염증이 생겨 굳어지는 병입니다. 시간은 걸리지만 치료로 충분히 좋아질 수 있습니다."
    },
    {
        id: 9,
        speaker: "doctor",
        message: "통증 조절과 염증 완화를 위해 약을 처방해드릴게요."
    }
];

export const SCRIPT_HYPERTENSION = [
    {
        id: 1,
        speaker: "doctor",
        message: "최근 혈압이 높게 나온다고 하셨는데요, 어지러움이나 두통 같은 증상이 있으신가요?"
    },
    {
        id: 2,
        speaker: "patient",
        message: "요즘 계속 두통이 있고, 가슴이 답답한 느낌도 있어요."
    },
    {
        id: 3,
        speaker: "doctor",
        message: "혈압을 측정해보니 정상 범위보다 꽤 높게 나옵니다."
    },
    {
        id: 4,
        speaker: "doctor",
        message: "현재 상태로는 고혈압이 의심됩니다.",
        keyword: "고혈압"
    },
    {
        id: 5,
        speaker: "patient",
        message: "고혈압이면 위험한가요?"
    },
    {
        id: 6,
        speaker: "doctor",
        message: "관리를 잘하지 않으면 심장과 혈관에 부담이 갈 수 있습니다. 약물과 생활습관 개선으로 충분히 조절 가능합니다."
    },
    {
        id: 7,
        speaker: "doctor",
        message: "우선 혈압을 낮추기 위한 약을 처방해드릴게요."
    },
    {
        id: 8,
        speaker: "doctor",
        message: "저염식 식단과 규칙적인 운동도 함께 병행하시면 좋아요."
    }
];

export const SCRIPT_DIABETES = [
    {
        id: 1,
        speaker: "doctor",
        message: "최근에 갈증이 심하거나 소변을 자주 보는 증상이 있으신가요?"
    },
    {
        id: 2,
        speaker: "patient",
        message: "맞아요. 물을 계속 마시게 되고 화장실도 자주 가요."
    },
    {
        id: 3,
        speaker: "doctor",
        message: "혈당 검사 결과 기준치보다 높은 수치가 나왔습니다."
    },
    {
        id: 4,
        speaker: "doctor",
        message: "현재 상태로는 당뇨병이 의심됩니다.",
        keyword: "당뇨병"
    },
    {
        id: 5,
        speaker: "patient",
        message: "당뇨병이면 약을 계속 먹어야 하나요?"
    },
    {
        id: 6,
        speaker: "doctor",
        message: "생활습관 개선이 가장 중요하지만, 혈당 조절을 위해 약물이 필요할 수 있습니다."
    },
    {
        id: 7,
        speaker: "doctor",
        message: "우선 혈당을 낮추는 약을 처방해드릴게요."
    },
    {
        id: 8,
        speaker: "doctor",
        message: "식단 관리, 운동, 정기적인 혈당 체크도 함께 해주셔야 합니다."
    }
];

export const SCRIPT_MAP = {
    1: SCRIPT_FROZEN_SHOULDER,
    2: SCRIPT_HYPERTENSION,
    3: SCRIPT_DIABETES
};
