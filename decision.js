let answers = [
    //[asked_question, asked_answer]
];

const questionList = {
    anatomicLocation :
    {
        question: "What is the anatomic location of the uveitis?",
        options: [
            { label: "Anterior uveitis (only available)", nextQuestion: "course" },
            { label: "Intermediate uveitis", nextQuestion: "In_progress" },
            { label: "Posterior uveitis", nextQuestion: "In_progress" },
            { label: "Panuveitis", nextQuestion: "In_progress" }
        ],
    },
    course :
    {
        question: "What is the course of the uveitis?",
        options: [
            { label: "Acute, monophasic", nextQuestion: "laterality_m"},
            { label: "Acute, recurrent", nextQuestion: "laterality_r"},
            { label: "Chronic", nextQuestion: "laterality_c" }
        ],
    },
    laterality_m :
    {
        question: "What is the laterality of the uveitis?",
        options: [
            { label: "Unilateral", nextQuestion: "kp"},
            { label: "Bilateral", nextQuestion: "acute_bilateral_AU_algorithm" }
        ]
    },
    acute_bilateral_AU_algorithm :
    {
        question: `Next step: <span style='font-weight:400'>Acute bilateral uveitis algorithm</span>\
        <br>\
        Differential diagnosis: \
        <button type="button" class="btn btn-secondary"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
            Sarcoidosis
        </button>
        <button type="button" class="btn btn-secondary"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
            JIA
        </button>
        <button type="button" class="btn btn-secondary"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
            Drug-induced
        </button>
        <button type="button" class="btn btn-secondary"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
            TINU
        </button>
        `,
        options: [
        ]
    },
    laterality_r :
    {
        question: "What is the laterality of the uveitis?",
        options: [
            { label: "Unilateral", nextQuestion: "kp"},
            { label: "Unilateral, alternating", nextQuestion: "HLA_B27"},
            { label: "Bilateral", nextQuestion: "acute_bilateral_AU_algorithm" }
        ]
    },
    kp :
    {
        question: "What is the KP of the uveitis?",
        options: [
            { label: "Stellate", nextQuestion: "fus_algorithm"},
            { label: "Granulomatous", nextQuestion: "viralAU_algorithm"},
            { label: "Non-granulomatous", nextQuestion: "screenViralAU" }
        ]
    },
    screenViralAU :
    {
        question: "Increased IOP or iris atrophy/transillumination?",
        options: [
            { label: "Yes", nextQuestion: "viralAU_algorithm"},
            { label: "No", nextQuestion: "HLA_B27"},
        ]
    },
    fus_algorithm :
    {
        question: `Next step: <span style='font-weight:400'>FUS algorithm</span>\
        <br>\
        Differential diagnosis:
        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#myModal"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
            FUS
        </button>

        <div class="modal" id="myModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content" id="myInput">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Fuchs Uveitis Syndrome</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                Example<br>
                Disease Entity
                Fuchs’ Heterochromic Iridocyclitis (FHI), also known as Fuchs’ uveitis syndrome (FUS), was first described in 1906 by Austrian ophthalmologist, Ernst Fuchs, who reported a series of 38 patients with iris heterochromia, cyclitis, and cataract.[1] Since then, FHI has been further characterized as a constellation of clinical findings, which classically includes low-grade unilateral anterior inflammation with stellate keratic precipitates (KP), iris heterochromia, and prominent iris and angle vessels that bleed after paracentesis (Amsler sign).[2]
                
                Etiology
                Ernst Fuchs presumed that FHI was caused by a noxious stimulus of unknown origin.[1]  The exact etiology of FHI is still unknown, and the disease process is likely multifactorial. Historical theories on the cause of FHI have associated it with sympathetic dysfunction, as well as multiple infectious etiologies such as toxoplasma, herpes simplex virus (HSV)[3] , chikungunya virus[4], cytomegalovirus (CMV), and rubella virus (RV).
                
                Sympathetic dysfunction resulting in decreased innervation to stromal melanocytes and iris hypopigmentation was an early proposed theory for the etiology of FHI.[5] [6] [7] The abnormal innervation was thought to account for not only the iris heterochromia, but also the breakdown of the blood-aqueous barrier and subsequent inflammation. However, this theory was dismissed after only 25 of 1746 (1.4%) FHI cases in a retrospective study were found to be associated with Horner’s syndrome.[8] The prevalence of peripheral chorioretinal scars in FHI varies from 7-65% of cases, with most studies noting a prevalence of 10%.[7] Multiple studies have reported toxoplasma-like chorioretinal scars in a significantly higher proportion of FHI patients compared to control groups.[9][10] For this reason, an etiologic association between toxoplasmosis and FHI has been investigated, however, no significant association between FHI and humoral or cellular immunity to toxoplasma has been found.[7]
                
                Both HSV and Chikungunya virus have been linked to FHI due to the isolation of viral DNA and RNA, respectively, from the aqueous humor of patients with FHI. Currently, however, these findings are limited only to case reports.[11][12]
                
                The strongest etiologic theories are those associating CMV and RV with FHI. CMV infection has been found to account for 16-42% of FHI in Asia, whereas in Western countries, FHI is predominantly associated with RV.[13][12][14][11] In one Chinese study, aqueous humor samples were obtained from 35 patients with presumed FHI, 15 of which were found to contain CMV DNA by PCR.[13] Aqueous humor and blood of 63 European patients with FHI were examined for RV antibodies in one of the largest series of FHI patients, all of whom were found to have intraocular antibody synthesis against RV.[15]
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
        </div>

        <button type="button" class="btn btn-secondary"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
            CMV
        </button>`,
        options: [
        ]
    },
    viralAU_algorithm :
    {
        question: `Next step: <span style='font-weight:400'>Viral AU algorithm</span>\
        <br>\
        Differential diagnosis: 
        <button type="button" class="btn btn-secondary"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
            CMV
        </button>
        <button type="button" class="btn btn-secondary"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
            HSV
        </button>
        <button type="button" class="btn btn-secondary"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
            VZV
        </button>`,
        options: [
        ]
    },
    HLA_B27 :
    {
        question: `Suspected diagnosis: <button type="button" class="btn btn-secondary"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
            HLA-B27/spondyloarthritis related AU
        </button>\
        <br>\
        <span style='font-weight:400'>We recommend DUET algorithm</span>
        <img src="/img/duet.png" class="img-fluid"></img>`,
        options: [
        ]
    },
    laterality_c :
    {
        question: "What is the laterality of the uveitis?",
        options: [
            { label: "History of Alternating", nextQuestion: "HLA_B27"},
            { label: "Unilateral", nextQuestion: "In_progress"},
            { label: "Bilateral", nextQuestion: "In_progress" }
        ]
    },
    In_progress :
    {
        question: "In progress",
        options: [
        ]
    }
}

