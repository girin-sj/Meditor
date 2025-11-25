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
    },
    {
        id: 5,
        title: '위식도역류질환(GERD)',
        subtitle: '역류성 식도염 진료 요약',
        diagnosis: [
            '속 쓰림 및 신물 역류',
            '식도 점막 자극 → 역류성 식도염 의심',
        ],
        prescriptions: [
            {
                name: '양성자 펌프 억제제(PPI 20mg)',
                description: '위산 분비를 억제하는 약',
                dosage: '1정 | 하루 1회 | 아침 식전',
                warning: null,
            },
            {
                name: '제산제(Antacid)',
                description: '위산을 중화하여 증상 완화',
                dosage: '속쓰림 발생 시 복용',
                warning: '※ 과다복용 시 설사 유발 가능',
            },
        ],
        treatmentAndCare: [
            '야식·기름진 음식 피하기',
            '수면 2~3시간 전 음식 섭취 금지',
            '머리맡을 약간 높여 수면',
        ],
    },
    {
        id: 6,
        title: '편두통(Migraine)',
        subtitle: '편두통 진료 요약',
        diagnosis: [
            '한쪽 머리의 박동성 통증',
            '빛·소리에 대한 민감성 증가 → 편두통 의심',
        ],
        prescriptions: [
            {
                name: '트립탄 계열 약물(Triptan)',
                description: '편두통 발작 완화 약물',
                dosage: '증상 발생 시 1정',
                warning: null,
            },
            {
                name: '진통제(Acetaminophen 500mg)',
                description: '통증 완화용 보조 약물',
                dosage: '필요 시 복용',
                warning: '※ 과다 복용 금지',
            },
        ],
        treatmentAndCare: [
            '어두운 곳에서 휴식',
            '카페인 과다 섭취 자제',
            '스트레스 및 수면 패턴 관리',
        ],
    },
    {
        id: 7,
        title: '폐렴(Pneumonia)',
        subtitle: '폐렴 진료 요약',
        diagnosis: [
            '기침·가래 증가',
            '폐 염증 확인 → 폐렴 의심',
        ],
        prescriptions: [
            {
                name: '항생제(Antibiotic)',
                description: '세균성 폐렴 치료',
                dosage: '하루 2회 | 식후',
                warning: '※ 복용 중단 금지(정해진 기간 모두 복용)',
            },
            {
                name: '해열진통제(Acetaminophen)',
                description: '발열과 통증 완화',
                dosage: '필요 시 복용',
                warning: null,
            },
        ],
        treatmentAndCare: [
            '충분한 휴식과 수분 섭취',
            '심한 호흡곤란 시 즉시 진료',
            '기침 지속 시 병원 재방문 권장',
        ],
    },
    {
        id: 8,
        title: '요로감염(UTI)',
        subtitle: '요로감염 진료 요약',
        diagnosis: [
            '배뇨 시 통증',
            '소변 검사 이상 → 요로감염 의심',
        ],
        prescriptions: [
            {
                name: '항생제(Antibiotic)',
                description: '요로감염 치료',
                dosage: '하루 1~2회 | 식후',
                warning: null,
            },
            {
                name: '진통제(Ibuprofen 200mg)',
                description: '통증 및 염증 완화',
                dosage: '필요 시 복용',
                warning: '※ 위장 장애 주의',
            },
        ],
        treatmentAndCare: [
            '수분 섭취 증가',
            '카페인·탄산음료 자제',
            '증상 악화 시 재진료',
        ],
    },
    {
        id: 9,
        title: '협심증(Angina)',
        subtitle: '협심증 진료 요약',
        diagnosis: [
            '가슴 통증 반복 발생',
            '운동 시 통증 증가 → 협심증 의심',
        ],
        prescriptions: [
            {
                name: '니트로글리세린(Nitroglycerin)',
                description: '흉통 완화용 혈관 확장제',
                dosage: '필요 시 혀 아래에 1정',
                warning: '※ 저혈압·어지러움 주의',
            },
            {
                name: '아스피린(Aspirin 100mg)',
                description: '혈전 예방',
                dosage: '1정 | 하루 1회 | 식후',
                warning: null,
            },
        ],
        treatmentAndCare: [
            '무리한 운동 피하기',
            '규칙적인 심장 기능 검사 필요',
            '증상 악화 시 즉시 응급실 방문',
        ],
    },
    {
        id: 10,
        title: '요추 추간판 탈출증(Lumbar Disc Herniation)',
        subtitle: '허리 디스크 진료 요약',
        diagnosis: [
            '요통 및 다리 저림',
            'MRI상 추간판 돌출 → 디스크 의심',
        ],
        prescriptions: [
            {
                name: '근이완제(Muscle Relaxant)',
                description: '근육 긴장 완화',
                dosage: '1정 | 하루 2~3회',
                warning: null,
            },
            {
                name: '소염진통제(NSAIDs)',
                description: '통증 및 염증 완화',
                dosage: '1정 | 하루 2회 | 식후',
                warning: '※ 위장 장애 주의',
            },
        ],
        treatmentAndCare: [
            '무거운 물건 들기 금지',
            '물리치료 및 도수치료 병행',
            '심한 통증 시 주사치료 고려',
        ],
    },
    {
        id: 11,
        title: '회전근개 파열(Rotator Cuff Tear)',
        subtitle: '어깨 회전근개 파열 진료 요약',
        diagnosis: [
            '어깨 힘 약화 및 운동 범위 감소',
            '초음파·MRI에서 힘줄 손상 확인',
        ],
        prescriptions: [
            {
                name: '소염제(NSAIDs)',
                description: '통증 및 염증 완화',
                dosage: '1정 | 하루 2회 | 식후',
                warning: null,
            },
            {
                name: '스테로이드 주사(Steroid Injection)',
                description: '염증 완화 및 통증 감소',
                dosage: '필요 시 시술',
                warning: '※ 반복 시 힘줄 약화 위험',
            },
        ],
        treatmentAndCare: [
            '심한 경우 수술 고려',
            '회복기에는 어깨 사용 줄이기',
            '회전근개 강화 운동 진행',
        ],
    },
    {
        id: 12,
        title: '발목 염좌(Ankle Sprain)',
        subtitle: '발목 염좌 진료 요약',
        diagnosis: [
            '발목 외측 인대 손상 가능',
            '부종 및 보행 시 통증 → 염좌 의심',
        ],
        prescriptions: [
            {
                name: '진통제(Acetaminophen)',
                description: '통증 완화',
                dosage: '필요 시 복용',
                warning: null,
            },
            {
                name: '냉·온 찜질 요법',
                description: '부종 감소 및 회복 도움',
                dosage: '초기 48시간 냉찜질, 이후 온찜질 전환',
                warning: null,
            },
        ],
        treatmentAndCare: [
            'RICE 요법(안정, 냉찜질, 압박, 거상)',
            '과도한 걷기·운동 금지',
            '통증 지속 시 정형외과 재진료',
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

export const SCRIPT_ASTHMA = [
  {
    id: 1,
    speaker: "doctor",
    message: "호흡곤란이나 쌕쌕거리는 숨소리가 자주 나타나시나요?"
  },
  {
    id: 2,
    speaker: "patient",
    message: "네, 숨이 차고 밤에 특히 더 심해요."
  },
  {
    id: 3,
    speaker: "doctor",
    message: "진찰해보니 기도에 염증이 있고 숨 쉴 때 약간의 천명음이 들립니다."
  },
  {
    id: 4,
    speaker: "doctor",
    message: "천식이 의심됩니다.",
    keyword: "천식"
  },
  {
    id: 5,
    speaker: "patient",
    message: "천식이면 평생 관리해야 하나요?"
  },
  {
    id: 6,
    speaker: "doctor",
    message: "증상 조절이 중요하고, 꾸준한 관리와 약물치료를 병행하면 충분히 일상생활 가능합니다."
  },
  {
    id: 7,
    speaker: "doctor",
    message: "증상 완화를 위해 흡입제 처방해드릴게요."
  }
];

export const SCRIPT_GERD = [
    {
        id: 1,
        speaker: "doctor",
        message: "속쓰림이나 신물이 올라오는 증상이 있으신가요?"
    },
    {
        id: 2,
        speaker: "patient",
        message: "네, 특히 식사 후나 누우면 더 심해요."
    },
    {
        id: 3,
        speaker: "doctor",
        message: "문진과 진찰 결과 역류성 식도염이 의심됩니다.",
        keyword: "역류성 식도염"
    },
    {
        id: 4,
        speaker: "doctor",
        message: "위산 분비를 줄이는 약을 처방해드릴게요."
    },
    {
        id: 5,
        speaker: "doctor",
        message: "야식과 기름진 음식은 피하시고, 식후 바로 눕지 않도록 해주세요."
    }
];
export const SCRIPT_MIGRAINE = [
    {
        id: 1,
        speaker: "doctor",
        message: "두통이 어느 부위에 나타나고 얼마나 지속되나요?"
    },
    {
        id: 2,
        speaker: "patient",
        message: "한쪽 머리가 계속 욱신거리고 빛 보면 더 아파요."
    },
    {
        id: 3,
        speaker: "doctor",
        message: "증상으로 보아 편두통이 의심됩니다.",
        keyword: "편두통"
    },
    {
        id: 4,
        speaker: "doctor",
        message: "발작 시 복용할 수 있는 약을 처방해드릴게요."
    },
    {
        id: 5,
        speaker: "doctor",
        message: "휴식과 스트레스 관리도 함께 해주셔야 합니다."
    }
];
export const SCRIPT_PNEUMONIA = [
    {
        id: 1,
        speaker: "doctor",
        message: "기침이나 가래가 늘고 열이 난 적이 있나요?"
    },
    {
        id: 2,
        speaker: "patient",
        message: "네, 며칠 전부터 열도 나고 숨쉬기도 조금 힘들어요."
    },
    {
        id: 3,
        speaker: "doctor",
        message: "청진 결과 폐 쪽에서 염증 소견이 들립니다."
    },
    {
        id: 4,
        speaker: "doctor",
        message: "폐렴이 의심되어 항생제를 처방해드릴게요.",
        keyword: "폐렴"
    },
    {
        id: 5,
        speaker: "doctor",
        message: "열이 지속되면 바로 다시 오셔야 합니다."
    }
];
export const SCRIPT_UTI = [
    {
        id: 1,
        speaker: "doctor",
        message: "소변 볼 때 통증이나 잔뇨감이 있으신가요?"
    },
    {
        id: 2,
        speaker: "patient",
        message: "네, 소변 볼 때 따갑고 자주 마려운 느낌도 있어요."
    },
    {
        id: 3,
        speaker: "doctor",
        message: "소변 검사에서 염증 수치가 높게 나왔습니다."
    },
    {
        id: 4,
        speaker: "doctor",
        message: "요로감염이 의심되어 항생제를 처방하겠습니다.",
        keyword: "요로감염"
    },
    {
        id: 5,
        speaker: "doctor",
        message: "물을 충분히 마시고 카페인은 피해주세요."
    }
];
export const SCRIPT_ANGINA = [
  {
    id: 1,
    speaker: "doctor",
    message: "가슴 통증은 언제부터 발생했나요?"
  },
  {
    id: 2,
    speaker: "patient",
    message: "며칠 전부터 걸을 때마다 가슴이 꽉 조이는 느낌이 있어요."
  },
  {
    id: 3,
    speaker: "doctor",
    message: "운동 시 통증이 심해지고 휴식하면 줄어드는 양상이네요."
  },
  {
    id: 4,
    speaker: "doctor",
    message: "협심증이 의심됩니다.",
    keyword: "협심증"
  },
  {
    id: 5,
    speaker: "doctor",
    message: "혈관을 확장시켜 주는 약과 혈전 예방 약을 처방해드릴게요."
  },
  {
    id: 6,
    speaker: "doctor",
    message: "증상 악화 시 즉시 응급실로 오셔야 합니다."
  }
];
export const SCRIPT_LUMBAR_DISC = [
  {
    id: 1,
    speaker: "doctor",
    message: "허리 통증이 다리까지 내려가나요?"
  },
  {
    id: 2,
    speaker: "patient",
    message: "네, 오른쪽 다리까지 저리고 당겨요."
  },
  {
    id: 3,
    speaker: "doctor",
    message: "진찰 결과 디스크로 인한 신경 압박이 의심됩니다."
  },
  {
    id: 4,
    speaker: "doctor",
    message: "요추 추간판 탈출증, 흔히 말하는 디스크일 가능성이 높습니다.",
    keyword: "요추 추간판 탈출증"
  },
  {
    id: 5,
    speaker: "doctor",
    message: "약물 치료와 물리치료를 병행해볼게요."
  },
  {
    id: 6,
    speaker: "doctor",
    message: "무리한 움직임은 당분간 피해주세요."
  }
];
export const SCRIPT_ROTATOR_CUFF = [
  {
    id: 1,
    speaker: "doctor",
    message: "어깨 통증은 특정 동작에서 더 심해지나요?"
  },
  {
    id: 2,
    speaker: "patient",
    message: "팔을 들어올리거나 돌릴 때 많이 아파요."
  },
  {
    id: 3,
    speaker: "doctor",
    message: "초음파 검사에서 힘줄 손상 소견이 보입니다."
  },
  {
    id: 4,
    speaker: "doctor",
    message: "회전근개 파열로 보입니다.",
    keyword: "회전근개 파열"
  },
  {
    id: 5,
    speaker: "doctor",
    message: "약물 치료와 주사 치료를 진행해볼 수 있습니다."
  },
  {
    id: 6,
    speaker: "doctor",
    message: "심한 경우에는 수술도 고려해야 합니다."
  }
];
export const SCRIPT_ANKLE_SPRAIN = [
  {
    id: 1,
    speaker: "doctor",
    message: "발목을 접질린 직후 많이 붓거나 멍이 들었나요?"
  },
  {
    id: 2,
    speaker: "patient",
    message: "네, 바로 붓고 걸을 때 많이 아파요."
  },
  {
    id: 3,
    speaker: "doctor",
    message: "인대가 늘어나거나 부분적으로 손상된 것으로 보입니다."
  },
  {
    id: 4,
    speaker: "doctor",
    message: "발목 염좌로 판단됩니다.",
    keyword: "발목 염좌"
  },
  {
    id: 5,
    speaker: "doctor",
    message: "초기에는 냉찜질과 압박이 중요합니다."
  },
  {
    id: 6,
    speaker: "doctor",
    message: "통증이 심하면 보조기 착용을 고려해볼 수도 있습니다."
  }
];

export const SCRIPT_MAP = {
    1: SCRIPT_FROZEN_SHOULDER,
    2: SCRIPT_HYPERTENSION,
    3: SCRIPT_DIABETES,
    4: SCRIPT_ASTHMA,
    5: SCRIPT_GERD,
    6: SCRIPT_MIGRAINE,
    7: SCRIPT_PNEUMONIA,
    8: SCRIPT_UTI,
    9: SCRIPT_ANGINA,
    10: SCRIPT_LUMBAR_DISC,
    11: SCRIPT_ROTATOR_CUFF,
    12: SCRIPT_ANKLE_SPRAIN
};
