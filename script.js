

const profileMenuBtn =
    document.getElementById("profileMenuBtn");

const profileBox =
    document.getElementById("profileBox");

const closeProfile =
    document.getElementById("closeProfile");

const photoInput =
    document.getElementById("photoInput");

const profileImage =
    document.getElementById("profileImage");

const largeProfileImage =
    document.getElementById("largeProfileImage");

const nameInput =
    document.getElementById("nameInput");

const emailInput =
    document.getElementById("emailInput");

const goalInput =
    document.getElementById("goalInput");

const saveProfile =
    document.getElementById("saveProfile");

const profileName =
    document.getElementById("profileName");

const welcomeName =
    document.getElementById("welcomeName");

const goalNumber =
    document.getElementById("goalNumber");


/* =================================
   OPEN PROFILE
================================= */

profileMenuBtn.addEventListener("click", function () {

    profileBox.classList.toggle("show");

});


/* =================================
   CLOSE PROFILE
================================= */

closeProfile.addEventListener("click", function () {

    profileBox.classList.remove("show");

});


/* =================================
   PHOTO UPLOAD
================================= */

photoInput.addEventListener("change", function (event) {

    const file = event.target.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {

        const imageURL = e.target.result;

        profileImage.src = imageURL;

        largeProfileImage.src = imageURL;

        localStorage.setItem(
            "ecoProfilePhoto",
            imageURL
        );

    };

    reader.readAsDataURL(file);

});


/* =================================
   SAVE PROFILE
================================= */