function questionBoxes(currentQuestion,back){
    if(answers.length!=0 && back==true){
        answers.pop();
        pastquestions();      
    }
    if(answers.length!=0 && back==false){
        pastquestions();
    }

    let box = document.createElement('div');
    box.id= `box-${currentQuestion}`
    let questionBox = document.createElement('div'); 
    questionBox.id = `question-${currentQuestion}`;
    let optionsBox = document.createElement('div');
    optionsBox.id = `options-${currentQuestion}`;
    
    questionBox.innerHTML = `<h6>${questionList[currentQuestion].question}</h6>`;

    //options
    for (let i = 0; i < questionList[currentQuestion].options.length; i++){
        let div = document.createElement('div');
        div.class = "form-check";
        div.innerHTML = `
        <div class="form-check">
            <input class="form-check-input  border-primary" type="radio" name="flexRadioDefault" id="flexRadioDefault${currentQuestion}${i}" value="${questionList[currentQuestion].options[i].label}">
            <label class="form-check-label" for="flexRadioDefault${currentQuestion}${i}">
                ${questionList[currentQuestion].options[i].label}
            </label>
        </div>`;
        optionsBox.appendChild(div)
    }

    //append question and options
    box.appendChild(questionBox);
    box.appendChild(optionsBox);

    //Create button
    box.innerHTML += `
    <div style="margin-bottom:10px"></div>
    <button type='button' class='btn btn-primary' id='back-${currentQuestion}'>
        Back
    </button>
    <button type='button' class='btn btn-primary' id='submit-${currentQuestion}'>
        Next
    </button>
    <div id='message-${currentQuestion}' style="color:red;"></div>
    `;

    //append everything into container
    document.getElementById("container").appendChild(box);

    //eventlistener to button
    let submitBtn = document.getElementById(`submit-${currentQuestion}`);
    submitBtn.addEventListener("click",function(){
        let selected = document.querySelector('input[name="flexRadioDefault"]:checked');

        if (selected === null) {
            document.getElementById(`message-${currentQuestion}`).innerHTML = "please select an option";
            return;
        }

        let selectedOption = selected.value;

        console.log("Selected option: " + selectedOption);
        let nextQuestion = questionList[currentQuestion].options.find(option => option.label === selectedOption).nextQuestion;
        console.log("Next question: " + nextQuestion);

        //once submited, the original question is deleted
        //this may be access by list being pushed
        answers.push([currentQuestion,questionList[currentQuestion].question,selectedOption]);
        document.getElementById("container").innerHTML = "";
        questionBoxes(nextQuestion, back=false);
    })

    let backBtn = document.getElementById(`back-${currentQuestion}`);
    backBtn.addEventListener("click",function(){
        //check if first question 
        if(answers.length == 0){
            document.getElementById(`message-${currentQuestion}`).innerHTML = "There is no previous question";
            return;
        }
        
        document.getElementById("container").innerHTML = "";
        questionBoxes(answers[answers.length-1][0], back=true)
    })
}

questionBoxes("anatomicLocation");



function pastquestions(){
    let pq = ``;
    for(let i = 0; i < answers.length; i++){
        pq += `<div>${answers[i][1]} <br>&nbsp&nbsp<i>${answers[i][2]}</i></div>`
    }
    let exp = document.getElementById("exp-container");
    exp.innerHTML = pq;
}
