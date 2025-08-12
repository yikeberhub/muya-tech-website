<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
{
    Schema::create('hero_sections', function (Blueprint $table) {
        $table->id();
        $table->string('headline');
        $table->text('subheading')->nullable();
        $table->string('button_text')->nullable();
        $table->string('button_link')->nullable();
        $table->string('hero_image_url')->nullable();
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hero_sections');
    }
};
