const damiData = {
    personalInfo: {
        name: "Yunus Emre",
        lastname: "Önder",
        groupName: "00012-2022-3",
        courseName: "Qrafik dizayn kursu",
        totalExamResult: "55",
        liveLesson: "35",
        videoLesson: "35",
        paricipationApp: "60",
        contact: "+994 50 244 80 55"
    },
    sections: [
        {
            id: 0,
            name: "Giriş",
            courses: [
                {
                    id: 0,
                    name: "Kursla tanışlı",
                    type: "Video dərs",
                    startTime: new Date("April 12, 2022 18:00:00"),
                    endTime: null,
                    status: [
                        {
                            id: 0,
                            name: "Baxılıb",
                            state: 1
                        },
                    ],
                },
                {
                    id: 1,
                    name: "Dizayn proqramları ilə tanışlıq",
                    type: "Canlı dərs",
                    startTime: new Date("April 12, 2022 20:00:00"),
                    endTime: new Date("April 12, 2022 21:00:00"),
                    status: [
                        {
                            id: 0,
                            name: "İştirak edib",
                            state: 1
                        },
                    ],
                },
                {
                    id: 2,
                    name: "Testlər",
                    type: "Aralıq imtahan",
                    startTime: new Date("April 13, 2022 20:00:00"),
                    endTime: new Date("April 13, 2022 21:00:00"),
                    status: [
                        {
                            id: 0,
                            name: "Düz 6",
                            state: 1
                        },
                        {
                            id: 0,
                            name: "Səhv 1",
                            state: 2
                        },
                        {
                            id: 0,
                            name: "Cavablandırılmayıb 3",
                            state: 3
                        },
                    ],
                },
                {
                    id: 3,
                    name: "Dizaynda rəng seçiminə aid materiallar",
                    type: "Oxu materialı",
                    startTime: new Date("April 13, 2022 18:00:00"),
                    endTime: null,
                    status: [
                        {
                            id: 0,
                            name: "Elementə keçid edilib",
                            state: 1
                        }
                    ],
                },
            ],
        }, {
            id: 2,
            name: "Dizaynın əsasları",
            courses: [
                {
                    id: 0,
                    name: "Rənglərlə işləmə",
                    type: "Video dərs",
                    startTime: new Date("April 14, 2022 18:00:00"),
                    endTime: null,
                    status: [
                        {
                            id: 0,
                            name: "Baxılıb",
                            state: 1
                        },
                    ],
                },
                {
                    id: 1,
                    name: "Formalarla işləmə",
                    type: "Canlı dərs",
                    startTime: new Date("April 15, 2022 20:00:00"),
                    endTime: new Date("April 15, 2022 21:00:00"),
                    status: [
                        {
                            id: 0,
                            name: "Elementə keçid edilməyib",
                            state: 2
                        },
                    ],
                },
                {
                    id: 2,
                    name: "Kölgə ilə işləmə",
                    type: "Canlı dərs",
                    startTime: new Date("April 16, 2022 20:00:00"),
                    endTime: new Date("April 16, 2022 21:00:00"),
                    status: [
                        {
                            id: 0,
                            name: "Elementə keçid edilməyib",
                            state: 2
                        },
                    ],
                },
                {
                    id: 3,
                    name: "Proporsialarla işləmə",
                    type: "Canlı dərs",
                    startTime: new Date("April 17, 2022 18:00:00"),
                    endTime: null,
                    status: [
                        {
                            id: 0,
                            name: "Elementə keçid edilməyib",
                            state: 2
                        },
                    ],
                },
            ],
        },
    ],
};

export default damiData;