saveProfile.addEventListener("click", function () {

    const name =
        nameInput.value.trim();

    const email =
        emailInput.value.trim();

    const goal =
        goalInput.value;


    if (name === "") {

        alert("Please enter your name.");

        return;

    }


    /* Save name */

    localStorage.setItem(
        "ecoProfileName",
        name
    );


    /* Save email */

    localStorage.setItem(
        "ecoProfileEmail",
        email
    );


    /* Save goal */

    localStorage.setItem(
        "ecoProfileGoal",
        goal
    );


    /* Update website */

    profileName.textContent = name;

    welcomeName.textContent = name;

    goalNumber.textContent = goal;


    alert("Profile saved successfully! 🌱");

    profileBox.classList.remove("show");

;


/* =================================
   LOAD PROFILE
================================= */

function loadProfile() {

    const savedName =
        localStorage.getItem(
            "ecoProfileName"
        );

    const savedEmail =
        localStorage.getItem(
            "ecoProfileEmail"
        );

    const savedGoal =
        localStorage.getItem(
            "ecoProfileGoal"
        );

    const savedPhoto =
        localStorage.getItem(
            "ecoProfilePhoto"
        );


    if (savedName) {

        profileName.textContent =
            savedName;

        welcomeName.textContent =
            savedName;

        nameInput.value =
            savedName;
    }


    if (savedEmail) {

        emailInput.value =
            savedEmail;

    }


    if (savedGoal) {

        goalInput.value =
            savedGoal;

        goalNumber.textContent =
            savedGoal;

    }


    if (savedPhoto) {

        profileImage.src =
            savedPhoto;

        largeProfileImage.src =
            savedPhoto;

    }

}
profileImage.src=savedPhoto;
largeProfileImage.src=savedPhoto;

profileName.textContentName;
welcomeName.textContent=savedName;


/* Run profile loading */

loadProfile();



/* =================================
   IMPACT CALCULATOR
================================= */

const carKm =
    document.getElementById("carKm");

const electricity =
    document.getElementById("electricity");

const water =
    document.getElementById("water");

const recycling =
    document.getElementById("recycling");

const calculateBtn =
    document.getElementById("calculateBtn");

const resultCo2 =
    document.getElementById("resultCo2");

const resultWater =
    document.getElementById("resultWater");

const resultEnergy =
    document.getElementById("resultEnergy");

const resultMessage =
    document.getElementById("resultMessage");


/* =================================
   CALCULATE IMPACT
================================= */

calculateBtn.addEventListener(
    "click",
    function () {

        /* Get values */

        const car =
            Number(carKm.value) || 0;

        const electric =
            Number(electricity.value) || 0;

        const waterUsed =
            Number(water.value) || 0;

        const recycled =
            Number(recycling.value) || 0;


        /* =========================
           SIMPLE ESTIMATION
        ========================= */

        /*
            These are simplified
            educational estimates,
            not official carbon calculations.
        */


        const transportCO2 =
            car * 0.21;

        const electricityCO2 =
            electric * 0.7;

        const recyclingBenefit =
            recycled * 0.5;


        const totalCO2 =
            transportCO2 +
            electricityCO2 -
            recyclingBenefit;


        /* Water */

        const waterImpact =
            waterUsed;


        /* Energy */

        const energyImpact =
            electric;


        /* Display */

        resultCo2.textContent =
            Math.max(
                totalCO2,
                0
            ).toFixed(2);


        resultWater.textContent =
            waterImpact.toFixed(0);


        resultEnergy.textContent =
            energyImpact.toFixed(2);


        /* Message */

        if (totalCO2 < 5) {

            resultMessage.textContent =
                "Excellent! Your estimated daily impact is low. Keep going! 🌱";

        }

        else if (totalCO2 < 10) {

            resultMessage.textContent =
                "Good job! A few sustainable choices can reduce your impact further. 🌿";

        }

        else {

            resultMessage.textContent =
                "Try public transport, saving electricity and recycling more. 🌍";

        }


        /* Update dashboard */

        updateDashboard(
            totalCO2,
            waterUsed,
            electric
        );

    }
);



/* =================================
   UPDATE DASHBOARD
================================= */

function updateDashboard(
    co2,
    waterAmount,
    energy
) {

    const currentCO2 =
        Number(
            document.getElementById(
                "co2Value"
            ).textContent
        );

    const currentWater =
        Number(
            document.getElementById(
                "waterValue"
            ).textContent
        );

    const currentEnergy =
        Number(
            document.getElementById(
                "energyValue"
            ).textContent
        );


    /* Add saved environmental values */

    document.getElementById(
        "co2Value"
    ).textContent =
        (
            currentCO2 +
            Math.max(co2, 0)
        ).toFixed(1);


    document.getElementById(
        "waterValue"
    ).textContent =
        (
            currentWater +
            waterAmount
        ).toFixed(0);


    document.getElementById(
        "energyValue"
    ).textContent =
        (
            currentEnergy +
            energy
        ).toFixed(1);


    /* Trees estimation */

    const newCO2 =
        currentCO2 +
        Math.max(co2, 0);

    const trees =
        Math.max(
            Math.floor(
                newCO2 / 25
            ),
            1
        );

    document.getElementById(
        "treeValue"
    ).textContent =
        trees;


    /* Save */

    localStorage.setItem(
        "ecoCO2",
        newCO2
    );

    localStorage.setItem(
        "ecoWater",
        currentWater +
        waterAmount
    );

    localStorage.setItem(
        "ecoEnergy",
        currentEnergy +
        energy
    );

}


/* =================================
   LOAD DASHBOARD DATA
================================= */

function loadDashboardData() {

    const savedCO2 =
        localStorage.getItem(
            "ecoCO2"
        );

    const savedWater =
        localStorage.getItem(
            "ecoWater"
        );

    const savedEnergy =
        localStorage.getItem(
            "ecoEnergy"
        );


    if (savedCO2) {

        document.getElementById(
            "co2Value"
        ).textContent =
            Number(savedCO2).toFixed(1);

    }


    if (savedWater) {

        document.getElementById(
            "waterValue"
        ).textContent =
            Number(savedWater).toFixed(0);

    }


    if (savedEnergy) {

        document.getElementById(
            "energyValue"
        ).textContent =
            Number(savedEnergy).toFixed(1);

    }

}


loadDashboardData();



/* =================================
   CALCULATE BUTTON ANIMATION
================================= */

calculateBtn.addEventListener(
    "click",
    function () {

        calculateBtn.innerHTML =
            '<i class="fa-solid fa-check"></i> Calculated!';

        setTimeout(
            function () {

                calculateBtn.innerHTML =
                    '<i class="fa-solid fa-calculator"></i> Calculate My Impact';

            },
            1800
        );

    }
);



/* =================================
   CLEAR ACTIVITIES
================================= */

const clearActivities =
    document.getElementById(
        "clearActivities"
    );

const activityList =
    document.getElementById(
        "activityList"
    );


clearActivities.addEventListener(
    "click",
    function () {

        activityList.innerHTML = `

            <div class="activity">

                <div class="activity-icon green">
                    🌱
                </div>

                <div>

                    <strong>
                        No recent activities
                    </strong>

                    <small>
                        Start your eco journey today!
                    </small>

                </div>

                <b>
                    +1
                </b>

            </div>

        `;

    }
);



/* =================================
   HERO BUTTON
================================= */

function scrollToCalculator() {

    document
        .getElementById("calculator")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =================================
   NAVIGATION ACTIVE STATE
================================= */

const navLinks =
    document.querySelectorAll(
        ".sidebar nav a"
    );


navLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add(
                    "active"
                );

            }
        );

    }
);

phototnput.addEventListener("change",function(){
    const file =this.files[0];
    if (files){
        const reader=new FileReader();
        reader.addEventListener("load",function(){
            profileImage.src=this.result;
            largeProfileImage.src=this.result;

            localStorage.setItem("savedProfilePhoto",this.result);
        });
        reader.readAsDataURL(file);
    }
});

window.addEventListener("DOMConterLoader",function(){
    const savedPhoto=localStorage.getItem("savedProfilePhoto");
    if(savedPhoto){
        profileImage.src=savedPhoto;
        largeProfileImage.src=savedPhoto;
    }
});

});

