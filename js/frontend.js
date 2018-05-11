$(document).ready(function(){
    $('header > .content > .join > .button_join > button').click(function(){
        r.popup_text_content({

            content: '\
<div class="fieldset">\n\
    <div class="field">\n\
        <input type="text" placeholder="Введите ваше имя" id="form_name" />\n\
    </div>\n\
    <div class="field">\n\
        <input type="text" placeholder="Укажите номер телефона" id="form_phone" />\n\
    </div>\n\
    <div class="field">\n\
        <button id="form_button">Отправить заявку</button>\n\
    </div>\n\
</div>\n\
',

            title: 'Заказать обратный звонок',
            scroll: 'false',
            class: 'order_callback',
            width: 770,
            close_id: 'rp_callback'

        });

        $('#form_phone').mask('+7(999) 999-99-99');

        $('#form_button').click(function(){

            fields = r.check_fields({
    
                form_name: {
    
                    type: 'text',
                    min_length: 1,
                    error_text: 'Поле заполненно некорректно!'
    
                },
    
                form_phone: {
    
                    type: 'text',
                    min_length: 1,
                    error_text: 'Поле заполненно некорректно!'
    
                }

            });

            param1=$('#form_name').val();
            param2=$('#form_phone').val();
            console.log( param1, param2 );

            $.post('/ajax/callback.php', function(data) {
                   console.log(data);
                    if(data==1) {
                       alert('Спасибо! Принято...');
                   }
                }
            );

         });
   
    });
});
