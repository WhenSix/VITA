package sptech.whensix.model;

public class Dado {
    private int id;
    private int cdgCidade;
    private int idade;
    private int sexo;
    private float peso;
    private int altura;
    private int frequenciaRefri;
    private int qtdRefri;
    private int tipoRefri;
    private boolean alcoolismo;
    private int freqAlcool;
    private boolean exercicioFisico;
    private int tipoExercicioFisico;
    private int freqExercicioFisico;
    private boolean fumante;
    private double pesoRake;
    private float imc;
    private boolean excPeso;
    private boolean obesidade;
    private boolean depressao;
    private transient Double imcCalculado;



    // Getters e Setters

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public int getCdgCidade() { return cdgCidade; }
    public void setCdgCidade(int cdgCidade) { this.cdgCidade = cdgCidade; }

    public int getIdade() {return idade;}
    public void setIdade(int idade) {this.idade = idade;}

    public int getSexo() { return sexo; }
    public void setSexo(int sexo) { this.sexo = sexo; }

    public float getPeso() { return peso; }
    public void setPeso(float peso) { this.peso = peso; }

    public int getAltura() { return altura; }
    public void setAltura(int altura) { this.altura = altura; }

    public int getFrequenciaRefri() { return frequenciaRefri; }
    public void setFrequenciaRefri(int frequenciaRefri) { this.frequenciaRefri = frequenciaRefri; }

    public int getTipoRefri() {return tipoRefri;}
    public void setTipoRefri(int tipoRefri) {this.tipoRefri = tipoRefri;}

    public int getQtdRefri() { return qtdRefri; }
    public void setQtdRefri(int qtdRefri) { this.qtdRefri = qtdRefri; }

    public boolean isAlcoolismo() { return alcoolismo; }
    public void setAlcoolismo(boolean alcoolismo) { this.alcoolismo = alcoolismo; }

    public int getFreqAlcool() { return freqAlcool; }
    public void setFreqAlcool(int freqAlcool) { this.freqAlcool = freqAlcool; }

    public boolean isExercicioFisico() { return exercicioFisico; }
    public void setExercicioFisico(boolean exercicioFisico) { this.exercicioFisico = exercicioFisico; }

    public int getTipoExercicioFisico() { return tipoExercicioFisico; }
    public void setTipoExercicioFisico(int tipoExercicioFisico) { this.tipoExercicioFisico = tipoExercicioFisico; }

    public int getFreqExercicioFisico() { return freqExercicioFisico; }
    public void setFreqExercicioFisico(int freqExercicioFisico) { this.freqExercicioFisico = freqExercicioFisico; }

    public boolean isFumante() { return fumante; }
    public void setFumante(boolean fumante) { this.fumante = fumante; }

    public double getPesoRake() { return pesoRake; }
    public void setPesoRake(double pesoRake) { this.pesoRake = pesoRake; }

    public float getImc() { return imc; }
    public void setImc(float imc) { this.imc = imc; }

    public boolean isExcPeso() { return excPeso; }
    public void setExcPeso(boolean excPeso) { this.excPeso = excPeso; }

    public boolean isObesidade() { return obesidade; }
    public void setObesidade(boolean obesidade) { this.obesidade = obesidade; }

    public boolean isDepressao() { return depressao; }
    public void setDepressao(boolean depressao) { this.depressao = depressao; }

    public Double getImcCalculado() { return imcCalculado; }
    public void setImcCalculado(Double imcCalculado) { this.imcCalculado = imcCalculado; }
}
