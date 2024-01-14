$(document).ready(function(){
    let input_value = 0
    let result_value = 0

    $("#display").text(input_value)

    // 数値ブロックの制御（小数点）
    function canAddDecimal(input){
        let lastOperatorIndex = -1
        let operators = ['+','-','/','*']

        for(let i = input.length -1; i >= 0; i--){
            if (operators.includes(input[i])){
                lastOperatorIndex = i
                break
            }
        }

        let currentNumberBlock = input.substring(lastOperatorIndex + 1) 

        console.log(currentNumberBlock)

        return !currentNumberBlock.includes('.')
    }

    // 数値ブロックの制御（0）
    function isZero(input){
        let lastOperatorIndex = -1
        let operators = ['+','-','/','*']

        for(let i = input.length -1; i >= 0; i--){
            if (operators.includes(input[i])){
                lastOperatorIndex = i
                break
            }
        }

        let currentNumberBlock = input.substring(lastOperatorIndex + 1) 

        console.log(currentNumberBlock)
        console.log(currentNumberBlock === '0')

        return currentNumberBlock === '0'
    }

    // 「-」以外の演算子処理
    $(".operator").click(function(){
        if(input_value == 0){
            input_value = 0
        }else{
            input_value += $(this).text()
            $(".operator").prop('disabled',true)
            $("#button_minus").prop('disabled',true)
            $("#button_dot").prop('disabled',true)
            $("#button_00").prop('disabled',true)
        }
        $("#display").text(input_value)
    })
    
    // 「-」の処理
    $("#button_minus").click(function(){
        if(input_value == 0){
            input_value = $(this).text()
        }else{
            input_value += $(this).text()
        }
        $("#display").text(input_value)
        $(".operator").prop('disabled',true)
        $("#button_minus").prop('disabled',true)
        $("#button_dot").prop('disabled',true)
        $("#button_00").prop('disabled',true)
    })


    // 「.」の処理
    $("#button_dot").click(function(){
        if(input_value == 0){
            input_value += $(this).text()
            $("#display").text(input_value)
            $(".operator").prop('disabled',true)
            $("#button_minus").prop('disabled',true)
            $("#button_dot").prop('disabled',true)
            $("#button_00").prop('disabled',false)
        }else if(!canAddDecimal(input_value)){
            input_value
            $("#display").text(input_value)
            $(".operator").prop('disabled',false)
            $("#button_minus").prop('disabled',false)
            $("#button_dot").prop('disabled',false)
            $("#button_00").prop('disabled',false)
        }else{
            input_value += $(this).text()
            $("#display").text(input_value)
            $(".operator").prop('disabled',true)
            $("#button_minus").prop('disabled',true)
            $("#button_dot").prop('disabled',true)
            $("#button_00").prop('disabled',false)
        }
    })

    // 「=」処理
    $("#button_equal").click(function(){
        result_value = eval(input_value)
        $("#display").text(result_value)
        input_value = result_value
    })
    
    // 「AC」処理
    $("#button_AC").click(function(){
        input_value = 0
        $("#display").text(input_value)
        $("#display").text(input_value)
        $(".operator").prop('disabled',true)
        $("#button_minus").prop('disabled',false)
        $("#button_dot").prop('disabled',false)
        $("#button_00").prop('disabled',false)
    })

    // 「自然数」処理
    $(".natural_number").click(function(){
        if(input_value === 0){
            input_value = $(this).text()
        }else if(isZero(input_value)){
            input_value = input_value.substring(0, input_value.length - 1) + $(this).text()
        }else{
            input_value += $(this).text()
        }
        $("#display").text(input_value)
        $(".operator").prop('disabled',false)
        $("#button_minus").prop('disabled',false)
        $("#button_dot").prop('disabled',false)
        $("#button_00").prop('disabled',false)
    })

    // 「0」処理
    $("#button_0").click(function(){
        if(input_value == 0){
            input_value
        }else if(isZero(input_value)){
            input_value
        }else{
            input_value += $(this).text()
        }
        $("#display").text(input_value)
        $(".operator").prop('disabled',false)
        $("#button_minus").prop('disabled',false)
        $("#button_dot").prop('disabled',false)
        $("#button_00").prop('disabled',false)
    })

        // 「00」処理
        $("#button_00").click(function(){
            if(input_value == 0){
                input_value
            }else if(isZero(input_value)){
                input_value
            }else{
                input_value += $(this).text()
            }
            $("#display").text(input_value)
            $(".operator").prop('disabled',false)
            $("#button_minus").prop('disabled',false)
            $("#button_dot").prop('disabled',false)
            $("#button_00").prop('disabled',false)
        })

    // // 「0」「00」ボタン処理
    // $("#button_00").click(function(){
    // if(input_value == 0){
    //     input_value = $("#button_0").text()
    // }else{
    //     input_value += $(this).text()
    // }
    // $("#display").text(input_value)
    // })

    // // 「0」ボタン処理
    // $("#button_0").click(function(){
    //     if(input_value == 0){
    //         input_value = $(this).text()
    //     }else{
    //         input_value += $(this).text()
    //     }
    //     $("#display").text(input_value)
    // })
    
    // // 「5」ボタン処理
    // $("#button_5").click(function(){
    //     if(input_value == 0){
    //         input_value = $(this).text()
    //     }else{
    //         input_value += $(this).text()
    //     }
    //     $("#display").text(input_value)
    // })
    
    // // 「6」ボタン処理
    // $("#button_6").click(function(){
    //     if(input_value == 0){
    //         input_value = $(this).text()
    //     }else{
    //         input_value += $(this).text()
    //     }
    //     $("#display").text(input_value)
    // })


})


