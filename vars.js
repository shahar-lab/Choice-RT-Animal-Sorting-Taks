var Ntrials = 2
var fixation_duration = 500

    var stimuli = [
        { stimulus: "images/1.png"},
        { stimulus: "images/2.png"},
        { stimulus: "images/3.png"},
        { stimulus: "images/4.png"},
        { stimulus: "images/5.png"},
        { stimulus: "images/6.png"},
        { stimulus: "images/7.png"},
        { stimulus: "images/8.png"},
        { stimulus: "images/9.png"},
        { stimulus: "images/10.png"},
        { stimulus: "images/11.png"},
        { stimulus: "images/12.png"},
        { stimulus: "images/13.png"},
        { stimulus: "images/14.png"},
        { stimulus: "images/15.png"},
        { stimulus: "images/16.png"},
        { stimulus: "images/17.png"},
        { stimulus: "images/18.png"},
        { stimulus: "images/19.png"},
        { stimulus: "images/20.png"}
      ];
  
      var correct_response = [
        {correct_response: 's'},
        {correct_response: 'k'},
        ];
  
        var shuffled_stimuli = jsPsych.randomization.shuffle(stimuli) 
        var test_stimuli_2 = [{stimulus:shuffled_stimuli[0].stimulus, correct_response:correct_response[0].correct_response},
                              {stimulus:shuffled_stimuli[1].stimulus, correct_response:correct_response[1].correct_response}]
        var test_stimuli_4 = [{stimulus:shuffled_stimuli[2].stimulus, correct_response:correct_response[0].correct_response},
                              {stimulus:shuffled_stimuli[3].stimulus, correct_response:correct_response[1].correct_response},
                              {stimulus:shuffled_stimuli[4].stimulus, correct_response:correct_response[0].correct_response},
                              {stimulus:shuffled_stimuli[5].stimulus, correct_response:correct_response[1].correct_response}]
        var test_stimuli_6 = [{stimulus:shuffled_stimuli[6].stimulus, correct_response:correct_response[0].correct_response},
                              {stimulus:shuffled_stimuli[7].stimulus, correct_response:correct_response[1].correct_response},
                              {stimulus:shuffled_stimuli[8].stimulus, correct_response:correct_response[0].correct_response},
                              {stimulus:shuffled_stimuli[9].stimulus, correct_response:correct_response[1].correct_response},
                              {stimulus:shuffled_stimuli[10].stimulus, correct_response:correct_response[0].correct_response},
                              {stimulus:shuffled_stimuli[11].stimulus, correct_response:correct_response[1].correct_response}]
        var test_stimuli_8 = [{stimulus:shuffled_stimuli[12].stimulus, correct_response:correct_response[0].correct_response},
                              {stimulus:shuffled_stimuli[13].stimulus, correct_response:correct_response[1].correct_response},
                              {stimulus:shuffled_stimuli[14].stimulus, correct_response:correct_response[0].correct_response},
                              {stimulus:shuffled_stimuli[15].stimulus, correct_response:correct_response[1].correct_response},
                              {stimulus:shuffled_stimuli[16].stimulus, correct_response:correct_response[0].correct_response},
                              {stimulus:shuffled_stimuli[17].stimulus, correct_response:correct_response[1].correct_response},
                              {stimulus:shuffled_stimuli[18].stimulus, correct_response:correct_response[0].correct_response},
                              {stimulus:shuffled_stimuli[19].stimulus, correct_response:correct_response[1].correct_response}]
  
     var block = 0;

         
    var block_start_1 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  
        `<p style="justify-content: center; display:flex"><b><u>Test block</u></b></p>
          <p style="justify-content: center; display:flex">The animals on the left side of the screen belong to San-Diego Zoo.</p>
          <p style="justify-content: center; display:flex">The animals on the right side of the screen belong to Kansas-City Zoo.</p>
          <p style="justify-content: center; display:flex">Do your best to remember which animal belongs to each zoo.</p>
          <p style="text-align: center">Press any key to continue when you ready to begin.</p>
          <table style="justify-content: center; display:flex">
            <tbody>
            <tr>
            <td style="border: 1px;border-style: solid; padding-inline: 30px">
              <img src="${test_stimuli_2[0].stimulus}">
            </td>
            <td style="width: 10px"></td>
              <td style="border: 1px;border-style: solid;padding-inline: 30px">
              <img src="${test_stimuli_2[1].stimulus}">
            </tr>
               <tr style="border: 0px;border-style: solid;">
                <td style="border: 0px;border-style: solid;">
                 <p> San-Diego Zoo - <strong>Press S</strong> </p>
                 </td>
                 <td style="width: 10px"></td>
                  <td style="border: 0px;border-style: solid;">
                 <p> Kansas-City Zoo -  <strong>Press K</strong> </p>
                </td>
            </tbody>
          </table>
          `
        ,
        post_trial_gap: 50
      };
  
      var block_start_2 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  
        `
        <p style="justify-content: center; display:flex"><b><u>Test block</u></b></p>
          <p style="justify-content: center; display:flex">The animals on the left side of the screen belong to San-Diego Zoo.</p>
          <p style="justify-content: center; display:flex">The animals on the right side of the screen belong to Kansas-City Zoo.</p>
          <p style="justify-content: center; display:flex">Do your best to remember which animal belongs to each zoo.</p>
          <p style="text-align: center">Press any key to continue when you ready to begin.</p>
          <table style="justify-content: center; display:flex">
            <tbody>
            <tr>
            <td style="border: 1px;border-style: solid; padding-inline: 30px">
              <img src="${test_stimuli_4[0].stimulus}">
              <img src="${test_stimuli_4[2].stimulus}">
            </td>
            <td style="width: 10px"></td>
              <td style="border: 1px;border-style: solid;padding-inline: 30px">
              <img src="${test_stimuli_4[1].stimulus}">
              <img src="${test_stimuli_4[3].stimulus}">
            </tr>
               <tr style="border: 0px;border-style: solid;">
                <td style="border: 0px;border-style: solid;">
                 <p> San-Diego Zoo - <strong>Press S</strong> </p>     
                 </td>
                  <td style="width: 10px"></td>
                  <td style="border: 0px;border-style: solid;">
                 <p>  Kansas-City Zoo -  <strong>Press K</strong> </p>
                </td>
            </tbody>
          </table>
          `
        ,
        post_trial_gap: 50
      };
  
    var block_start_3 = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus:
        `<p style="justify-content: center; display:flex"><b><u>Test block</u></b></p>
          <p style="justify-content: center; display:flex">The animals on the left side of the screen belong to San-Diego Zoo.</p>
          <p style="justify-content: center; display:flex">The animals on the right side of the screen belong to Kansas-City Zoo.</p>
          <p style="justify-content: center; display:flex">Do your best to remember which animal belongs to each zoo.</p>
          <p style="text-align: center">Press any key to continue when you ready to begin.</p>
          <table style="justify-content: center; display:flex">
            <tbody>
            <tr>
            <td style="border: 1px;border-style: solid; padding-inline: 30px">
              <img src="${test_stimuli_6[0].stimulus}">
              <img src="${test_stimuli_6[2].stimulus}">
              <img src="${test_stimuli_6[4].stimulus}">
            </td>
             <td style="width: 10px"></td>
              <td style="border: 1px;border-style: solid;padding-inline: 30px">
              <img src="${test_stimuli_6[1].stimulus}">
              <img src="${test_stimuli_6[3].stimulus}">
              <img src="${test_stimuli_6[5].stimulus}">
            </tr>
               <tr style="border: 0px;border-style: solid;">
                <td style="border: 0px;border-style: solid;">
                 <p> San-Diego Zoo - <strong>Press S</strong </p>
                 </td>
                 <td style="width: 10px"></td>
                  <td style="border: 0px;border-style: solid;">
                 <p> Kansas-City Zoo -  <strong>Press K</strong> </p>
                </td>
            </tbody>
          </table>
          `
      ,
      post_trial_gap: 50
    }
  
      var block_start_4 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  
    `<p style="justify-content: center; display:flex"><b><u>Test block</u></b></p>
          <p style="justify-content: center; display:flex">The animals on the left side of the screen belong to San-Diego Zoo.</p>
          <p style="justify-content: center; display:flex">The animals on the right side of the screen belong to Kansas-City Zoo.</p>
          <p style="justify-content: center; display:flex">Do your best to remember which animal belongs to each zoo.</p>
          <p style="text-align: center">Press any key to continue when you ready to begin.</p>
          <table style="justify-content: center; display:flex">
            <tbody>
            <tr>
            <td style="border: 1px;border-style: solid; padding-inline: 30px">
              <img src="${test_stimuli_8[0].stimulus}">
              <img src="${test_stimuli_8[2].stimulus}">
              <img src="${test_stimuli_8[4].stimulus}">
              <img src="${test_stimuli_8[6].stimulus}">
            </td>
            <td style="width: 10px"></td>
              <td style="border: 1px;border-style: solid;padding-inline: 30px">
              <img src="${test_stimuli_8[1].stimulus}">
              <img src="${test_stimuli_8[3].stimulus}">
              <img src="${test_stimuli_8[5].stimulus}">
              <img src="${test_stimuli_8[7].stimulus}">
            </tr>
               <tr style="border: 0px;border-style: solid;">
                <td style="border: 0px;border-style: solid;">
                 <p> San-Diego Zoo - <strong>Press S</strong </p>
                 </td>
                 <td style="width: 10px"></td>
                  <td style="border: 0px;border-style: solid;">
                 <p> Kansas-City Zoo -  <strong>Press K</strong> </p>
                </td>
            </tbody>
          </table>
          `
        ,
        post_trial_gap: 50
      };